import {
  GenerateApiParams,
  PrimitiveTypeStruct,
  SchemaComponent,
  generateApi,
  // generateTemplates,
} from "swagger-typescript-api";

import path from "path";
import * as fs from 'fs';
import * as https from 'https';

const openapiPath = path.resolve(process.cwd(), "src/api.yml");
const openapiUrl = "https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml";

function downloadSchema(url: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('Schema downloaded');
                resolve();
            });
        }).on('error', (err) => {
            console.error('Error downloading schema');
            reject(err);
        });
    });
}

function snakeToCamel(snakeCaseString: string): string {
  return snakeCaseString.replace(/(_\w)/g, (match) => match[1]?.toUpperCase() ?? '');
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
    } else if (typeof object === "object" && object !== null) {
      if (object.properties) {
        object.properties = camelCaseProperties(object.properties);
      }

      if (object.items) {
        object.items = camelCaseProperties(object.items);
      }

      ["allOf", "anyOf", "oneOf"].forEach((keyword) => {
        if (object[keyword]) {
          object[keyword] = camelCaseProperties(object[keyword]);
        }
      });

      if (
        object.additionalProperties &&
        typeof object.additionalProperties === "object"
      ) {
        object.additionalProperties = camelCaseProperties(
          object.additionalProperties
        );
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
  name: "src/client.ts",
  output: path.resolve(process.cwd(), "./"),
  input: openapiPath,
  templates: path.resolve(process.cwd(), "src/templates"),
  httpClientType: "fetch",
  unwrapResponseData: true,
  moduleNameFirstTag: true,
  singleHttpClient: true,
  cleanOutput: false,
  generateClient: true,
  primitiveTypeConstructs: (struct: PrimitiveTypeStruct) => ({
    ...struct,
    integer: {
      $default: "number",
      bigint: 'bigint',
    },
    string: {
      $default: "string",
      address: "Address",
      cell: "Cell",
      "cell-base64": "Cell",
      "tuple-item": "TupleItem",
    },
  }),
  hooks: {
    onCreateComponent,
    onFormatTypeName: (typeName) => {
      return typeName === 'TvmStackRecord' ? 'TupleItem' : typeName;
    },
    onPreParseSchema(originalSchema) {
      return {
        ...originalSchema,
        format: originalSchema['x-js-format'] ?? originalSchema.format
      }
    },
  },
};

async function main() {
  await downloadSchema(openapiUrl, openapiPath);
  generateApi(generateApiParams);
}

main();

// generateTemplates({
//   cleanOutput: false,
//   output: path.resolve(process.cwd(), "./src/templates"),
//   httpClientType: "fetch",
//   modular: false,
//   silent: false,
//   // rewrite: false,
// });