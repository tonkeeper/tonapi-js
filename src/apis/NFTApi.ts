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
import {
    NftCollection,
    NftCollectionFromJSON,
    NftCollectionToJSON,
    NftCollections,
    NftCollectionsFromJSON,
    NftCollectionsToJSON,
    NftItem,
    NftItemFromJSON,
    NftItemToJSON,
    NftItems,
    NftItemsFromJSON,
    NftItemsToJSON,
    NftItemsRepr,
    NftItemsReprFromJSON,
    NftItemsReprToJSON,
    NftSalesResponse,
    NftSalesResponseFromJSON,
    NftSalesResponseToJSON,
} from '../models';

export interface GetNFTItemsRequest {
    addresses: Array<string>;
}

export interface GetNftCollectionRequest {
    account: string;
}

export interface GetNftForSaleRequest {
    account: string;
}

export interface GetNftItemByAddressRequest {
    account: string;
}

export interface GetNftItemsByCollectionAddressRequest {
    account: string;
}

export interface GetNftItemsByOwnerAddressRequest {
    account: string;
}

export interface SearchNFTItemsRequest {
    limit: number;
    offset: number;
    owner?: string;
    collection?: string;
    includeOnSale?: boolean;
}

/**
 * NFTApi - interface
 * 
 * @export
 * @interface NFTApiInterface
 */
export interface NFTApiInterface {
    /**
     * Get NFT items by addresses
     * @param {Array<string>} addresses NFT items addresses in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNFTItemsRaw(requestParameters: GetNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItemsRepr>>;

    /**
     * Get NFT items by addresses
     */
    getNFTItems(requestParameters: GetNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItemsRepr>;

    /**
     * Get NFT collection by collection address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftCollectionRaw(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftCollection>>;

    /**
     * Get NFT collection by collection address
     */
    getNftCollection(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftCollection>;

    /**
     * Get all NFT collections
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftCollectionsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftCollections>>;

    /**
     * Get all NFT collections
     */
    getNftCollections(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftCollections>;

    /**
     * Get NFT items for sale
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftForSaleRaw(requestParameters: GetNftForSaleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftSalesResponse>>;

    /**
     * Get NFT items for sale
     */
    getNftForSale(requestParameters: GetNftForSaleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftSalesResponse>;

    /**
     * Get NFT item by its address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftItemByAddressRaw(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItem>>;

    /**
     * Get NFT item by its address
     */
    getNftItemByAddress(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItem>;

    /**
     * Get all NFT items from collection by collection address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftItemsByCollectionAddressRaw(requestParameters: GetNftItemsByCollectionAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItems>>;

    /**
     * Get all NFT items from collection by collection address
     */
    getNftItemsByCollectionAddress(requestParameters: GetNftItemsByCollectionAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItems>;

    /**
     * Get all NFT items by owner address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftItemsByOwnerAddressRaw(requestParameters: GetNftItemsByOwnerAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItems>>;

    /**
     * Get all NFT items by owner address
     */
    getNftItemsByOwnerAddress(requestParameters: GetNftItemsByOwnerAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItems>;

    /**
     * Search NFT items using filters
     * @param {number} limit maximum qty of items
     * @param {number} offset offset for pagination
     * @param {string} [owner] address in raw (hex without 0x) or base64url format or word \&#39;no\&#39; for items without owner
     * @param {string} [collection] address in raw (hex without 0x) or base64url format or word \&#39;no\&#39; for items without collection
     * @param {boolean} [includeOnSale] include nft items which are currently are on market
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    searchNFTItemsRaw(requestParameters: SearchNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItemsRepr>>;

    /**
     * Search NFT items using filters
     */
    searchNFTItems(requestParameters: SearchNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItemsRepr>;

}

/**
 * 
 */
export class NFTApi extends runtime.BaseAPI implements NFTApiInterface {

    /**
     * Get NFT items by addresses
     */
    async getNFTItemsRaw(requestParameters: GetNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItemsRepr>> {
        if (requestParameters.addresses === null || requestParameters.addresses === undefined) {
            throw new runtime.RequiredError('addresses','Required parameter requestParameters.addresses was null or undefined when calling getNFTItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.addresses) {
            queryParameters['addresses'] = requestParameters.addresses.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/nft/getItems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsReprFromJSON(jsonValue));
    }

    /**
     * Get NFT items by addresses
     */
    async getNFTItems(requestParameters: GetNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItemsRepr> {
        const response = await this.getNFTItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT collection by collection address
     */
    async getNftCollectionRaw(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftCollection>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getNftCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/nft/getCollection`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftCollectionFromJSON(jsonValue));
    }

    /**
     * Get NFT collection by collection address
     */
    async getNftCollection(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftCollection> {
        const response = await this.getNftCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all NFT collections
     */
    async getNftCollectionsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftCollections>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/nft/getCollections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftCollectionsFromJSON(jsonValue));
    }

    /**
     * Get all NFT collections
     */
    async getNftCollections(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftCollections> {
        const response = await this.getNftCollectionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get NFT items for sale
     */
    async getNftForSaleRaw(requestParameters: GetNftForSaleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftSalesResponse>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getNftForSale.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/nft/getNftForSale`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftSalesResponseFromJSON(jsonValue));
    }

    /**
     * Get NFT items for sale
     */
    async getNftForSale(requestParameters: GetNftForSaleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftSalesResponse> {
        const response = await this.getNftForSaleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT item by its address
     */
    async getNftItemByAddressRaw(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItem>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getNftItemByAddress.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/nft/getItem`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemFromJSON(jsonValue));
    }

    /**
     * Get NFT item by its address
     */
    async getNftItemByAddress(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItem> {
        const response = await this.getNftItemByAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all NFT items from collection by collection address
     */
    async getNftItemsByCollectionAddressRaw(requestParameters: GetNftItemsByCollectionAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItems>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getNftItemsByCollectionAddress.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/nft/getItemsByCollectionAddress`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsFromJSON(jsonValue));
    }

    /**
     * Get all NFT items from collection by collection address
     */
    async getNftItemsByCollectionAddress(requestParameters: GetNftItemsByCollectionAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItems> {
        const response = await this.getNftItemsByCollectionAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all NFT items by owner address
     */
    async getNftItemsByOwnerAddressRaw(requestParameters: GetNftItemsByOwnerAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItems>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getNftItemsByOwnerAddress.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
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
            path: `/v1/nft/getItemsByOwnerAddress`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsFromJSON(jsonValue));
    }

    /**
     * Get all NFT items by owner address
     */
    async getNftItemsByOwnerAddress(requestParameters: GetNftItemsByOwnerAddressRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItems> {
        const response = await this.getNftItemsByOwnerAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search NFT items using filters
     */
    async searchNFTItemsRaw(requestParameters: SearchNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<NftItemsRepr>> {
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling searchNFTItems.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling searchNFTItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.owner !== undefined) {
            queryParameters['owner'] = requestParameters.owner;
        }

        if (requestParameters.collection !== undefined) {
            queryParameters['collection'] = requestParameters.collection;
        }

        if (requestParameters.includeOnSale !== undefined) {
            queryParameters['include_on_sale'] = requestParameters.includeOnSale;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
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
            path: `/v1/nft/searchItems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsReprFromJSON(jsonValue));
    }

    /**
     * Search NFT items using filters
     */
    async searchNFTItems(requestParameters: SearchNFTItemsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<NftItemsRepr> {
        const response = await this.searchNFTItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
