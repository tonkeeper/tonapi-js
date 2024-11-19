import fetchMock from 'jest-fetch-mock';
import { ta } from './utils/client';

beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.enableMocks();
});

test('should return a successful response with JSON data', async () => {
    const mockData = { status: 'ok', uptime: 123456 };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const result = await ta.utilities.status();
    expect(result).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/v2/status'),
        expect.any(Object)
    );
});

test('should handle an error response with a JSON message', async () => {
    const mockError = { error: 'Invalid request' };
    fetchMock.mockResponseOnce(JSON.stringify(mockError), { status: 400 });

    await expect(ta.utilities.status()).rejects.toThrow('Invalid request');
});

test('should handle an error response with a string message', async () => {
    fetchMock.mockResponseOnce(JSON.stringify('Simple error message'), { status: 500 });

    await expect(ta.utilities.status()).rejects.toThrow('Simple error message');
});

test('should include a cause in the error object', async () => {
    const mockError = { error: 'Invalid request' };
    fetchMock.mockResponseOnce(JSON.stringify(mockError), { status: 400 });

    await expect(ta.utilities.status()).rejects.toMatchObject({
        message: 'Invalid request',
        cause: expect.any(Object)
    });
});

test('should handle an error response without JSON', async () => {
    const mockError = new Error('Network failure');
    fetchMock.mockRejectOnce(mockError);

    await expect(ta.utilities.status()).rejects.toThrow('Network failure');
});

test('should handle an error response with invalid JSON', async () => {
    fetchMock.mockResponseOnce('Invalid JSON', { status: 400 });

    await expect(ta.utilities.status()).rejects.toThrow('Failed to parse error response');
});

test('should handle an unknown error type (object)', async () => {
    fetchMock.mockRejectOnce({ message: 'Some unknown error' } as any);

    await expect(ta.utilities.status()).rejects.toThrow('Unknown error occurred');
});

test('should handle an unknown error type (string)', async () => {
    fetchMock.mockRejectOnce('Some unknown error' as any);

    await expect(ta.utilities.status()).rejects.toThrow('Unknown error occurred');
});

test('should handle null as an error', async () => {
    fetchMock.mockRejectOnce(null as any);

    await expect(ta.utilities.status()).rejects.toThrow('Unknown error occurred');
});

test('should handle undefined as an error', async () => {
    fetchMock.mockRejectOnce(undefined as any);

    await expect(ta.utilities.status()).rejects.toThrow('Unknown error occurred');
});

test('should handle a JSON error response without an error field', async () => {
    const mockError = { message: 'Some error without error field' };
    fetchMock.mockResponseOnce(JSON.stringify(mockError), { status: 400 });

    await expect(ta.utilities.status()).rejects.toThrow('Unknown error');
});
