import { JSONStringify } from "../utils/jsonbig";

export const getAccounts = JSONStringify({
    accounts: [
        {
            address: 'EQCae11h9N5znylEPRjmuLYGvIwnxkcCw4zVW4BJjVASi8pO',
            balance: 975660757n,
            lastActivity: 1732546774,
            status: 'active',
            interfaces: [],
            getMethods: [],
            isWallet: true
        },
        {
            address: 'EQAW2nxA69WYdMr90utDmpeZFwvG4XYcc9iibAP5sZnlommL',
            balance: 974180n,
            lastActivity: 1728651838,
            status: 'uninit',
            interfaces: [],
            getMethods: [],
            isWallet: true
        }
    ]
});
