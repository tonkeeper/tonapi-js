import {
    GenerateApiParams,
    PrimitiveTypeStruct,
    SchemaComponent,
    generateApi
} from 'swagger-typescript-api';

import path from 'path';
import * as fs from 'fs';
import * as https from 'https';
import * as yaml from 'js-yaml';

const packageVersion = process.env.npm_package_version;

const openapiPath = path.resolve(process.cwd(), 'src/api.yml');
const openapiUrl = 'https://tonapi.io/v2/openapi.yml';

/**
 * Schema Patches System
 * ---------------------
 * This file (schema-patches.json) contains modifications that are automatically
 * applied to the OpenAPI schema before client generation.
 *
 * Format: Standard JSON object that gets deeply merged with the original schema.
 *
 * Example:
 * {
 *   "components": {
 *     "schemas": {
 *       "ChartPoints": {
 *         "type": "array",
 *         "prefixItems": [
 *           { "type": "integer", "format": "int64", "description": "Unix timestamp" },
 *           { "type": "number", "description": "Price" }
 *         ],
 *         "items": false
 *       }
 *     }
 *   }
 * }
 *
 * The patch will be applied every time you run `npm run build`.
 * To add new patches, simply edit src/schema-patches.json.
 */
const schemaPatchesPath = path.resolve(process.cwd(), 'src/schema-patches.jsonc');

function downloadSchema(url: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https
            .get(url, response => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log('Schema downloaded');
                    resolve();
                });
            })
            .on('error', err => {
                console.error('Error downloading schema');
                reject(err);
            });
    });
}

/**
 * Parse a path string into array of keys
 * Supports: "a.b.c", "a[0].b", "a[\"key.with.dots\"].b"
 * Example: parsePath('a.b["c.d"][0].e') => ['a', 'b', 'c.d', '0', 'e']
 */
function parsePath(path: string): string[] {
    const keys: string[] = [];
    let current = '';
    let inBracket = false;
    let inQuotes = false;
    let quoteChar = '';

    for (let i = 0; i < path.length; i++) {
        const char = path[i];

        if (inBracket) {
            if (inQuotes) {
                if (char === quoteChar) {
                    inQuotes = false;
                } else {
                    current += char;
                }
            } else if (char === '"' || char === "'") {
                inQuotes = true;
                quoteChar = char;
            } else if (char === ']') {
                if (current) keys.push(current);
                current = '';
                inBracket = false;
            } else {
                current += char;
            }
        } else if (char === '[') {
            if (current) {
                keys.push(current);
                current = '';
            }
            inBracket = true;
        } else if (char === '.') {
            if (current) {
                keys.push(current);
                current = '';
            }
        } else {
            current += char;
        }
    }

    if (current) keys.push(current);
    return keys;
}

/**
 * Set a value in an object by path (supports dot notation and array indices)
 * Example: setByPath(obj, 'a.b[0].c', value) sets obj.a.b[0].c = value
 * Example: setByPath(obj, 'a["b.c"].d', value) sets obj.a["b.c"].d = value
 */
function setByPath(obj: any, path: string, value: any): void {
    const keys = parsePath(path);
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        // Check if next key is a number (array index)
        const isNextKeyArray = /^\d+$/.test(nextKey);

        // Initialize if doesn't exist
        if (!(key in current)) {
            current[key] = isNextKeyArray ? [] : {};
        }

        current = current[key];
    }

    // Set the final value
    const lastKey = keys[keys.length - 1];
    current[lastKey] = value;
}

/**
 * Apply path-based patches to an object
 * Patches format: { "path.to.property": value }
 */
function applyPatches(target: any, patches: Record<string, any>): any {
    // Clone target to avoid mutation
    const result = JSON.parse(JSON.stringify(target));

    // Apply each patch by path
    for (const [path, value] of Object.entries(patches)) {
        setByPath(result, path, value);
    }

    return result;
}

/**
 * Strip comments from JSONC (JSON with Comments)
 */
