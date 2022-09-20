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
import {
    AccountAddress,
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import {
    Message,
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
} from './Message';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    hash: string;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    fee: number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    storageFee: number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    otherFee: number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    lt: number;
    /**
     * 
     * @type {number}
     * @memberof Transaction
     */
    utime: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof Transaction
     */
    account: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    data: string;
    /**
     * 
     * @type {Message}
     * @memberof Transaction
     */
    inMsg?: Message;
    /**
     * 
     * @type {Array<Message>}
     * @memberof Transaction
     */
    outMsgs: Array<Message>;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': json['hash'],
        'fee': json['fee'],
        'storageFee': json['storage_fee'],
        'otherFee': json['other_fee'],
        'lt': json['lt'],
        'utime': json['utime'],
        'account': AccountAddressFromJSON(json['account']),
        'data': json['data'],
        'inMsg': !exists(json, 'in_msg') ? undefined : MessageFromJSON(json['in_msg']),
        'outMsgs': ((json['out_msgs'] as Array<any>).map(MessageFromJSON)),
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
        'fee': value.fee,
        'storage_fee': value.storageFee,
        'other_fee': value.otherFee,
        'lt': value.lt,
        'utime': value.utime,
        'account': AccountAddressToJSON(value.account),
        'data': value.data,
        'in_msg': MessageToJSON(value.inMsg),
        'out_msgs': ((value.outMsgs as Array<any>).map(MessageToJSON)),
    };
}

