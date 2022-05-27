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
exports.NftCollectionsToJSON = exports.NftCollectionsFromJSONTyped = exports.NftCollectionsFromJSON = void 0;
const NftCollection_1 = require("./NftCollection");
function NftCollectionsFromJSON(json) {
    return NftCollectionsFromJSONTyped(json, false);
}
exports.NftCollectionsFromJSON = NftCollectionsFromJSON;
function NftCollectionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nftCollections': (json['nft_collections'].map(NftCollection_1.NftCollectionFromJSON)),
    };
}
exports.NftCollectionsFromJSONTyped = NftCollectionsFromJSONTyped;
function NftCollectionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nft_collections': (value.nftCollections.map(NftCollection_1.NftCollectionToJSON)),
    };
}
exports.NftCollectionsToJSON = NftCollectionsToJSON;
