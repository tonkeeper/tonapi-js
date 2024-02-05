var generateApi = require('swagger-typescript-api').generateApi;
var path = require('path');

generateApi({
    name: 'index.ts',
    output: path.resolve(process.cwd(), './src'),
    url: 'https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml',
    unwrapResponseData: true,
    moduleNameFirstTag: true,
    singleHttpClient: true
});
