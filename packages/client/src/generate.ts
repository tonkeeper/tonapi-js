import {
  PrimitiveTypeStruct,
  SchemaComponent,
  generateApi,
  // generateTemplates,
} from "swagger-typescript-api";

import path from "path";

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

/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: "src/client.ts",
  output: path.resolve(process.cwd(), "./"),
  //   url: "https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml",
  input: path.resolve(process.cwd(), "src/api.yml"),
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
      boc: "Cell",
      "cell-base64": "Cell",
      "tuple-item": "TupleItem",
    },
  }),
  hooks: {
    onCreateComponent,
    onFormatTypeName: (typeName, rawTypeName, schemaType) => {
      return typeName === 'TvmStackRecord' ? 'TupleItem' : typeName;
    },
    onPreParseSchema(originalSchema, typeName, schemaType) {
      return {
        ...originalSchema,
        format: originalSchema['x-js-format'] ?? originalSchema.format
      }
    },
  },
});

// generateTemplates({
//   cleanOutput: false,
//   output: path.resolve(process.cwd(), "./src/templates"),
//   httpClientType: "fetch",
//   modular: false,
//   silent: false,
//   // rewrite: false,
// });