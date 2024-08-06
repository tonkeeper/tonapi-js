// @ts-ignore
import parse from 'core-js-pure/actual/json/parse';
// @ts-ignore
import rawJSON from 'core-js-pure/actual/json/raw-json';
// @ts-ignore
import stringify from 'core-js-pure/actual/json/stringify';


export const JSONParse = (source: string) => parse(
    source,
    // @ts-ignore JSON bigint support from core-js
    (_: any, value: any, context: any): any => {
        if (typeof value === 'number') {        
            const string = context.source as string;
            return Number.isSafeInteger(value)
                ? value
                : /[\.eE]/.test(string)
                  ? value
                  : BigInt(string);
        }

        return value;
    }
)

export const JSONStringify = (value: any) => stringify(
    value,
    // @ts-ignore JSON bigint support from core-js
    (_: any, value: any): any => {
        if (typeof value === 'bigint') {
            // @ts-ignore JSON rawJSON support from core-js
            return rawJSON(value.toString());
        }

        return value;
    }
)