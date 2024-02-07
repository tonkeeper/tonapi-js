import { AccountsObserver, WebsocketStreamProvider } from '../../src';
import { TONAPI_TOKEN } from '../env';

describe('Accounts observer tests', () => {
    let wsProvider: WebsocketStreamProvider;
    let accountsObserver: AccountsObserver;

    beforeAll(async () => {
        wsProvider = new WebsocketStreamProvider(
            `wss://tonapi.io/v2/websocket?token=${TONAPI_TOKEN}`
        );
        await wsProvider.open();
        accountsObserver = new AccountsObserver(wsProvider);
    });

    afterAll(async () => {
        await wsProvider.close();
    });

    it('should receive "tick-tock" tx on the config contract', done => {
        accountsObserver.subscribe(
            { account: '-1:5555555555555555555555555555555555555555555555555555555555555555' },
            v => {
                expect(v).toBeTruthy();

                done();
            }
        );
    }, 20000);
});
