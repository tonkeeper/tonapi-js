"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftItemsToJSON = exports.NftItemsFromJSONTyped = exports.NftItemsFromJSON = void 0;
const NftItem_1 = require("./NftItem");
function NftItemsFromJSON(json) {
    return NftItemsFromJSONTyped(json, false);
}
exports.NftItemsFromJSON = NftItemsFromJSON;
function NftItemsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nftItems': (json['nft_items'].map(NftItem_1.NftItemFromJSON)),
    };
}
exports.NftItemsFromJSONTyped = NftItemsFromJSONTyped;
function NftItemsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nft_items': (value.nftItems.map(NftItem_1.NftItemToJSON)),
    };
}
exports.NftItemsToJSON = NftItemsToJSON;