function stripJsonComments(jsonc: string): string {
    // Remove single-line comments (// ...)
    let result = jsonc.replace(/\/\/.*$/gm, '');
    // Remove multi-line comments (/* ... */)
    result = result.replace(/\/\*[\s\S]*?\*\//g, '');
    return result;
}

/**
 * Apply patches from schema-patches.jsonc to the downloaded schema
 */
function applySchemaPatches(schemaPath: string, patchesPath: string): void {
    if (!fs.existsSync(patchesPath)) {
        console.log('No schema patches file found, skipping patches');
        return;
    }

    console.log('Applying schema patches...');

    // Read the schema
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    const schema = yaml.load(schemaContent) as any;

    // Read the patches (supports JSONC with comments)
    const patchesContent = fs.readFileSync(patchesPath, 'utf8');
    const patchesJson = stripJsonComments(patchesContent);
    const patches = JSON.parse(patchesJson);

    // Apply patches
    const patchedSchema = applyPatches(schema, patches);

    // Write back to file
    const yamlOutput = yaml.dump(patchedSchema, {
        lineWidth: -1,
        noRefs: true,
        sortKeys: false
    });

    fs.writeFileSync(schemaPath, yamlOutput, 'utf8');
    console.log('Schema patches applied successfully');
}

function snakeToCamel(snakeCaseString: string): string {
    return snakeCaseString.replace(/(_\w)/g, match => match[1]?.toUpperCase() ?? '');
}

function mapEntries(
    object: Object,
    mapCallbackFn: (entry: [string, any]) => [string, any]
): Object {
    return Object.fromEntries(Object.entries(object).map(mapCallbackFn));
}

function onCreateComponent(component: SchemaComponent) {
    function camelCaseProperties(object: any): any {
        if (Array.isArray(object)) {
            return object.map(camelCaseProperties);
        } else if (typeof object === 'object' && object !== null) {
            if (object.properties) {
                object.properties = camelCaseProperties(object.properties);
            }

            if (object.items) {
                object.items = camelCaseProperties(object.items);
            }

            ['allOf', 'anyOf', 'oneOf'].forEach(keyword => {
                if (object[keyword]) {
                    object[keyword] = camelCaseProperties(object[keyword]);
                }
            });

            if (object.additionalProperties && typeof object.additionalProperties === 'object') {
                object.additionalProperties = camelCaseProperties(object.additionalProperties);
            }

            if (object.required && Array.isArray(object.required)) {
                object.required = object.required.map((key: string) => snakeToCamel(key));
            }

            return mapEntries(object, ([key, value]) => {
                return [snakeToCamel(key), camelCaseProperties(value)];
            });
        } else {
            return object;
        }
    }

    component.rawTypeData = camelCaseProperties(component.rawTypeData);
    return component;
}

const generateApiParams: GenerateApiParams = {
    name: 'src/client.ts',
    output: path.resolve(process.cwd(), './'),
    input: openapiPath,
    templates: path.resolve(process.cwd(), 'src/templates'),
    httpClientType: 'fetch',
    unwrapResponseData: true,
    moduleNameFirstTag: true,
    singleHttpClient: true,
    cleanOutput: false,
    generateClient: true,
    extractResponseBody: true,
    primitiveTypeConstructs: (struct: PrimitiveTypeStruct) => ({
        ...struct,
        integer: {
            $default: 'number',
            bigint: 'bigint'
        },
        string: {
            $default: 'string',
            address: 'Address',
            cell: 'Cell',
            bigint: 'bigint',
            'cell-base64': 'Cell',
            'tuple-item': 'TupleItem',
            'maybe-address': 'Address | null',
            'token-or-address': 'Address'
        }
    }),
    hooks: {
        onCreateComponent,
        onFormatTypeName: typeName => {
            return typeName === 'TvmStackRecord' ? 'TupleItem' : typeName;
        },
        onPreParseSchema(originalSchema) {
            if (originalSchema.type === 'array' && originalSchema.prefixItems) {
                const { prefixItems, ...rest } = originalSchema;
                return {
                    ...rest,
                    items: prefixItems
                };
            }

            return {
                ...originalSchema,
                format: originalSchema['x-js-format'] ?? originalSchema.format
            };
        }
    },
    // @ts-ignore
    packageVersion
};

async function main() {
    // Download schema and apply patches automatically
    await downloadSchema(openapiUrl, openapiPath);
    applySchemaPatches(openapiPath, schemaPatchesPath);

    generateApi(generateApiParams);
}

main();
