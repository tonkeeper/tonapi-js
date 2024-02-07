import { TraceObserver, WebsocketStreamProvider } from '../../src';
import { TONAPI_TOKEN } from '../env';

describe('Trace observer tests', () => {
    let wsProvider: WebsocketStreamProvider;
    let traceObserver: TraceObserver;

    beforeAll(async () => {
        wsProvider = new WebsocketStreamProvider(
            `wss://tonapi.io/v2/websocket?token=${TONAPI_TOKEN}`
        );
        await wsProvider.open();
        traceObserver = new TraceObserver(wsProvider);
    });

    afterAll(async () => {
        await wsProvider.close();
    });

    it('should receive "tick-tock" tx trace on the config contract', done => {
        traceObserver.subscribe(
            '-1:5555555555555555555555555555555555555555555555555555555555555555',
            v => {
                expect(v).toBeTruthy();

                done();
            }
        );
    }, 20000);
});
