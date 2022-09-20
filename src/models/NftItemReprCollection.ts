/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NftItemReprCollection
 */
export interface NftItemReprCollection {
    /**
     * 
     * @type {string}
     * @memberof NftItemReprCollection
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemReprCollection
     */
    name: string;
}

export function NftItemReprCollectionFromJSON(json: any): NftItemReprCollection {
    return NftItemReprCollectionFromJSONTyped(json, false);
}

export function NftItemReprCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemReprCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
    };
}

export function NftItemReprCollectionToJSON(value?: NftItemReprCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'name': value.name,
    };
}

