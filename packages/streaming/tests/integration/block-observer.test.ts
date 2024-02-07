import { BlocksObserver, WebsocketStreamProvider } from '../../src';
import { TONAPI_TOKEN } from '../env';

describe('Blocks observer tests', () => {
    let wsProvider: WebsocketStreamProvider;
    let blockObserver: BlocksObserver;

    beforeAll(async () => {
        wsProvider = new WebsocketStreamProvider(
            `wss://tonapi.io/v2/websocket?token=${TONAPI_TOKEN}`
        );
        await wsProvider.open();
        blockObserver = new BlocksObserver(wsProvider);
    });

    afterAll(async () => {
        await wsProvider.close();
    });

    it('should receive "new block" event', done => {
        blockObserver.subscribe(0, v => {
            expect(v).toBeTruthy();

            done();
        });
    }, 20000);
});
