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


import * as runtime from '../runtime';
import type {
  DnsRecord,
  DomainInfo,
} from '../models';
import {
    DnsRecordFromJSON,
    DnsRecordToJSON,
    DomainInfoFromJSON,
    DomainInfoToJSON,
} from '../models';

export interface DnsResolveRequest {
    name: string;
}

export interface GetDomainInfoRequest {
    name: string;
}

/**
 * DNSApi - interface
 * 
 * @export
 * @interface DNSApiInterface
 */
export interface DNSApiInterface {
    /**
     * DNS resolve for domain name
     * @param {string} name domain name with .ton
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>>;

    /**
     * DNS resolve for domain name
     */
    dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord>;

    /**
     * domain info
     * @param {string} name domain name with .ton
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>>;

    /**
     * domain info
     */
    getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo>;

}

/**
 * 
 */
export class DNSApi extends runtime.BaseAPI implements DNSApiInterface {

    /**
     * DNS resolve for domain name
     */
    async dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DnsRecord>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling dnsResolve.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/resolve`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DnsRecordFromJSON(jsonValue));
    }

    /**
     * DNS resolve for domain name
     */
    async dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DnsRecord> {
        const response = await this.dnsResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * domain info
     */
    async getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainInfo>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getDomainInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/dns/getInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainInfoFromJSON(jsonValue));
    }

    /**
     * domain info
     */
    async getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainInfo> {
        const response = await this.getDomainInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}