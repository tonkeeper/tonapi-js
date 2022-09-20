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
    Jetton,
    JettonFromJSON,
    JettonFromJSONTyped,
    JettonToJSON,
} from './Jetton';

/**
 * 
 * @export
 * @interface JettonBalance
 */
export interface JettonBalance {
    /**
     * 
     * @type {string}
     * @memberof JettonBalance
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof JettonBalance
     */
    jettonAddress: string;
    /**
     * 
     * @type {AccountAddress}
     * @memberof JettonBalance
     */
    walletAddress: AccountAddress;
    /**
     * 
     * @type {Jetton}
     * @memberof JettonBalance
     */
    metadata?: Jetton;
}

export function JettonBalanceFromJSON(json: any): JettonBalance {
    return JettonBalanceFromJSONTyped(json, false);
}

export function JettonBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonBalance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'jettonAddress': json['jetton_address'],
        'walletAddress': AccountAddressFromJSON(json['wallet_address']),
        'metadata': !exists(json, 'metadata') ? undefined : JettonFromJSON(json['metadata']),
    };
}

export function JettonBalanceToJSON(value?: JettonBalance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'jetton_address': value.jettonAddress,
        'wallet_address': AccountAddressToJSON(value.walletAddress),
        'metadata': JettonToJSON(value.metadata),
    };
}

