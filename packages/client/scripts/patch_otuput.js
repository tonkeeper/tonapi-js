const path = require('path');
const fs = require('fs');

var template = 'declare class Api<SecurityDataType extends unknown> {';
var templateCorrect = 'declare class Api<SecurityDataType extends unknown = unknown> {';

var filePath = path.resolve(process.cwd(), './dist/index.d.ts');
var fileContent = fs.readFileSync(filePath).toString();

fileContent = fileContent.replace(template, templateCorrect);

fs.writeFileSync(filePath, fileContent);
