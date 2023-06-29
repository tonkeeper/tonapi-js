"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageProviderToJSON = exports.StorageProviderFromJSONTyped = exports.StorageProviderFromJSON = exports.instanceOfStorageProvider = void 0;
/**
 * Check if a given object implements the StorageProvider interface.
 */
function instanceOfStorageProvider(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "acceptNewContracts" in value;
    isInstance = isInstance && "ratePerMbDay" in value;
    isInstance = isInstance && "maxSpan" in value;
    isInstance = isInstance && "minimalFileSize" in value;
    isInstance = isInstance && "maximalFileSize" in value;
    return isInstance;
}
exports.instanceOfStorageProvider = instanceOfStorageProvider;
function StorageProviderFromJSON(json) {
    return StorageProviderFromJSONTyped(json, false);
}
exports.StorageProviderFromJSON = StorageProviderFromJSON;
function StorageProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'acceptNewContracts': json['accept_new_contracts'],
        'ratePerMbDay': json['rate_per_mb_day'],
        'maxSpan': json['max_span'],
        'minimalFileSize': json['minimal_file_size'],
        'maximalFileSize': json['maximal_file_size'],
    };
}
exports.StorageProviderFromJSONTyped = StorageProviderFromJSONTyped;
function StorageProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'accept_new_contracts': value.acceptNewContracts,
        'rate_per_mb_day': value.ratePerMbDay,
        'max_span': value.maxSpan,
        'minimal_file_size': value.minimalFileSize,
        'maximal_file_size': value.maximalFileSize,
    };
}
exports.StorageProviderToJSON = StorageProviderToJSON;