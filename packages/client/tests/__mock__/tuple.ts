import { JSONBig } from '../client.test';

export const execGetMethodForBlockchainAccount = JSONBig.stringify({
    success: true,
    exit_code: 0,
    stack: [
        {
            type: 'tuple',
            tuple: [
                {
                    type: 'tuple',
                    tuple: [
                        {
                            type: 'num',
                            num: '0xd2d023d8639a286efe8fb2e25ffe18ef5a22039294e49159d8be807febea9aef'
                        },
                        { type: 'num', num: '0x1286caa66b139' },
                        { type: 'num', num: '0x0' },
                        { type: 'num', num: '0x0' }
                    ]
                },
                {
                    type: 'tuple',
                    tuple: [
                        {
                            type: 'num',
                            num: '0x633615bb4c1afc3946c9aefa1854f731d2b446b4b2bcf3d1886e91e382cb71f7'
                        },
                        { type: 'num', num: '0x10888114e382' },
                        { type: 'num', num: '0x0' },
                        { type: 'num', num: '0x0' }
                    ]
                },
                {
                    type: 'tuple',
                    tuple: [
                        {
                            type: 'num',
                            num: '0x2fcb15f983f1afca77cd97f5d5411799debb2d2b96ccd8e62ef67beb7a7d5246'
                        },
                        { type: 'num', num: '0xb6452253f41' },
                        { type: 'num', num: '0x0' },
                        { type: 'num', num: '0x0' }
                    ]
                }
            ]
        }
    ],
    decoded: {
        nominators: [
            {
                address: 'd2d023d8639a286efe8fb2e25ffe18ef5a22039294e49159d8be807febea9aef',
                amount: 325922157146425,
                pending_deposit_amount: 0,
                withdraw_requested: false
            },
            {
                address: '633615bb4c1afc3946c9aefa1854f731d2b446b4b2bcf3d1886e91e382cb71f7',
                amount: 18178467226498,
                pending_deposit_amount: 0,
                withdraw_requested: false
            },
            {
                address: '2fcb15f983f1afca77cd97f5d5411799debb2d2b96ccd8e62ef67beb7a7d5246',
                amount: 12525502807873,
                pending_deposit_amount: 0,
                withdraw_requested: false
            }
        ]
    }
});
