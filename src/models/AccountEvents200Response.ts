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
    AccountEvent,
    AccountEventFromJSON,
    AccountEventFromJSONTyped,
    AccountEventToJSON,
} from './AccountEvent';

/**
 * 
 * @export
 * @interface AccountEvents200Response
 */
export interface AccountEvents200Response {
    /**
     * 
     * @type {Array<AccountEvent>}
     * @memberof AccountEvents200Response
     */
    events: Array<AccountEvent>;
}

export function AccountEvents200ResponseFromJSON(json: any): AccountEvents200Response {
    return AccountEvents200ResponseFromJSONTyped(json, false);
}

export function AccountEvents200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountEvents200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'events': ((json['events'] as Array<any>).map(AccountEventFromJSON)),
    };
}

export function AccountEvents200ResponseToJSON(value?: AccountEvents200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'events': ((value.events as Array<any>).map(AccountEventToJSON)),
    };
}

