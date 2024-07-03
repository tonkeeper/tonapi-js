import {
  PrimitiveTypeStruct,
  SchemaComponent,
  generateApi,
  generateTemplates,
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
  httpClientType: "fetch", // or "axios"
  //   defaultResponseAsSuccess: false,
  //   generateRouteTypes: false,
  //   generateResponses: true,
  //   extractRequestParams: false,
  //   extractRequestBody: false,
  // extractEnums: true,
  unwrapResponseData: true,
  moduleNameFirstTag: true,
  singleHttpClient: true,
  // generateUnionEnums: true,
  cleanOutput: false,
  generateClient: true,
  // typePrefix: 'C',
  // unwrapResponseData: true,
  //   prettier: {
  //     // By default prettier config is load from your project
  //     printWidth: 120,
  //     tabWidth: 2,
  //     trailingComma: "all",
  //     parser: "typescript",
  //   },
  //   defaultResponseType: "void",
  // singleHttpClient: true,
  //   cleanOutput: false,
  //   enumNamesAsValues: false,
  // moduleNameFirstTag: true,
  //   generateUnionEnums: false,
  //   typePrefix: "",
  //   typeSuffix: "",
  //   enumKeyPrefix: "",
  //   enumKeySuffix: "",
  //   addReadonly: false,
  //   sortTypes: false,
  //   sortRouters: false,
  //   extractingOptions: {
  //     requestBodySuffix: ["Payload", "Body", "Input"],
  //     requestParamsSuffix: ["Params"],
  //     responseBodySuffix: ["Data", "Result", "Output"],
  //     responseErrorSuffix: [
  //       "Error",
  //       "Fail",
  //       "Fails",
  //       "ErrorData",
  //       "HttpError",
  //       "BadResponse",
  //     ],
  //   },
  //   /** allow to generate extra files based with this extra templates, see more below */
  //   extraTemplates: [],
  //   anotherArrayType: false,
  //   fixInvalidTypeNamePrefix: "Type",
  //   fixInvalidEnumKeyPrefix: "Value",
  // codeGenConstructs: (constructs) => ({
  //   ...constructs,
  //   address: (key, value) => {
  //       console.log(key, value);
  //       return "Address";
  //   },
  // }),
  primitiveTypeConstructs: (struct: PrimitiveTypeStruct) => ({
    ...struct,
    integer: {
      $default: "number",
      int64: 'BigInt',
    },
    string: {
      $default: "string",
      address: "Address",
      cell: "Cell",
      tuple: "Tuple",
      "tuple-item": "TupleItem",
    },
  }),
  hooks: {
    onCreateComponent,
    onFormatTypeName: (typeName, rawTypeName, schemaType) => {
      return typeName === 'TvmStackRecord' ? 'TupleItem' : typeName;
    },
    // onCreateRequestParams: (rawType) => {
    //   const patchedRowType = rawType.map
    //   rawType
    //   console.log('rawType: ', rawType);
    //   return rawType;
    // },
    // onCreateRoute: (routeData) => {
    //   console.log('routeData: ', routeData);
    //   return routeData;
    // },
    //     onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    // onFormatRouteName: (routeInfo, templateRouteName) => {
    //   console.log('routeInfo: ', routeInfo);
    //   return templateRouteName;
    // },
    // onFormatTypeName: (typeName, rawTypeName, schemaType) => {
    //   console.log('typeName: ', typeName, rawTypeName, schemaType);
    //   return typeName;
    // },
    // onInit: (configuration) => {
    //   // console.log('configuration: ', configuration.originalSchema);
    //   return {
    //     ...configuration,
    //     originalSchema: replaceType(configuration.originalSchema),
    //     swaggerSchema: replaceType(configuration.swaggerSchema),
    //     };
    // },
    // onPreParseSchema: (originalSchema, typeName, schemaType) => {
    //   // console.log('typeName: ', typeName, schemaType);
    //   // console.log(originalSchema);

    //   return {
    //     ...originalSchema,
    //     properties: originalSchema.properties && mapObject(originalSchema.properties, (value: any) => {
    //       const newValueType = value["x-tc-type"] ? value["x-tc-type"] : value.type;
    //       return {
    //         ...value,
    //         type: newValueType,
    //       };
    //     }),
    //   };
    // },
    // onParseSchema: (originalSchema, parsedSchema) => {
    //   // if (parsedSchema['$ref']?.includes('AccountAddress')) {
    //   // console.log('parsedSchema: ', parsedSchema);
    //   // }
    //   return parsedSchema;
    // },
    //     onPrepareConfig: (currentConfiguration) => {},
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