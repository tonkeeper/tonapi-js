import { TONAPI_TOKEN } from './env';

export const describeIntegration = TONAPI_TOKEN ? describe : describe.skip;
