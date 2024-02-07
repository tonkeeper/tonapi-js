export type JsonRpcRequest = {
    id: number | string;
    method: string;
    params: Record<string, unknown> | unknown[] | string;
};

export type JsonRpcResponseSuccess = {
    id: number | string;
    method: string;
    result: string | number;
};

export type JsonRpcResponseError = {
    id: number | string;
    method: string;
    error: { code: number | string; message: string };
};

export type JsonRpcEvent = {
    method: string;
    params: Record<string, unknown> | unknown[];
};

export type JsonRpcResponse = JsonRpcResponseSuccess | JsonRpcResponseError;

export type JsonRpcMessage = JsonRpcEvent | JsonRpcResponse;

export function isJsonRpcResponse(message: JsonRpcMessage): message is JsonRpcResponse {
    return 'id' in message;
}

export function isJsonRpcResponseSuccess(
    message: JsonRpcResponse
): message is JsonRpcResponseSuccess {
    return 'result' in message;
}
