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
exports.BlockToJSON = exports.BlockFromJSONTyped = exports.BlockFromJSON = void 0;
function BlockFromJSON(json) {
    return BlockFromJSONTyped(json, false);
}
exports.BlockFromJSON = BlockFromJSON;
function BlockFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endLt': json['end_lt'],
        'fileHash': json['file_hash'],
        'rootHash': json['root_hash'],
        'seqno': json['seqno'],
        'shard': json['shard'],
        'startLt': json['start_lt'],
        'workchainId': json['workchain_id'],
    };
}
exports.BlockFromJSONTyped = BlockFromJSONTyped;
function BlockToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'end_lt': value.endLt,
        'file_hash': value.fileHash,
        'root_hash': value.rootHash,
        'seqno': value.seqno,
        'shard': value.shard,
        'start_lt': value.startLt,
        'workchain_id': value.workchainId,
    };
}
exports.BlockToJSON = BlockToJSON;
