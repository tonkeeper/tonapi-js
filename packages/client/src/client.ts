/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
    /** @example "error description" */
    error: string;
}

export interface AccountAddress {
    /**
     * @format address
     * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
     */
    address: Address;
    /**
     * Display name. Data collected from different sources like moderation lists, dns, collections names and over.
     * @example "Ton foundation"
     */
    name?: string;
    /**
     * Is this account was marked as part of scammers activity
     * @example true
     */
    isScam: boolean;
    /** @example "https://ton.org/logo.png" */
    icon?: string;
    /** @example true */
    isWallet: boolean;
}

export interface BlockCurrencyCollection {
    /**
     * @format bigint
     * @example 10000000000
     */
    grams: bigint;
    other: {
        /**
         * @format int64
         * @example 13
         */
        id: number;
        /** @example "10000000000" */
        value: string;
    }[];
}

export interface BlockValueFlow {
    fromPrevBlk: BlockCurrencyCollection;
    toNextBlk: BlockCurrencyCollection;
    imported: BlockCurrencyCollection;
    exported: BlockCurrencyCollection;
    feesCollected: BlockCurrencyCollection;
    burned?: BlockCurrencyCollection;
    feesImported: BlockCurrencyCollection;
    recovered: BlockCurrencyCollection;
    created: BlockCurrencyCollection;
    minted: BlockCurrencyCollection;
}

export interface ServiceStatus {
    /** @default true */
    restOnline: boolean;
    /** @example 100 */
    indexingLatency: number;
    /**
     * @format int32
     * @example 123456
     */
    lastKnownMasterchainSeqno: number;
}

export interface ReducedBlock {
    /**
     * @format int32
     * @example 0
     */
    workchainId: number;
    /** @example 8000000000000000 */
    shard: string;
    /**
     * @format int32
     * @example 21734019
     */
    seqno: number;
    /** @example "(-1,4234234,8000000000000000)" */
    masterRef?: string;
    /** @example 130 */
    txQuantity: number;
    /**
     * @format int64
     * @example 23814011000000
     */
    utime: number;
    shardsBlocks: string[];
    parent: string[];
}

export interface BlockchainBlock {
    /** @example 130 */
    txQuantity: number;
    valueFlow: BlockValueFlow;
    /**
     * @format int32
     * @example 0
     */
    workchainId: number;
    /** @example 8000000000000000 */
    shard: string;
    /**
     * @format int32
     * @example 21734019
     */
    seqno: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    rootHash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    fileHash: string;
    /**
     * @format int32
     * @example -239
     */
    globalId: number;
    /**
     * @format int32
     * @example 0
     */
    version: number;
    /** @example true */
    afterMerge: boolean;
    /** @example true */
    beforeSplit: boolean;
    /** @example true */
    afterSplit: boolean;
    /** @example true */
    wantSplit: boolean;
    /** @example true */
    wantMerge: boolean;
    /** @example true */
    keyBlock: boolean;
    /**
     * @format int64
     * @example 1674826775
     */
    genUtime: number;
    /**
     * @format bigint
     * @example 23814011000000
     */
    startLt: bigint;
    /**
     * @format bigint
     * @example 23814011000001
     */
    endLt: bigint;
    /**
     * @format int32
     * @example 0
     */
    vertSeqno: number;
    /**
     * @format int32
     * @example 0
     */
    genCatchainSeqno: number;
    /**
     * @format int32
     * @example 0
     */
    minRefMcSeqno: number;
    /**
     * @format int32
     * @example 0
     */
    prevKeyBlockSeqno: number;
    /**
     * @format int32
     * @example 0
     */
    genSoftwareVersion?: number;
    /**
     * @format int64
     * @example 0
     */
    genSoftwareCapabilities?: number;
    /** @example "(-1,4234234,8000000000000000)" */
    masterRef?: string;
    prevRefs: string[];
    /**
     * @format int64
     * @example 0
     */
    inMsgDescrLength: number;
    /**
     * @format int64
     * @example 0
     */
    outMsgDescrLength: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    randSeed: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    createdBy: string;
}

export interface BlockchainBlocks {
    blocks: BlockchainBlock[];
}

export interface ReducedBlocks {
    blocks: ReducedBlock[];
}

export interface BlockchainBlockShards {
    shards: {
        /** @example "(0,8000000000000000,4234234)" */
        lastKnownBlockId: string;
        lastKnownBlock: BlockchainBlock;
    }[];
}

/** @example "active" */
export enum AccountStatus {
    Nonexist = 'nonexist',
    Uninit = 'uninit',
    Active = 'active',
    Frozen = 'frozen'
}

export interface StateInit {
    /**
     * @format cell
     * @example "b5ee9c72010106010044000114ff00f4a413f4bcf2c80b01020120020302014804050004f2300038d06c21d31f30ed44d0d33f3001c00197a4c8cb3fc9ed549330f206e20011a13431da89a1a67e61"
     */
    boc: Cell;
    interfaces: string[];
}

export interface Message {
    /** @example "int_msg" */
    msgType: 'int_msg' | 'ext_in_msg' | 'ext_out_msg';
    /**
     * @format bigint
     * @example 25713146000001
     */
    createdLt: bigint;
    /** @example true */
    ihrDisabled: boolean;
    /** @example true */
    bounce: boolean;
    /** @example true */
    bounced: boolean;
    /**
     * @format bigint
     * @example 60000000
     */
    value: bigint;
    /**
     * @format bigint
     * @example 5681002
     */
    fwdFee: bigint;
    /**
     * @format bigint
     * @example 5681002
     */
    ihrFee: bigint;
    destination?: AccountAddress;
    source?: AccountAddress;
    /**
     * @format bigint
     * @example 5681002
     */
    importFee: bigint;
    /**
     * @format int64
     * @example 5681002
     */
    createdAt: number;
    /** @example "0xdeadbeaf" */
    opCode?: string;
    init?: StateInit;
    /** @example "1219de582369ac80ee1afe12147930f458a54ff1eea612611a8bc6bd31581a6c" */
    hash: string;
    /**
     * hex-encoded BoC with raw message body
     * @format cell
     * @example "B5EE9C7201010101001100001D00048656C6C6F2C20776F726C64218"
     */
    rawBody?: Cell;
    /** @example "nft_transfer" */
    decodedOpName?: string;
    decodedBody?: any;
}

/** @example "TransOrd" */
export enum TransactionType {
    TransOrd = 'TransOrd',
    TransTickTock = 'TransTickTock',
    TransSplitPrepare = 'TransSplitPrepare',
    TransSplitInstall = 'TransSplitInstall',
    TransMergePrepare = 'TransMergePrepare',
    TransMergeInstall = 'TransMergeInstall',
    TransStorage = 'TransStorage'
}

/** @example "acst_unchanged" */
export enum AccStatusChange {
    AcstUnchanged = 'acst_unchanged',
    AcstFrozen = 'acst_frozen',
    AcstDeleted = 'acst_deleted'
}

/** @example "cskip_no_state" */
export enum ComputeSkipReason {
    CskipNoState = 'cskip_no_state',
    CskipBadState = 'cskip_bad_state',
    CskipNoGas = 'cskip_no_gas'
}

/** @example "cskip_no_state" */
export enum BouncePhaseType {
    TrPhaseBounceNegfunds = 'TrPhaseBounceNegfunds',
    TrPhaseBounceNofunds = 'TrPhaseBounceNofunds',
    TrPhaseBounceOk = 'TrPhaseBounceOk'
}

export interface ComputePhase {
    /** @example true */
    skipped: boolean;
    skipReason?: ComputeSkipReason;
    /** @example true */
    success?: boolean;
    /**
     * @format bigint
     * @example 1000
     */
    gasFees?: bigint;
    /**
     * @format bigint
     * @example 10000
     */
    gasUsed?: bigint;
    /**
     * @format int32
     * @example 5
     */
    vmSteps?: number;
    /**
     * @format int32
     * @example 0
     */
    exitCode?: number;
    exitCodeDescription?: string;
}

export interface StoragePhase {
    /**
     * @format bigint
     * @example 25713146000001
     */
    feesCollected: bigint;
    /**
     * @format bigint
     * @example 25713146000001
     */
    feesDue?: bigint;
    statusChange: AccStatusChange;
}

export interface CreditPhase {
    /**
     * @format bigint
     * @example 100
     */
    feesCollected: bigint;
    /**
     * @format bigint
     * @example 1000
     */
    credit: bigint;
}

export interface ActionPhase {
    /** @example true */
    success: boolean;
    /**
     * @format int32
     * @example 5
     */
    resultCode: number;
    /**
     * @format int32
     * @example 5
     */
    totalActions: number;
    /**
     * @format int32
     * @example 5
     */
    skippedActions: number;
    /**
     * @format bigint
     * @example 1000
     */
    fwdFees: bigint;
    /**
     * @format bigint
     * @example 1000
     */
    totalFees: bigint;
    resultCodeDescription?: string;
}

export interface Transaction {
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    hash: string;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    account: AccountAddress;
    /** @example true */
    success: boolean;
    /**
     * @format int64
     * @example 1645544908
     */
    utime: number;
    origStatus: AccountStatus;
    endStatus: AccountStatus;
    /**
     * @format bigint
     * @example 25713146000001
     */
    totalFees: bigint;
    /**
     * @format bigint
     * @example 25713146000001
     */
    endBalance: bigint;
    transactionType: TransactionType;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    stateUpdateOld: string;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    stateUpdateNew: string;
    inMsg?: Message;
    outMsgs: Message[];
    /** @example "(-1,4234234,8000000000000000)" */
    block: string;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    prevTransHash?: string;
    /**
     * @format bigint
     * @example 25713146000001
     */
    prevTransLt?: bigint;
    computePhase?: ComputePhase;
    storagePhase?: StoragePhase;
    creditPhase?: CreditPhase;
    actionPhase?: ActionPhase;
    bouncePhase?: BouncePhaseType;
    /** @example true */
    aborted: boolean;
    /** @example true */
    destroyed: boolean;
    /**
     * hex encoded boc with raw transaction
     * @format cell
     * @example "b5ee9c72410206010001380003b372cf3b5b8c891e517c9addbda1c0386a09ccacbb0e3faf630b51cfc8152325acb00002ac5795c0e41fdf79135cb7da03cc623b165d614b562a51eeccd8a5e097f405abf6b37f4e73000002ac5629732c1666887ed000144030480102030101a004008272abc8f2971aa4404ac6da1597720f348b2e1247b1ad9f55cbd3b6812f0a5f08b269bb65039fb1f6074d00f794e857f6dfd01131d299df456af10a8a4943d4d165000d0c80608840492001ab48015581f575c3b8c6ab3d6"
     */
    raw: Cell;
}

export interface Transactions {
    transactions: Transaction[];
}

export interface ConfigProposalSetup {
    /** @example 2 */
    minTotRounds: number;
    /** @example 6 */
    maxTotRounds: number;
    /** @example 2 */
    minWins: number;
    /** @example 6 */
    maxLosses: number;
    /**
     * @format int64
     * @example 1000000
     */
    minStoreSec: number;
    /**
     * @format int64
     * @example 10000000
     */
    maxStoreSec: number;
    /**
     * @format int64
     * @example 1
     */
    bitPrice: number;
    /**
     * @format int64
     * @example 500
     */
    cellPrice: number;
}

export interface GasLimitPrices {
    /** @format int64 */
    specialGasLimit?: number;
    /** @format int64 */
    flatGasLimit?: number;
    /** @format int64 */
    flatGasPrice?: number;
    /**
     * @format int64
     * @example 1
     */
    gasPrice: number;
    /**
     * @format int64
     * @example 1000000
     */
    gasLimit: number;
    /**
     * @format int64
     * @example 1000000
     */
    gasCredit: number;
    /**
     * @format int64
     * @example 1000000
     */
    blockGasLimit: number;
    /**
     * @format int64
     * @example 1000000
     */
    freezeDueLimit: number;
    /**
     * @format int64
     * @example 1000000
     */
    deleteDueLimit: number;
}

export interface BlockParamLimits {
    /**
     * @format int64
     * @example 1000000
     */
    underload: number;
    /**
     * @format int64
     * @example 1000000
     */
    softLimit: number;
    /**
     * @format int64
     * @example 1000000
     */
    hardLimit: number;
}

export interface BlockLimits {
    bytes: BlockParamLimits;
    gas: BlockParamLimits;
    ltDelta: BlockParamLimits;
}

export interface MsgForwardPrices {
    /**
     * @format int64
     * @example 1000000
     */
    lumpPrice: number;
    /**
     * @format int64
     * @example 1000000
     */
    bitPrice: number;
    /**
     * @format int64
     * @example 1000000
     */
    cellPrice: number;
    /**
     * @format int64
     * @example 1000000
     */
    ihrPriceFactor: number;
    /**
     * @format int64
     * @example 1000000
     */
    firstFrac: number;
    /**
     * @format int64
     * @example 1000000
     */
    nextFrac: number;
}

export interface WorkchainDescr {
    /**
     * @format int
     * @example 0
     */
    workchain: number;
    /**
     * @format int64
     * @example 1000000
     */
    enabledSince: number;
    /**
     * @format int
     * @example 1000000
     */
    actualMinSplit: number;
    /**
     * @format int
     * @example 1000000
     */
    minSplit: number;
    /**
     * @format int
     * @example 1000000
     */
    maxSplit: number;
    /** @example 1000000 */
    basic: number;
    /** @example true */
    active: boolean;
    /** @example true */
    acceptMsgs: boolean;
    /**
     * @format int
     * @example 1000000
     */
    flags: number;
    /** @example 1000000 */
    zerostateRootHash: string;
    /** @example 1000000 */
    zerostateFileHash: string;
    /**
     * @format int64
     * @example 1000000
     */
    version: number;
}

export interface MisbehaviourPunishmentConfig {
    /**
     * @format int64
     * @example 1000000
     */
    defaultFlatFine: number;
    /**
     * @format int64
     * @example 1000000
     */
    defaultProportionalFine: number;
    /** @example 1000000 */
    severityFlatMult: number;
    /** @example 1000000 */
    severityProportionalMult: number;
    /** @example 1000000 */
    unpunishableInterval: number;
    /** @example 1000000 */
    longInterval: number;
    /** @example 1000000 */
    longFlatMult: number;
    /** @example 1000000 */
    longProportionalMult: number;
    /** @example 1000000 */
    mediumInterval: number;
    /** @example 1000000 */
    mediumFlatMult: number;
    /** @example 1000000 */
    mediumProportionalMult: number;
}

export interface SizeLimitsConfig {
    /**
     * @format int64
     * @example 1000000
     */
    maxMsgBits: number;
    /**
     * @format int64
     * @example 1000000
     */
    maxMsgCells: number;
    /**
     * @format int64
     * @example 1000000
     */
    maxLibraryCells: number;
    /**
     * @format int
     * @example 1000000
     */
    maxVmDataDepth: number;
    /**
     * @format int64
     * @example 1000000
     */
    maxExtMsgSize: number;
    /**
     * @format int
     * @example 1000000
     */
    maxExtMsgDepth: number;
    /**
     * @format int64
     * @example 1000000
     */
    maxAccStateCells?: number;
    /**
     * @format int64
     * @example 1000000
     */
    maxAccStateBits?: number;
}

export interface ValidatorsSet {
    utimeSince: number;
    utimeUntil: number;
    total: number;
    main: number;
    /** @example "1152921504606846800" */
    totalWeight?: string;
    list: {
        publicKey: string;
        /** @format bigint */
        weight: bigint;
        adnlAddr?: string;
    }[];
}

export interface Oracle {
    /**
     * @format address
     * @example "0:55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122"
     */
    address: Address;
    /** @example "00000000000000000000000017dcab1b1481610f6c7a7a98cf0370dc0ec704a6" */
    secpPubkey: string;
}

export interface OracleBridgeParams {
    /** @format address */
    bridgeAddr: Address;
    /** @format address */
    oracleMultisigAddress: Address;
    externalChainAddress: string;
    oracles: Oracle[];
}

export interface JettonBridgePrices {
    /** @format int64 */
    bridgeBurnFee: number;
    /** @format int64 */
    bridgeMintFee: number;
    /** @format int64 */
    walletMinTonsForStorage: number;
    /** @format int64 */
    walletGasConsumption: number;
    /** @format int64 */
    minterMinTonsForStorage: number;
    /** @format int64 */
    discoverGasConsumption: number;
}

export interface JettonBridgeParams {
    /** @format address */
    bridgeAddress: Address;
    /** @format address */
    oraclesAddress: Address;
    stateFlags: number;
    /** @format int64 */
    burnBridgeFee?: number;
    oracles: Oracle[];
    externalChainAddress?: string;
    prices?: JettonBridgePrices;
}

export interface Validator {
    /**
     * @format address
     * @example "0:55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122"
     */
    address: Address;
    /** @example "10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
    adnlAddress: string;
    /**
     * @format bigint
     * @example 123456789
     */
    stake: bigint;
    /**
     * @format int64
     * @example 123456789
     */
    maxFactor: number;
}

export interface Validators {
    /**
     * @format int64
     * @example 123456789
     */
    electAt: number;
    /**
     * @format int64
     * @example 123456789
     */
    electClose: number;
    /**
     * @format bigint
     * @example 123456789
     */
    minStake: bigint;
    /**
     * @format bigint
     * @example 123456789
     */
    totalStake: bigint;
    validators: Validator[];
}

export interface AccountStorageInfo {
    /**
     * @format int64
     * @example 567
     */
    usedCells: number;
    /**
     * @format int64
     * @example 567
     */
    usedBits: number;
    /**
     * @format int64
     * @example 567
     */
    usedPublicCells: number;
    /**
     * time of the last payment
     * @format int64
     * @example 1720860269
     */
    lastPaid: number;
    /**
     * @format bigint
     * @example 567
     */
    duePayment: bigint;
}

export interface BlockchainRawAccount {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /**
     * @format bigint
     * @example 123456789
     */
    balance: bigint;
    extraBalance?: Record<string, string>;
    /**
     * @format cell
     * @example "b5ee9c72410104010087000114ff00f4a413f4a0f2c80b0102012002030002d200dfa5ffff76a268698fe9ffe8e42c5267858f90e785ffe4f6aa6467c444ffb365ffc10802faf0807d014035e7a064b87d804077e7857fc10803dfd2407d014035e7a064b86467cd8903a32b9ba4410803ade68afd014035e7a045ea432b6363796103bb7b9363210c678b64b87d807d8040c249b3e4"
     */
    code?: Cell;
    /**
     * @format cell
     * @example "b5ee9c7241010101002600004811fd096c0000000000000000000000000000000000000000000000000000000000000000cb78264d"
     */
    data?: Cell;
    /**
     * @format bigint
     * @example 123456789
     */
    lastTransactionLt: bigint;
    /** @example "088b436a846d92281734236967970612f87fbd64a2cd3573107948379e8e4161" */
    lastTransactionHash?: string;
    /** @example "088b436a846d92281734236967970612f87fbd64a2cd3573107948379e8e4161" */
    frozenHash?: string;
    status: AccountStatus;
    storage: AccountStorageInfo;
    libraries?: {
        /** @example true */
        public: boolean;
        /** @format cell */
        root: Cell;
    }[];
}

export interface Account {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /**
     * @format bigint
     * @example 123456789
     */
    balance: bigint;
    /**
     * {'USD': 1, 'IDR': 1000}
     * @example {}
     */
    currenciesBalance?: Record<string, any>;
    /**
     * unix timestamp
     * @format int64
     * @example 1720860269
     */
    lastActivity: number;
    status: AccountStatus;
    interfaces?: string[];
    /** @example "Ton foundation" */
    name?: string;
    /** @example true */
    isScam?: boolean;
    /** @example "https://ton.org/logo.png" */
    icon?: string;
    /** @example true */
    memoRequired?: boolean;
    /** @example ["get_item_data"] */
    getMethods: string[];
    isSuspended?: boolean;
    isWallet: boolean;
}

export interface Accounts {
    accounts: Account[];
}

export interface GaslessConfig {
    /**
     * sending excess to this address decreases the commission of a gasless transfer
     * @format address
     * @example "0:dfbd5be8497fdc0c9fcbdfc676864840ddf8ad6423d6d5657d9b0e8270d6c8ac"
     */
    relayAddress: Address;
    /** list of jettons, any of them can be used to pay for gas */
    gasJettons: {
        /** @format address */
        masterId: Address;
    }[];
}

export interface SignRawMessage {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /** Number of nanocoins to send. Decimal string. */
    amount: string;
    /**
     * Raw one-cell BoC encoded in hex.
     * @format cell
     */
    payload?: Cell;
    /**
     * Raw once-cell BoC encoded in hex.
     * @format cell
     */
    stateInit?: Cell;
}

export interface SignRawParams {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    relayAddress: Address;
    /**
     * Commission for the transaction. In nanocoins.
     * @example "1000000"
     */
    commission: string;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    from: Address;
    /**
     * @format int64
     * @example 1717397217
     */
    validUntil: number;
    messages: SignRawMessage[];
}

export interface MethodExecutionResult {
    /** @example true */
    success: boolean;
    /**
     * tvm exit code
     * @example 0
     */
    exitCode: number;
    stack: TupleItem[];
    decoded?: any;
}

export interface RawBlockchainConfig {
    /** @example {} */
    config: Record<string, any>;
}

export interface BlockchainConfig {
    /**
     * config address
     * @format address
     */
    '0': Address;
    /**
     * elector address
     * @format address
     */
    '1': Address;
    /**
     * minter address
     * @format address
     */
    '2': Address;
    /**
     * The address of the transaction fee collector.
     * @format address
     */
    '3'?: Address;
    /**
     * dns root address
     * @format address
     */
    '4': Address;
    '5'?: {
        /** @format address */
        blackholeAddr?: Address;
        /** @format int64 */
        feeBurnNom: number;
        /** @format int64 */
        feeBurnDenom: number;
    };
    /** Minting fees of new currencies. */
    '6'?: {
        /** @format int64 */
        mintNewPrice: number;
        /** @format int64 */
        mintAddPrice: number;
    };
    /** The volume of each of the additional currencies in circulation. */
    '7'?: {
        currencies: {
            /** @format int64 */
            currencyId: number;
            amount: string;
        }[];
    };
    /** The network version and additional capabilities supported by the validators. */
    '8'?: {
        /** @format int64 */
        version: number;
        /** @format int64 */
        capabilities: number;
    };
    /** List of mandatory parameters of the blockchain config. */
    '9'?: {
        mandatoryParams: number[];
    };
    /** List of critical TON parameters, the change of which significantly affects the network, so more voting rounds are held. */
    '10'?: {
        criticalParams: number[];
    };
    /** This parameter indicates under what conditions proposals to change the TON configuration are accepted. */
    '11'?: {
        normalParams: ConfigProposalSetup;
        criticalParams: ConfigProposalSetup;
    };
    /** Workchains in the TON Blockchain */
    '12'?: {
        workchains: WorkchainDescr[];
    };
    /** The cost of filing complaints about incorrect operation of validators. */
    '13'?: {
        /** @format int64 */
        deposit: number;
        /** @format int64 */
        bitPrice: number;
        /** @format int64 */
        cellPrice: number;
    };
    /** The reward in nanoTons for block creation in the TON blockchain. */
    '14'?: {
        /** @format int64 */
        masterchainBlockFee: number;
        /** @format int64 */
        basechainBlockFee: number;
    };
    /** The reward in nanoTons for block creation in the TON blockchain. */
    '15'?: {
        /**
         * @format int64
         * @example 65536
         */
        validatorsElectedFor: number;
        /**
         * @format int64
         * @example 32768
         */
        electionsStartBefore: number;
        /**
         * @format int64
         * @example 8192
         */
        electionsEndBefore: number;
        /**
         * @format int64
         * @example 32768
         */
        stakeHeldFor: number;
    };
    /** The limits on the number of validators in the TON blockchain. */
    '16'?: {
        /** @example 400 */
        maxValidators: number;
        /** @example 100 */
        maxMainValidators: number;
        /** @example 75 */
        minValidators: number;
    };
    /** The stake parameters configuration in the TON blockchain. */
    '17'?: {
        minStake: string;
        maxStake: string;
        minTotalStake: string;
        /** @format int64 */
        maxStakeFactor: number;
    };
    /** The prices for data storage. */
    '18'?: {
        storagePrices: {
            /**
             * @format int64
             * @example 0
             */
            utimeSince: number;
            /**
             * @format int64
             * @example 1
             */
            bitPricePs: number;
            /**
             * @format int64
             * @example 500
             */
            cellPricePs: number;
            /**
             * @format int64
             * @example 1000
             */
            mcBitPricePs: number;
            /**
             * @format int64
             * @example 500000
             */
            mcCellPricePs: number;
        }[];
    };
    /** The cost of computations in the masterchain. The complexity of any computation is estimated in gas units. */
    '20'?: {
        gasLimitsPrices: GasLimitPrices;
    };
    /** The cost of computations in the basechains. The complexity of any computation is estimated in gas units. */
    '21'?: {
        gasLimitsPrices: GasLimitPrices;
    };
    /** The limits on the block in the masterchain, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block. */
    '22'?: {
        blockLimits: BlockLimits;
    };
    /** The limits on the block in the basechains, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block. */
    '23'?: {
        blockLimits: BlockLimits;
    };
    /** The cost of sending messages in the masterchain of the TON blockchain. */
    '24'?: {
        msgForwardPrices: MsgForwardPrices;
    };
    /** The cost of sending messages in the basechains of the TON blockchain. */
    '25'?: {
        msgForwardPrices: MsgForwardPrices;
    };
    /** The configuration for the Catchain protocol. */
    '28'?: {
        /**
         * @format int64
         * @example 1000000
         */
        mcCatchainLifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shardCatchainLifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shardValidatorsLifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shardValidatorsNum: number;
        /**
         * @format int
         * @example 1000000
         */
        flags?: number;
        shuffleMcValidators?: boolean;
    };
    /** The configuration for the consensus protocol above catchain. */
    '29'?: {
        /**
         * @format int
         * @example 0
         */
        flags?: number;
        /** @example true */
        newCatchainIds?: boolean;
        /**
         * @format int64
         * @example 3
         */
        roundCandidates: number;
        /**
         * @format int64
         * @example 2000
         */
        nextCandidateDelayMs: number;
        /**
         * @format int64
         * @example 16000
         */
        consensusTimeoutMs: number;
        /**
         * @format int64
         * @example 3
         */
        fastAttempts: number;
        /**
         * @format int64
         * @example 8
         */
        attemptDuration: number;
        /**
         * @format int64
         * @example 4
         */
        catchainMaxDeps: number;
        /**
         * @format int64
         * @example 2097152
         */
        maxBlockBytes: number;
        /**
         * @format int64
         * @example 2097152
         */
        maxCollatedBytes: number;
        /**
         * @format int64
         * @example 2
         */
        protoVersion?: number;
        /**
         * @format int64
         * @example 10000
         */
        catchainMaxBlocksCoeff?: number;
    };
    /** The configuration for the consensus protocol above catchain. */
    '31'?: {
        fundamentalSmcAddr: Address[];
    };
    '32'?: ValidatorsSet;
    '33'?: ValidatorsSet;
    '34'?: ValidatorsSet;
    '35'?: ValidatorsSet;
    '36'?: ValidatorsSet;
    '37'?: ValidatorsSet;
    /** The configuration for punishment for improper behavior (non-validation). In the absence of the parameter, the default fine size is 101 TON */
    '40'?: {
        misbehaviourPunishmentConfig: MisbehaviourPunishmentConfig;
    };
    /** The size limits and some other characteristics of accounts and messages. */
    '43'?: {
        sizeLimitsConfig: SizeLimitsConfig;
    };
    /** suspended accounts */
    '44': {
        accounts: Address[];
        suspendedUntil: number;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    '71'?: {
        oracleBridgeParams: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    '72'?: {
        oracleBridgeParams: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    '73'?: {
        oracleBridgeParams: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    '79'?: {
        jettonBridgeParams: JettonBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    '81'?: {
        jettonBridgeParams: JettonBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    '82'?: {
        jettonBridgeParams: JettonBridgeParams;
    };
    /**
     * config boc in hex format
     * @format cell
     */
    raw: Cell;
}

export interface DomainNames {
    domains: string[];
}

export interface DomainBid {
    /**
     * @default false
     * @example true
     */
    success: boolean;
    /**
     * @format int64
     * @example 1660050553
     */
    value: number;
    /**
     * @format int64
     * @example 1660050553
     */
    txTime: number;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    txHash: string;
    bidder: AccountAddress;
}

export interface DomainBids {
    data: DomainBid[];
}

export enum JettonVerificationType {
    Whitelist = 'whitelist',
    Blacklist = 'blacklist',
    None = 'none'
}

export interface JettonPreview {
    /**
     * @format address
     * @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0"
     */
    address: Address;
    /** @example "Wrapped TON" */
    name: string;
    /** @example "WTON" */
    symbol: string;
    /** @example 9 */
    decimals: number;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image: string;
    verification: JettonVerificationType;
    customPayloadApiUri?: string;
}

export interface JettonBalance {
    /** @example 597968399 */
    balance: string;
    price?: TokenRates;
    walletAddress: AccountAddress;
    jetton: JettonPreview;
    /** @example ["custom_payload","non_transferable"] */
    extensions?: string[];
    lock?: {
        /** @example 597968399 */
        amount: string;
        /**
         * @format int64
         * @example 1678223064
         */
        till: number;
    };
}

export interface JettonsBalances {
    balances: JettonBalance[];
}

export interface Price {
    /** @example "123000000000" */
    value: string;
    /** @example "TON" */
    tokenName: string;
}

export interface ImagePreview {
    /** @example "100x100" */
    resolution: string;
    /** @example "https://site.com/pic1.jpg" */
    url: string;
}

export type NftApprovedBy = ('getgems' | 'tonkeeper' | 'ton.diamonds')[];

/** @example "whitelist" */
export enum TrustType {
    Whitelist = 'whitelist',
    Graylist = 'graylist',
    Blacklist = 'blacklist',
    None = 'none'
}

export interface Sale {
    /**
     * @format address
     * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
     */
    address: Address;
    market: AccountAddress;
    owner?: AccountAddress;
    price: Price;
}

export interface NftItem {
    /**
     * @format address
     * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
     */
    address: Address;
    /**
     * @format int64
     * @example 58
     */
    index: number;
    owner?: AccountAddress;
    collection?: {
        /**
         * @format address
         * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
         */
        address: Address;
        /** @example "TON Diamonds" */
        name: string;
        /** @example "Best collection in TON network" */
        description: string;
    };
    /** @example true */
    verified: boolean;
    /** @example {} */
    metadata: Record<string, any>;
    sale?: Sale;
    previews?: ImagePreview[];
    /** @example "crypto.ton" */
    dns?: string;
    approvedBy: NftApprovedBy;
    /** @example false */
    includeCnft?: boolean;
    trust: TrustType;
}

export interface NftItems {
    nftItems: NftItem[];
}

export interface Multisigs {
    multisigs: Multisig[];
}

export interface Multisig {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /**
     * @format int64
     * @example 1
     */
    seqno: number;
    /** @format int32 */
    threshold: number;
    signers: Address[];
    proposers: Address[];
    orders: MultisigOrder[];
}

export interface MultisigOrder {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /**
     * @format int64
     * @example 1
     */
    orderSeqno: number;
    /** @format int32 */
    threshold: number;
    /** @example false */
    sentForExecution: boolean;
    signers: Address[];
    /** @format int32 */
    approvalsNum: number;
    /** @format int64 */
    expirationDate: number;
    /** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
    risk: Risk;
    /** @format int64 */
    creationDate: number;
    signedBy: Address[];
}

export interface Refund {
    /** @example "DNS.ton" */
    type: 'DNS.ton' | 'DNS.tg' | 'GetGems';
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    origin: string;
}

export interface ValueFlow {
    account: AccountAddress;
    /**
     * @format bigint
     * @example 80
     */
    ton: bigint;
    /**
     * @format bigint
     * @example 10
     */
    fees: bigint;
    jettons?: {
        account: AccountAddress;
        jetton: JettonPreview;
        /**
         * @format bigint
         * @example 10
         */
        quantity: bigint;
    }[];
}

export interface Action {
    /** @example "TonTransfer" */
    type:
        | 'TonTransfer'
        | 'JettonTransfer'
        | 'JettonBurn'
        | 'JettonMint'
        | 'NftItemTransfer'
        | 'ContractDeploy'
        | 'Subscribe'
        | 'UnSubscribe'
        | 'AuctionBid'
        | 'NftPurchase'
        | 'DepositStake'
        | 'WithdrawStake'
        | 'WithdrawStakeRequest'
        | 'JettonSwap'
        | 'SmartContractExec'
        | 'ElectionsRecoverStake'
        | 'ElectionsDepositStake'
        | 'DomainRenew'
        | 'InscriptionTransfer'
        | 'InscriptionMint'
        | 'Unknown';
    /** @example "ok" */
    status: 'ok' | 'failed';
    TonTransfer?: TonTransferAction;
    ContractDeploy?: ContractDeployAction;
    JettonTransfer?: JettonTransferAction;
    JettonBurn?: JettonBurnAction;
    JettonMint?: JettonMintAction;
    NftItemTransfer?: NftItemTransferAction;
    Subscribe?: SubscriptionAction;
    UnSubscribe?: UnSubscriptionAction;
    AuctionBid?: AuctionBidAction;
    NftPurchase?: NftPurchaseAction;
    /** validator's participation in elections */
    DepositStake?: DepositStakeAction;
    /** validator's participation in elections */
    WithdrawStake?: WithdrawStakeAction;
    /** validator's participation in elections */
    WithdrawStakeRequest?: WithdrawStakeRequestAction;
    ElectionsDepositStake?: ElectionsDepositStakeAction;
    ElectionsRecoverStake?: ElectionsRecoverStakeAction;
    JettonSwap?: JettonSwapAction;
    SmartContractExec?: SmartContractAction;
    DomainRenew?: DomainRenewAction;
    InscriptionTransfer?: InscriptionTransferAction;
    InscriptionMint?: InscriptionMintAction;
    /** shortly describes what this action is about. */
    simplePreview: ActionSimplePreview;
    baseTransactions: string[];
}

export interface TonTransferAction {
    sender: AccountAddress;
    recipient: AccountAddress;
    /**
     * amount in nanotons
     * @format bigint
     * @example 123456789
     */
    amount: bigint;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encryptedComment?: EncryptedComment;
    refund?: Refund;
}

export interface SmartContractAction {
    executor: AccountAddress;
    contract: AccountAddress;
    /**
     * amount in nanotons
     * @format bigint
     * @example 123456789
     */
    tonAttached: bigint;
    /** @example "NftTransfer or 0x35d95a12" */
    operation: string;
    payload?: string;
    refund?: Refund;
}

export interface DomainRenewAction {
    /** @example "vasya.ton" */
    domain: string;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    contractAddress: Address;
    renewer: AccountAddress;
}

export interface InscriptionMintAction {
    recipient: AccountAddress;
    /**
     * amount in minimal particles
     * @example "123456789"
     */
    amount: string;
    /** @example "ton20" */
    type: 'ton20' | 'gram20';
    /** @example "nano" */
    ticker: string;
    /** @example 9 */
    decimals: number;
}

export interface InscriptionTransferAction {
    sender: AccountAddress;
    recipient: AccountAddress;
    /**
     * amount in minimal particles
     * @example "123456789"
     */
    amount: string;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    /** @example "ton20" */
    type: 'ton20' | 'gram20';
    /** @example "nano" */
    ticker: string;
    /** @example 9 */
    decimals: number;
}

export interface NftItemTransferAction {
    sender?: AccountAddress;
    recipient?: AccountAddress;
    /** @example "" */
    nft: string;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encryptedComment?: EncryptedComment;
    /**
     * raw hex encoded payload
     * @example "0234de3e21d21b3ee21f3"
     */
    payload?: string;
    refund?: Refund;
}

export interface JettonTransferAction {
    sender?: AccountAddress;
    recipient?: AccountAddress;
    /**
     * @format address
     * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
     */
    sendersWallet: Address;
    /**
     * @format address
     * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
     */
    recipientsWallet: Address;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encryptedComment?: EncryptedComment;
    refund?: Refund;
    jetton: JettonPreview;
}

export interface JettonBurnAction {
    sender: AccountAddress;
    /**
     * @format address
     * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
     */
    sendersWallet: Address;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    jetton: JettonPreview;
}

export interface JettonMintAction {
    recipient: AccountAddress;
    /**
     * @format address
     * @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B"
     */
    recipientsWallet: Address;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    jetton: JettonPreview;
}

export interface ContractDeployAction {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /** @example ["nft_item","nft_royalty"] */
    interfaces: string[];
}

export interface SubscriptionAction {
    subscriber: AccountAddress;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    subscription: Address;
    beneficiary: AccountAddress;
    /**
     * @format bigint
     * @example 1000000000
     */
    amount: bigint;
    /** @example false */
    initial: boolean;
}

export interface UnSubscriptionAction {
    subscriber: AccountAddress;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    subscription: Address;
    beneficiary: AccountAddress;
}

export interface AuctionBidAction {
    auctionType: 'DNS.ton' | 'DNS.tg' | 'NUMBER.tg' | 'getgems';
    amount: Price;
    nft?: NftItem;
    bidder: AccountAddress;
    auction: AccountAddress;
}

/** validator's participation in elections */
export interface DepositStakeAction {
    /**
     * @format bigint
     * @example 1660050553
     */
    amount: bigint;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}

/** validator's participation in elections */
export interface WithdrawStakeAction {
    /**
     * @format bigint
     * @example 1660050553
     */
    amount: bigint;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}

/** validator's participation in elections */
export interface WithdrawStakeRequestAction {
    /**
     * @format bigint
     * @example 1660050553
     */
    amount?: bigint;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}

export interface ElectionsRecoverStakeAction {
    /**
     * @format bigint
     * @example 1660050553
     */
    amount: bigint;
    staker: AccountAddress;
}

export interface ElectionsDepositStakeAction {
    /**
     * @format bigint
     * @example 1660050553
     */
    amount: bigint;
    staker: AccountAddress;
}

export interface JettonSwapAction {
    dex: 'stonfi' | 'dedust' | 'megatonfi';
    /** @example "1660050553" */
    amountIn: string;
    /** @example "1660050553" */
    amountOut: string;
    /**
     * @format bigint
     * @example 1000000000
     */
    tonIn?: bigint;
    /**
     * @format bigint
     * @example 2000000000
     */
    tonOut?: bigint;
    userWallet: AccountAddress;
    router: AccountAddress;
    jettonMasterIn?: JettonPreview;
    jettonMasterOut?: JettonPreview;
}

export interface NftPurchaseAction {
    auctionType: 'DNS.ton' | 'DNS.tg' | 'NUMBER.tg' | 'getgems';
    amount: Price;
    nft: NftItem;
    seller: AccountAddress;
    buyer: AccountAddress;
}

/** shortly describes what this action is about. */
export interface ActionSimplePreview {
    /** @example "Ton Transfer" */
    name: string;
    /** @example "Transferring 5 Ton" */
    description: string;
    /** a link to an image for this particular action. */
    actionImage?: string;
    /** @example "5 Ton" */
    value?: string;
    /** a link to an image that depicts this action's asset. */
    valueImage?: string;
    accounts: AccountAddress[];
}

/** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
export interface AccountEvent {
    /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
    eventId: string;
    account: AccountAddress;
    /**
     * @format int64
     * @example 1234567890
     */
    timestamp: number;
    actions: Action[];
    /**
     * scam
     * @example false
     */
    isScam: boolean;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    /**
     * Event is not finished yet. Transactions still happening
     * @example false
     */
    inProgress: boolean;
    /**
     * TODO
     * @format int64
     * @example 3
     */
    extra: number;
}

export interface AccountEvents {
    events: AccountEvent[];
    /**
     * @format int64
     * @example 25713146000001
     */
    nextFrom: number;
}

export interface TraceID {
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    id: string;
    /**
     * @format int64
     * @example 1645544908
     */
    utime: number;
}

export interface TraceIDs {
    traces: TraceID[];
}

export interface ApyHistory {
    apy: number;
    time: number;
}

export interface Subscription {
    /**
     * @format address
     * @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee"
     */
    address: Address;
    /**
     * @format address
     * @example "0:567DE86AF2B6A557D7085807CF7C26338124987A5179344F0D0FA2657EB710F1"
     */
    walletAddress: Address;
    /**
     * @format address
     * @example "0:c704dadfabac88eab58e340de03080df81ff76636431f48624ad6e26fb2da0a4"
     */
    beneficiaryAddress: Address;
    /**
     * @format int64
     * @example 1000000000
     */
    amount: number;
    /**
     * @format int64
     * @example 2592000
     */
    period: number;
    /**
     * @format int64
     * @example 1653996832
     */
    startTime: number;
    /**
     * @format int64
     * @example 10800
     */
    timeout: number;
    /**
     * @format int64
     * @example 1653996834
     */
    lastPaymentTime: number;
    /**
     * @format int64
     * @example 0
     */
    lastRequestTime: number;
    /**
     * @format int64
     * @example 217477
     */
    subscriptionId: number;
    /**
     * @format int32
     * @example 0
     */
    failedAttempts: number;
}

export interface Subscriptions {
    subscriptions: Subscription[];
}

export interface Auction {
    /** @example "wallet.ton" */
    domain: string;
    /**
     * @format address
     * @example "0:c704dadfabac88eab58e340de03080df81ff76636431f48624ad6e26fb2da0a4"
     */
    owner: Address;
    /**
     * @format bigint
     * @example 1660050553
     */
    price: bigint;
    /**
     * @format bigint
     * @example 1660050553
     */
    bids: bigint;
    /**
     * @format int64
     * @example 1660050553
     */
    date: number;
}

export interface Auctions {
    data: Auction[];
    /**
     * @format int64
     * @example 1660050553
     */
    total: number;
}

export interface WalletDNS {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    account: AccountAddress;
    /** @example true */
    isWallet: boolean;
    /** @example true */
    hasMethodPubkey: boolean;
    /** @example true */
    hasMethodSeqno: boolean;
    names: string[];
}

export interface DomainInfo {
    name: string;
    /**
     * date of expiring. optional. not all domain in ton has expiration date
     * @format int64
     */
    expiringAt?: number;
    item?: NftItem;
}

export interface DnsRecord {
    wallet?: WalletDNS;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    nextResolver?: Address;
    sites: string[];
    /**
     * tonstorage bag id
     * @example "da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    storage?: string;
}

export interface NftCollection {
    /**
     * @format address
     * @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159"
     */
    address: Address;
    /**
     * @format int64
     * @example 1
     */
    nextItemIndex: number;
    owner?: AccountAddress;
    /** @format cell */
    rawCollectionContent: Cell;
    /** @example {} */
    metadata?: Record<string, any>;
    previews?: ImagePreview[];
    approvedBy: NftApprovedBy;
}

export interface NftCollections {
    nftCollections: NftCollection[];
}

export interface Trace {
    transaction: Transaction;
    /** @example ["wallet","tep62_item"] */
    interfaces: string[];
    children?: Trace[];
    /** @example false */
    emulated?: boolean;
}

export interface MessageConsequences {
    trace: Trace;
    /** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
    risk: Risk;
    /** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
    event: AccountEvent;
}

/** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
export interface Risk {
    /**
     * transfer all the remaining balance of the wallet.
     * @example true
     */
    transferAllRemainingBalance: boolean;
    /**
     * @format bigint
     * @example 500
     */
    ton: bigint;
    jettons: JettonQuantity[];
    nfts: NftItem[];
}

export interface JettonQuantity {
    /** @example "597968399" */
    quantity: string;
    walletAddress: AccountAddress;
    jetton: JettonPreview;
}

export interface DecodedMessage {
    destination: AccountAddress;
    /** @example "v3R2" */
    destinationWalletVersion: string;
    extInMsgDecoded?: {
        walletV3?: {
            /**
             * @format int64
             * @example 1
             */
            subwalletId: number;
            /**
             * @format int64
             * @example 1
             */
            validUntil: number;
            /**
             * @format int64
             * @example 1
             */
            seqno: number;
            rawMessages: DecodedRawMessage[];
        };
        walletV4?: {
            /**
             * @format int64
             * @example 1
             */
            subwalletId: number;
            /**
             * @format int64
             * @example 1
             */
            validUntil: number;
            /**
             * @format int64
             * @example 1
             */
            seqno: number;
            /**
             * @format int32
             * @example 1
             */
            op: number;
            rawMessages: DecodedRawMessage[];
        };
        walletHighloadV2?: {
            /**
             * @format int64
             * @example 1
             */
            subwalletId: number;
            /** @example "34254528475294857" */
            boundedQueryId: string;
            rawMessages: DecodedRawMessage[];
        };
    };
}

export interface DecodedRawMessage {
    message: {
        /** @format cell */
        boc: Cell;
        /** @example "nft_transfer" */
        decodedOpName?: string;
        /** @example "0xdeadbeaf" */
        opCode?: string;
        decodedBody?: any;
    };
    /** @example 2 */
    mode: number;
}

export interface Event {
    /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
    eventId: string;
    /**
     * @format int64
     * @example 1234567890
     */
    timestamp: number;
    actions: Action[];
    valueFlow: ValueFlow[];
    /**
     * scam
     * @example false
     */
    isScam: boolean;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    /**
     * Event is not finished yet. Transactions still happening
     * @example false
     */
    inProgress: boolean;
}

export interface JettonMetadata {
    /**
     * @format address
     * @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0"
     */
    address: Address;
    /** @example "Wrapped TON" */
    name: string;
    /** @example "WTON" */
    symbol: string;
    /** @example "9" */
    decimals: string;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image?: string;
    /** @example "Wrapped Toncoin" */
    description?: string;
    social?: string[];
    websites?: string[];
    catalogs?: string[];
    /** @example "https://claim-api.tonapi.io/jettons/TESTMINT" */
    customPayloadApiUri?: string;
}

export interface InscriptionBalances {
    inscriptions: InscriptionBalance[];
}

export interface InscriptionBalance {
    /** @example "ton20" */
    type: 'ton20' | 'gram20';
    /** @example "nano" */
    ticker: string;
    /** @example "1000000000" */
    balance: string;
    /** @example 9 */
    decimals: number;
}

export interface Jettons {
    jettons: JettonInfo[];
}

export interface JettonInfo {
    /** @example true */
    mintable: boolean;
    /** @example "5887105890579978" */
    totalSupply: string;
    admin?: AccountAddress;
    metadata: JettonMetadata;
    verification: JettonVerificationType;
    /**
     * @format int32
     * @example 2000
     */
    holdersCount: number;
}

export interface JettonHolders {
    addresses: {
        /**
         * @format address
         * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
         */
        address: Address;
        owner: AccountAddress;
        /**
         * balance in the smallest jetton's units
         * @example "168856200518084"
         */
        balance: string;
    }[];
    /**
     * total number of holders
     * @format int64
     * @example 2000
     */
    total: number;
}

export interface JettonTransferPayload {
    /**
     * hex-encoded BoC
     * @example "b5ee9c72410212010001b40009460395b521c9251151ae7987e03c544bd275d6cd42c2d157f840beb14d5454b96718000d012205817002020328480101fd7f6a648d4f771d7f0abc1707e4e806b19de1801f65eb8c133a4cfb0c33d847000b22012004052848010147da975b922d89192f4c9b68a640daa6764ec398c93cec025e17f0c1852a711a0009220120061122012007082848010170d9fb0423cbef6c2cf1f3811a2f640daf8c9a326b6f8816c1b993e90d88e2100006220120090a28480101f6df1d75f6b9e45f224b2cb4fc2286d927d47b468b6dbf1fedc4316290ec2ae900042201200b102201200c0f2201200d"
     */
    customPayload?: string;
    /**
     * hex-encoded BoC
     * @example "b5ee9c72410212010001b40009460395b521c9251151ae7987e03c544bd275d6cd42c2d157f840beb14d5454b96718000d012205817002020328480101fd7f6a648d4f771d7f0abc1707e4e806b19de1801f65eb8c133a4cfb0c33d847000b22012004052848010147da975b922d89192f4c9b68a640daa6764ec398c93cec025e17f0c1852a711a0009220120061122012007082848010170d9fb0423cbef6c2cf1f3811a2f640daf8c9a326b6f8816c1b993e90d88e2100006220120090a28480101f6df1d75f6b9e45f224b2cb4fc2286d927d47b468b6dbf1fedc4316290ec2ae900042201200b102201200c0f2201200d"
     */
    stateInit?: string;
}

export interface AccountStaking {
    pools: AccountStakingInfo[];
}

export interface AccountStakingInfo {
    /** @example "EQBI-wGVp_x0VFEjd7m9cEUD3tJ_bnxMSp0Tb9qz757ATEAM" */
    pool: string;
    /**
     * @format bigint
     * @example 10050000000000
     */
    amount: bigint;
    /**
     * @format bigint
     * @example 500000000000
     */
    pendingDeposit: bigint;
    /**
     * @format bigint
     * @example 500000000000
     */
    pendingWithdraw: bigint;
    /**
     * @format bigint
     * @example 500000000000
     */
    readyWithdraw: bigint;
}

export interface PoolInfo {
    /**
     * @format address
     * @example "0:48fb0195a7fc7454512377b9bd704503ded27f6e7c4c4a9d136fdab3ef9ec04c"
     */
    address: Address;
    /** @example "Tonkeeper pool" */
    name: string;
    /** @format bigint */
    totalAmount: bigint;
    implementation: PoolImplementationType;
    /**
     * APY in percent
     * @example 5.31
     */
    apy: number;
    /**
     * @format bigint
     * @example 5000000000
     */
    minStake: bigint;
    /**
     * current nomination cycle beginning timestamp
     * @format int64
     * @example 1678223064
     */
    cycleStart: number;
    /**
     * current nomination cycle ending timestamp
     * @format int64
     * @example 1678223064
     */
    cycleEnd: number;
    /**
     * this pool has verified source code or managed by trusted company
     * @example true
     */
    verified: boolean;
    /**
     * current number of nominators
     * @example 10
     */
    currentNominators: number;
    /**
     * maximum number of nominators
     * @example 100
     */
    maxNominators: number;
    /**
     * for liquid staking master account of jetton
     * @format address
     * @example "0:4a91d32d0289bda9813ae00ff7640e6c38fdce76e4583dd6afc463b70c7d767c"
     */
    liquidJettonMaster?: Address;
    /**
     * total stake of all nominators
     * @format bigint
     * @example 5000000000
     */
    nominatorsStake: bigint;
    /**
     * stake of validator
     * @format bigint
     * @example 5000000000
     */
    validatorStake: bigint;
    /** @format int64 */
    cycleLength?: number;
}

export interface PoolImplementation {
    /** @example "TON Whales" */
    name: string;
    /** @example "Oldest pool with minimal staking amount 50 TON" */
    description: string;
    /** @example "https://tonvalidators.org/" */
    url: string;
    socials: string[];
}

export interface StorageProvider {
    /**
     * @format address
     * @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159"
     */
    address: Address;
    /** @example true */
    acceptNewContracts: boolean;
    /**
     * @format bigint
     * @example 50000000
     */
    ratePerMbDay: bigint;
    /**
     * @format int64
     * @example 604800
     */
    maxSpan: number;
    /**
     * @format int64
     * @example 64
     */
    minimalFileSize: number;
    /**
     * @format int64
     * @example 10485760
     */
    maximalFileSize: number;
}

export interface FoundAccounts {
    addresses: {
        /** @format address */
        address: Address;
        /** @example "blah_blah.ton" */
        name: string;
        /** @example "https://cache.tonapi.io/images/media.jpg" */
        preview: string;
    }[];
}

export interface DnsExpiring {
    items: {
        /**
         * @format int64
         * @example 1678275313
         */
        expiringAt: number;
        /** @example "blah_blah.ton" */
        name: string;
        dnsItem?: NftItem;
    }[];
}

export interface AccountInfoByStateInit {
    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
    publicKey: string;
    /**
     * @format address
     * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
     */
    address: Address;
}

export interface Seqno {
    /** @format int32 */
    seqno: number;
}

export interface BlockRaw {
    /**
     * @format int32
     * @example 4294967295
     */
    workchain: number;
    /** @example 800000000000000 */
    shard: string;
    /**
     * @format int32
     * @example 30699640
     */
    seqno: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    rootHash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    fileHash: string;
}

export interface InitStateRaw {
    /**
     * @format int32
     * @example 4294967295
     */
    workchain: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    rootHash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    fileHash: string;
}

export interface EncryptedComment {
    /** @example "simple" */
    encryptionType: string;
    /** @example "A6A0BD6608672B...CE3AF8DB" */
    cipherText: string;
}

export interface BlockchainAccountInspect {
    /** @format cell */
    code: Cell;
    codeHash: string;
    methods: {
        /** @format int64 */
        id: number;
        /** @example "get_something" */
        method: string;
    }[];
    compiler?: 'func';
}

export enum PoolImplementationType {
    Whales = 'whales',
    Tf = 'tf',
    LiquidTF = 'liquidTF'
}

export interface TokenRates {
    /** @example {"TON":1.3710752873163712} */
    prices?: Record<string, number>;
    /** @example {"TON":"-1.28%"} */
    diff24h?: Record<string, string>;
    /** @example {"TON":"-2.74%"} */
    diff7d?: Record<string, string>;
    /** @example {"TON":"-0.56%"} */
    diff30d?: Record<string, string>;
}

export interface MarketTonRates {
    /** @example "OKX" */
    market: string;
    /** @example 5.2 */
    usdPrice: number;
    /**
     * @format int64
     * @example 1668436763
     */
    lastDateUpdate: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig {
    baseUrl?: string;
    apiKey?: string;
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
    fetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain'
}

import { Address, Cell, TupleItem } from '@ton/core';

// @ts-ignore
import parse from 'core-js-pure/actual/json/parse';
// @ts-ignore
import rawJSON from 'core-js-pure/actual/json/raw-json';
// @ts-ignore
import stringify from 'core-js-pure/actual/json/stringify';

const JSONParse = (source: string) =>
    parse(
        source,
        // @ts-ignore JSON bigint support from core-js
        (_: any, value: any, context: any): any => {
            if (typeof value === 'number') {
                const string = context.source as string;
                return Number.isSafeInteger(value)
                    ? value
                    : /[\.eE]/.test(string)
                      ? value
                      : BigInt(string);
            }

            return value;
        }
    );

const JSONStringify = (value: any) =>
    stringify(
        value,
        // @ts-ignore JSON bigint support from core-js
        (_: any, value: any): any => {
            if (typeof value === 'bigint') {
                // @ts-ignore JSON rawJSON support from core-js
                return rawJSON(value.toString());
            }

            return value;
        }
    );

class HttpClient {
    public baseUrl: string = 'https://tonapi.io';
    private abortControllers = new Map<CancelToken, AbortController>();
    private providedFetch: typeof fetch | null = null;
    private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
        this.providedFetch ? this.providedFetch(...fetchParams) : fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    };

    constructor(apiConfig: ApiConfig = {}) {
        const tonapi = typeof window !== 'undefined' && window && (window as any).tonapi;
        const providedFetch = (tonapi && tonapi.fetch) ?? null;

        if (apiConfig.apiKey) {
            const baseApiParams = apiConfig.baseApiParams || {};
            apiConfig.baseApiParams = {
                ...baseApiParams,
                headers: {
                    ...baseApiParams.headers,
                    ['x-tonapi-client']: `tonapi-js@$0.1.3`,
                    Authorization: `Bearer ${apiConfig.apiKey}`
                }
            };
        }

        Object.assign(this, apiConfig, { providedFetch });
    }

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key];
        return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
        return keys
            .map(key =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key)
            )
            .join('&');
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : '';
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null && (typeof input === 'object' || typeof input === 'string')
                ? JSONStringify(input)
                : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== 'string' ? JSONStringify(input) : input,
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === 'object' && property !== null
                          ? JSONStringify(property)
                          : `${property}`
                );
                return formData;
            }, new FormData()),
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
    };

    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {})
            }
        };
    }

    protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<T> => {
        const requestParams = this.mergeRequestParams(params);
        const queryString = query && this.toQueryString(query);
        const contentType = type ?? ContentType.Json;
        const payloadFormatter = this.contentFormatters[contentType];
        const responseFormat = format || requestParams.format;

        return this.customFetch(
            `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
            {
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(contentType && contentType !== ContentType.FormData
                        ? { 'Content-Type': contentType }
                        : {})
                },
                signal:
                    (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) ||
                    null,
                body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
            }
        ).then(async response => {
            const r = response.clone() as HttpResponse<T, E>;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const customResponseFormat = responseFormat === 'json' ? 'text' : responseFormat;

            const data = !customResponseFormat
                ? r
                : await response[customResponseFormat!]()
                      .then(data => {
                          if (r.ok) {
                              r.data = responseFormat === 'json' ? JSONParse(data as string) : data;
                          } else {
                              r.error = data as E;
                          }
                          return r;
                      })
                      .catch(e => {
                          r.error = e;
                          return r;
                      });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data.data;
        });
    };
}

const components = {
    '#/components/schemas/Error': {
        type: 'object',
        required: ['error'],
        properties: { error: { type: 'string' } }
    },
    '#/components/schemas/AccountAddress': {
        type: 'object',
        required: ['address', 'is_scam', 'is_wallet'],
        properties: {
            address: { type: 'string', format: 'address' },
            name: { type: 'string' },
            is_scam: { type: 'boolean' },
            icon: { type: 'string' },
            is_wallet: { type: 'boolean' }
        }
    },
    '#/components/schemas/BlockCurrencyCollection': {
        type: 'object',
        required: ['grams', 'other'],
        properties: {
            grams: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            other: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['id', 'value'],
                    properties: {
                        id: { type: 'integer', format: 'int64' },
                        value: { type: 'string' }
                    }
                }
            }
        }
    },
    '#/components/schemas/BlockValueFlow': {
        type: 'object',
        required: [
            'from_prev_blk',
            'to_next_blk',
            'imported',
            'exported',
            'fees_collected',
            'fees_imported',
            'recovered',
            'created',
            'minted'
        ],
        properties: {
            from_prev_blk: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            to_next_blk: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            imported: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            exported: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            fees_collected: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            burned: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            fees_imported: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            recovered: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            created: { $ref: '#/components/schemas/BlockCurrencyCollection' },
            minted: { $ref: '#/components/schemas/BlockCurrencyCollection' }
        }
    },
    '#/components/schemas/ServiceStatus': {
        type: 'object',
        required: ['indexing_latency', 'rest_online', 'last_known_masterchain_seqno'],
        properties: {
            rest_online: { type: 'boolean', default: true },
            indexing_latency: { type: 'integer' },
            last_known_masterchain_seqno: { type: 'integer', format: 'int32' }
        }
    },
    '#/components/schemas/ReducedBlock': {
        type: 'object',
        required: [
            'workchain_id',
            'shard',
            'seqno',
            'tx_quantity',
            'utime',
            'shards_blocks',
            'parent'
        ],
        properties: {
            workchain_id: { type: 'integer', format: 'int32' },
            shard: { type: 'string' },
            seqno: { type: 'integer', format: 'int32' },
            master_ref: { type: 'string' },
            tx_quantity: { type: 'integer' },
            utime: { type: 'integer', format: 'int64' },
            shards_blocks: { type: 'array', items: { type: 'string' } },
            parent: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/BlockchainBlock': {
        type: 'object',
        required: [
            'workchain_id',
            'shard',
            'seqno',
            'root_hash',
            'file_hash',
            'global_id',
            'value_flow',
            'version',
            'after_merge',
            'before_split',
            'after_split',
            'want_split',
            'want_merge',
            'key_block',
            'gen_utime',
            'start_lt',
            'end_lt',
            'vert_seqno',
            'gen_catchain_seqno',
            'min_ref_mc_seqno',
            'prev_key_block_seqno',
            'prev_refs',
            'in_msg_descr_length',
            'out_msg_descr_length',
            'rand_seed',
            'created_by',
            'tx_quantity'
        ],
        properties: {
            tx_quantity: { type: 'integer' },
            value_flow: { $ref: '#/components/schemas/BlockValueFlow' },
            workchain_id: { type: 'integer', format: 'int32' },
            shard: { type: 'string' },
            seqno: { type: 'integer', format: 'int32' },
            root_hash: { type: 'string' },
            file_hash: { type: 'string' },
            global_id: { type: 'integer', format: 'int32' },
            version: { type: 'integer', format: 'int32' },
            after_merge: { type: 'boolean' },
            before_split: { type: 'boolean' },
            after_split: { type: 'boolean' },
            want_split: { type: 'boolean' },
            want_merge: { type: 'boolean' },
            key_block: { type: 'boolean' },
            gen_utime: { type: 'integer', format: 'int64' },
            start_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            end_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            vert_seqno: { type: 'integer', format: 'int32' },
            gen_catchain_seqno: { type: 'integer', format: 'int32' },
            min_ref_mc_seqno: { type: 'integer', format: 'int32' },
            prev_key_block_seqno: { type: 'integer', format: 'int32' },
            gen_software_version: { type: 'integer', format: 'int32' },
            gen_software_capabilities: { type: 'integer', format: 'int64' },
            master_ref: { type: 'string' },
            prev_refs: { type: 'array', items: { type: 'string' } },
            in_msg_descr_length: { type: 'integer', format: 'int64' },
            out_msg_descr_length: { type: 'integer', format: 'int64' },
            rand_seed: { type: 'string' },
            created_by: { type: 'string' }
        }
    },
    '#/components/schemas/BlockchainBlocks': {
        type: 'object',
        required: ['blocks'],
        properties: {
            blocks: { type: 'array', items: { $ref: '#/components/schemas/BlockchainBlock' } }
        }
    },
    '#/components/schemas/ReducedBlocks': {
        type: 'object',
        required: ['blocks'],
        properties: {
            blocks: { type: 'array', items: { $ref: '#/components/schemas/ReducedBlock' } }
        }
    },
    '#/components/schemas/BlockchainBlockShards': {
        type: 'object',
        required: ['shards'],
        properties: {
            shards: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['last_known_block_id', 'last_known_block'],
                    properties: {
                        last_known_block_id: { type: 'string' },
                        last_known_block: { $ref: '#/components/schemas/BlockchainBlock' }
                    }
                }
            }
        }
    },
    '#/components/schemas/AccountStatus': {
        type: 'string',
        enum: ['nonexist', 'uninit', 'active', 'frozen']
    },
    '#/components/schemas/StateInit': {
        type: 'object',
        required: ['boc', 'interfaces'],
        properties: {
            boc: { type: 'string', format: 'cell' },
            interfaces: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/Message': {
        type: 'object',
        required: [
            'msg_type',
            'created_lt',
            'ihr_disabled',
            'bounce',
            'bounced',
            'value',
            'fwd_fee',
            'ihr_fee',
            'import_fee',
            'created_at',
            'hash'
        ],
        properties: {
            msg_type: { type: 'string', enum: ['int_msg', 'ext_in_msg', 'ext_out_msg'] },
            created_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            ihr_disabled: { type: 'boolean' },
            bounce: { type: 'boolean' },
            bounced: { type: 'boolean' },
            value: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            fwd_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            ihr_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            source: { $ref: '#/components/schemas/AccountAddress' },
            import_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            created_at: { type: 'integer', format: 'int64' },
            op_code: { type: 'string' },
            init: { $ref: '#/components/schemas/StateInit' },
            hash: { type: 'string' },
            raw_body: { type: 'string', format: 'cell' },
            decoded_op_name: { type: 'string' },
            decoded_body: {}
        }
    },
    '#/components/schemas/TransactionType': {
        type: 'string',
        enum: [
            'TransOrd',
            'TransTickTock',
            'TransSplitPrepare',
            'TransSplitInstall',
            'TransMergePrepare',
            'TransMergeInstall',
            'TransStorage'
        ]
    },
    '#/components/schemas/AccStatusChange': {
        type: 'string',
        enum: ['acst_unchanged', 'acst_frozen', 'acst_deleted']
    },
    '#/components/schemas/ComputeSkipReason': {
        type: 'string',
        enum: ['cskip_no_state', 'cskip_bad_state', 'cskip_no_gas']
    },
    '#/components/schemas/BouncePhaseType': {
        type: 'string',
        enum: ['TrPhaseBounceNegfunds', 'TrPhaseBounceNofunds', 'TrPhaseBounceOk']
    },
    '#/components/schemas/ComputePhase': {
        type: 'object',
        required: ['skipped'],
        properties: {
            skipped: { type: 'boolean' },
            skip_reason: { $ref: '#/components/schemas/ComputeSkipReason' },
            success: { type: 'boolean' },
            gas_fees: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            gas_used: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            vm_steps: { type: 'integer', format: 'int32' },
            exit_code: { type: 'integer', format: 'int32' },
            exit_code_description: { type: 'string' }
        }
    },
    '#/components/schemas/StoragePhase': {
        type: 'object',
        required: ['fees_collected', 'status_change'],
        properties: {
            fees_collected: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            fees_due: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            status_change: { $ref: '#/components/schemas/AccStatusChange' }
        }
    },
    '#/components/schemas/CreditPhase': {
        type: 'object',
        required: ['fees_collected', 'credit'],
        properties: {
            fees_collected: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            credit: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/ActionPhase': {
        type: 'object',
        required: [
            'success',
            'result_code',
            'total_actions',
            'skipped_actions',
            'fwd_fees',
            'total_fees'
        ],
        properties: {
            success: { type: 'boolean' },
            result_code: { type: 'integer', format: 'int32' },
            total_actions: { type: 'integer', format: 'int32' },
            skipped_actions: { type: 'integer', format: 'int32' },
            fwd_fees: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            total_fees: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            result_code_description: { type: 'string' }
        }
    },
    '#/components/schemas/Transaction': {
        type: 'object',
        required: [
            'hash',
            'lt',
            'account',
            'end_balance',
            'success',
            'utime',
            'orig_status',
            'end_status',
            'total_fees',
            'transaction_type',
            'state_update_old',
            'state_update_new',
            'out_msgs',
            'block',
            'aborted',
            'destroyed',
            'raw'
        ],
        properties: {
            hash: { type: 'string' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            account: { $ref: '#/components/schemas/AccountAddress' },
            success: { type: 'boolean' },
            utime: { type: 'integer', format: 'int64' },
            orig_status: { $ref: '#/components/schemas/AccountStatus' },
            end_status: { $ref: '#/components/schemas/AccountStatus' },
            total_fees: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            end_balance: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            transaction_type: { $ref: '#/components/schemas/TransactionType' },
            state_update_old: { type: 'string' },
            state_update_new: { type: 'string' },
            in_msg: { $ref: '#/components/schemas/Message' },
            out_msgs: { type: 'array', items: { $ref: '#/components/schemas/Message' } },
            block: { type: 'string' },
            prev_trans_hash: { type: 'string' },
            prev_trans_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            compute_phase: { $ref: '#/components/schemas/ComputePhase' },
            storage_phase: { $ref: '#/components/schemas/StoragePhase' },
            credit_phase: { $ref: '#/components/schemas/CreditPhase' },
            action_phase: { $ref: '#/components/schemas/ActionPhase' },
            bounce_phase: { $ref: '#/components/schemas/BouncePhaseType' },
            aborted: { type: 'boolean' },
            destroyed: { type: 'boolean' },
            raw: { type: 'string', format: 'cell' }
        }
    },
    '#/components/schemas/Transactions': {
        type: 'object',
        required: ['transactions'],
        properties: {
            transactions: { type: 'array', items: { $ref: '#/components/schemas/Transaction' } }
        }
    },
    '#/components/schemas/ConfigProposalSetup': {
        type: 'object',
        required: [
            'min_tot_rounds',
            'max_tot_rounds',
            'min_wins',
            'max_losses',
            'min_store_sec',
            'max_store_sec',
            'bit_price',
            'cell_price'
        ],
        properties: {
            min_tot_rounds: { type: 'integer' },
            max_tot_rounds: { type: 'integer' },
            min_wins: { type: 'integer' },
            max_losses: { type: 'integer' },
            min_store_sec: { type: 'integer', format: 'int64' },
            max_store_sec: { type: 'integer', format: 'int64' },
            bit_price: { type: 'integer', format: 'int64' },
            cell_price: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/GasLimitPrices': {
        type: 'object',
        required: [
            'gas_price',
            'gas_limit',
            'gas_credit',
            'block_gas_limit',
            'freeze_due_limit',
            'delete_due_limit'
        ],
        properties: {
            special_gas_limit: { type: 'integer', format: 'int64' },
            flat_gas_limit: { type: 'integer', format: 'int64' },
            flat_gas_price: { type: 'integer', format: 'int64' },
            gas_price: { type: 'integer', format: 'int64' },
            gas_limit: { type: 'integer', format: 'int64' },
            gas_credit: { type: 'integer', format: 'int64' },
            block_gas_limit: { type: 'integer', format: 'int64' },
            freeze_due_limit: { type: 'integer', format: 'int64' },
            delete_due_limit: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/BlockParamLimits': {
        type: 'object',
        required: ['underload', 'soft_limit', 'hard_limit'],
        properties: {
            underload: { type: 'integer', format: 'int64' },
            soft_limit: { type: 'integer', format: 'int64' },
            hard_limit: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/BlockLimits': {
        type: 'object',
        required: ['bytes', 'gas', 'lt_delta'],
        properties: {
            bytes: { $ref: '#/components/schemas/BlockParamLimits' },
            gas: { $ref: '#/components/schemas/BlockParamLimits' },
            lt_delta: { $ref: '#/components/schemas/BlockParamLimits' }
        }
    },
    '#/components/schemas/MsgForwardPrices': {
        type: 'object',
        required: [
            'lump_price',
            'bit_price',
            'cell_price',
            'ihr_price_factor',
            'first_frac',
            'next_frac'
        ],
        properties: {
            lump_price: { type: 'integer', format: 'int64' },
            bit_price: { type: 'integer', format: 'int64' },
            cell_price: { type: 'integer', format: 'int64' },
            ihr_price_factor: { type: 'integer', format: 'int64' },
            first_frac: { type: 'integer', format: 'int64' },
            next_frac: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/WorkchainDescr': {
        type: 'object',
        required: [
            'workchain',
            'enabled_since',
            'actual_min_split',
            'min_split',
            'max_split',
            'basic',
            'active',
            'accept_msgs',
            'flags',
            'zerostate_root_hash',
            'zerostate_file_hash',
            'version'
        ],
        properties: {
            workchain: { type: 'integer', format: 'int' },
            enabled_since: { type: 'integer', format: 'int64' },
            actual_min_split: { type: 'integer', format: 'int' },
            min_split: { type: 'integer', format: 'int' },
            max_split: { type: 'integer', format: 'int' },
            basic: { type: 'integer' },
            active: { type: 'boolean' },
            accept_msgs: { type: 'boolean' },
            flags: { type: 'integer', format: 'int' },
            zerostate_root_hash: { type: 'string' },
            zerostate_file_hash: { type: 'string' },
            version: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/MisbehaviourPunishmentConfig': {
        type: 'object',
        required: [
            'default_flat_fine',
            'default_proportional_fine',
            'severity_flat_mult',
            'severity_proportional_mult',
            'unpunishable_interval',
            'long_interval',
            'long_flat_mult',
            'long_proportional_mult',
            'medium_interval',
            'medium_flat_mult',
            'medium_proportional_mult'
        ],
        properties: {
            default_flat_fine: { type: 'integer', format: 'int64' },
            default_proportional_fine: { type: 'integer', format: 'int64' },
            severity_flat_mult: { type: 'integer' },
            severity_proportional_mult: { type: 'integer' },
            unpunishable_interval: { type: 'integer' },
            long_interval: { type: 'integer' },
            long_flat_mult: { type: 'integer' },
            long_proportional_mult: { type: 'integer' },
            medium_interval: { type: 'integer' },
            medium_flat_mult: { type: 'integer' },
            medium_proportional_mult: { type: 'integer' }
        }
    },
    '#/components/schemas/SizeLimitsConfig': {
        type: 'object',
        required: [
            'max_msg_bits',
            'max_msg_cells',
            'max_library_cells',
            'max_vm_data_depth',
            'max_ext_msg_size',
            'max_ext_msg_depth'
        ],
        properties: {
            max_msg_bits: { type: 'integer', format: 'int64' },
            max_msg_cells: { type: 'integer', format: 'int64' },
            max_library_cells: { type: 'integer', format: 'int64' },
            max_vm_data_depth: { type: 'integer', format: 'int' },
            max_ext_msg_size: { type: 'integer', format: 'int64' },
            max_ext_msg_depth: { type: 'integer', format: 'int' },
            max_acc_state_cells: { type: 'integer', format: 'int64' },
            max_acc_state_bits: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/ValidatorsSet': {
        type: 'object',
        required: ['utime_since', 'utime_until', 'total', 'main', 'list'],
        properties: {
            utime_since: { type: 'integer' },
            utime_until: { type: 'integer' },
            total: { type: 'integer' },
            main: { type: 'integer' },
            total_weight: { type: 'string' },
            list: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['public_key', 'weight'],
                    properties: {
                        public_key: { type: 'string' },
                        weight: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
                        adnl_addr: { type: 'string' }
                    }
                }
            }
        }
    },
    '#/components/schemas/Oracle': {
        type: 'object',
        required: ['address', 'secp_pubkey'],
        properties: {
            address: { type: 'string', format: 'address' },
            secp_pubkey: { type: 'string' }
        }
    },
    '#/components/schemas/OracleBridgeParams': {
        type: 'object',
        required: ['bridge_addr', 'oracle_multisig_address', 'external_chain_address', 'oracles'],
        properties: {
            bridge_addr: { type: 'string', format: 'address' },
            oracle_multisig_address: { type: 'string', format: 'address' },
            external_chain_address: { type: 'string' },
            oracles: { type: 'array', items: { $ref: '#/components/schemas/Oracle' } }
        }
    },
    '#/components/schemas/JettonBridgePrices': {
        type: 'object',
        required: [
            'bridge_burn_fee',
            'bridge_mint_fee',
            'wallet_min_tons_for_storage',
            'wallet_gas_consumption',
            'minter_min_tons_for_storage',
            'discover_gas_consumption'
        ],
        properties: {
            bridge_burn_fee: { type: 'integer', format: 'int64' },
            bridge_mint_fee: { type: 'integer', format: 'int64' },
            wallet_min_tons_for_storage: { type: 'integer', format: 'int64' },
            wallet_gas_consumption: { type: 'integer', format: 'int64' },
            minter_min_tons_for_storage: { type: 'integer', format: 'int64' },
            discover_gas_consumption: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/JettonBridgeParams': {
        type: 'object',
        required: ['bridge_address', 'oracles_address', 'state_flags', 'oracles'],
        properties: {
            bridge_address: { type: 'string', format: 'address' },
            oracles_address: { type: 'string', format: 'address' },
            state_flags: { type: 'integer' },
            burn_bridge_fee: { type: 'integer', format: 'int64' },
            oracles: { type: 'array', items: { $ref: '#/components/schemas/Oracle' } },
            external_chain_address: { type: 'string' },
            prices: { $ref: '#/components/schemas/JettonBridgePrices' }
        }
    },
    '#/components/schemas/Validator': {
        type: 'object',
        required: ['address', 'adnl_address', 'stake', 'max_factor'],
        properties: {
            address: { type: 'string', format: 'address' },
            adnl_address: { type: 'string' },
            stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            max_factor: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/Validators': {
        type: 'object',
        required: ['validators', 'elect_at', 'elect_close', 'min_stake', 'total_stake'],
        properties: {
            elect_at: { type: 'integer', format: 'int64' },
            elect_close: { type: 'integer', format: 'int64' },
            min_stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            total_stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            validators: { type: 'array', items: { $ref: '#/components/schemas/Validator' } }
        }
    },
    '#/components/schemas/AccountStorageInfo': {
        type: 'object',
        required: ['used_cells', 'used_bits', 'used_public_cells', 'last_paid', 'due_payment'],
        properties: {
            used_cells: { type: 'integer', format: 'int64' },
            used_bits: { type: 'integer', format: 'int64' },
            used_public_cells: { type: 'integer', format: 'int64' },
            last_paid: { type: 'integer', format: 'int64' },
            due_payment: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/BlockchainRawAccount': {
        type: 'object',
        required: ['address', 'balance', 'status', 'last_transaction_lt', 'storage'],
        properties: {
            address: { type: 'string', format: 'address' },
            balance: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            extra_balance: { type: 'object', additionalProperties: { type: 'string' } },
            code: { type: 'string', format: 'cell' },
            data: { type: 'string', format: 'cell' },
            last_transaction_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            last_transaction_hash: { type: 'string' },
            frozen_hash: { type: 'string' },
            status: { $ref: '#/components/schemas/AccountStatus' },
            storage: { $ref: '#/components/schemas/AccountStorageInfo' },
            libraries: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['public', 'root'],
                    properties: {
                        public: { type: 'boolean' },
                        root: { type: 'string', format: 'cell' }
                    }
                }
            }
        }
    },
    '#/components/schemas/Account': {
        type: 'object',
        required: ['address', 'balance', 'status', 'last_activity', 'get_methods', 'is_wallet'],
        properties: {
            address: { type: 'string', format: 'address' },
            balance: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            currencies_balance: { type: 'object', additionalProperties: true },
            last_activity: { type: 'integer', format: 'int64' },
            status: { $ref: '#/components/schemas/AccountStatus' },
            interfaces: { type: 'array', items: { type: 'string' } },
            name: { type: 'string' },
            is_scam: { type: 'boolean' },
            icon: { type: 'string' },
            memo_required: { type: 'boolean' },
            get_methods: { type: 'array', items: { type: 'string' } },
            is_suspended: { type: 'boolean' },
            is_wallet: { type: 'boolean' }
        }
    },
    '#/components/schemas/Accounts': {
        type: 'object',
        required: ['accounts'],
        properties: { accounts: { type: 'array', items: { $ref: '#/components/schemas/Account' } } }
    },
    '#/components/schemas/GaslessConfig': {
        type: 'object',
        required: ['gas_jettons', 'relay_address'],
        properties: {
            relay_address: { type: 'string', format: 'address' },
            gas_jettons: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['master_id'],
                    properties: { master_id: { type: 'string', format: 'address' } }
                }
            }
        }
    },
    '#/components/schemas/SignRawMessage': {
        type: 'object',
        required: ['address', 'amount'],
        properties: {
            address: { type: 'string', format: 'address' },
            amount: { type: 'string' },
            payload: { type: 'string', format: 'cell' },
            stateInit: { type: 'string', format: 'cell' }
        }
    },
    '#/components/schemas/SignRawParams': {
        type: 'object',
        required: ['messages', 'relay_address', 'commission', 'from', 'valid_until'],
        properties: {
            relay_address: { type: 'string', format: 'address' },
            commission: { type: 'string' },
            from: { type: 'string', format: 'address' },
            valid_until: { type: 'integer', format: 'int64' },
            messages: { type: 'array', items: { $ref: '#/components/schemas/SignRawMessage' } }
        }
    },
    '#/components/schemas/MethodExecutionResult': {
        type: 'object',
        required: ['success', 'exit_code', 'stack'],
        properties: {
            success: { type: 'boolean' },
            exit_code: { type: 'integer' },
            stack: { type: 'array', items: { $ref: '#/components/schemas/TvmStackRecord' } },
            decoded: {}
        }
    },
    '#/components/schemas/TvmStackRecord': {
        type: 'object',
        format: 'tuple-item',
        required: ['type'],
        properties: {
            type: { type: 'string', enum: ['cell', 'num', 'nan', 'null', 'tuple'] },
            cell: { type: 'string', format: 'cell' },
            slice: { type: 'string', format: 'cell' },
            num: { type: 'string' },
            tuple: { type: 'array', items: { $ref: '#/components/schemas/TvmStackRecord' } }
        }
    },
    '#/components/schemas/RawBlockchainConfig': {
        type: 'object',
        required: ['config'],
        properties: { config: { type: 'object', additionalProperties: true } }
    },
    '#/components/schemas/BlockchainConfig': {
        type: 'object',
        required: ['raw', '0', '1', '2', '4', '44'],
        properties: {
            '0': { type: 'string', format: 'address' },
            '1': { type: 'string', format: 'address' },
            '2': { type: 'string', format: 'address' },
            '3': { type: 'string', format: 'address' },
            '4': { type: 'string', format: 'address' },
            '5': {
                type: 'object',
                required: ['fee_burn_nom', 'fee_burn_denom'],
                properties: {
                    blackhole_addr: { type: 'string', format: 'address' },
                    fee_burn_nom: { type: 'integer', format: 'int64' },
                    fee_burn_denom: { type: 'integer', format: 'int64' }
                }
            },
            '6': {
                type: 'object',
                required: ['mint_new_price', 'mint_add_price'],
                properties: {
                    mint_new_price: { type: 'integer', format: 'int64' },
                    mint_add_price: { type: 'integer', format: 'int64' }
                }
            },
            '7': {
                type: 'object',
                required: ['currencies'],
                properties: {
                    currencies: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['currency_id', 'amount'],
                            properties: {
                                currency_id: { type: 'integer', format: 'int64' },
                                amount: { type: 'string' }
                            }
                        }
                    }
                }
            },
            '8': {
                type: 'object',
                required: ['version', 'capabilities'],
                properties: {
                    version: { type: 'integer', format: 'int64' },
                    capabilities: { type: 'integer', format: 'int64' }
                }
            },
            '9': {
                type: 'object',
                required: ['mandatory_params'],
                properties: {
                    mandatory_params: { type: 'array', items: { type: 'integer', format: 'int32' } }
                }
            },
            '10': {
                type: 'object',
                required: ['critical_params'],
                properties: {
                    critical_params: { type: 'array', items: { type: 'integer', format: 'int32' } }
                }
            },
            '11': {
                type: 'object',
                required: ['normal_params', 'critical_params'],
                properties: {
                    normal_params: { $ref: '#/components/schemas/ConfigProposalSetup' },
                    critical_params: { $ref: '#/components/schemas/ConfigProposalSetup' }
                }
            },
            '12': {
                type: 'object',
                required: ['workchains'],
                properties: {
                    workchains: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/WorkchainDescr' }
                    }
                }
            },
            '13': {
                type: 'object',
                required: ['deposit', 'bit_price', 'cell_price'],
                properties: {
                    deposit: { type: 'integer', format: 'int64' },
                    bit_price: { type: 'integer', format: 'int64' },
                    cell_price: { type: 'integer', format: 'int64' }
                }
            },
            '14': {
                type: 'object',
                required: ['masterchain_block_fee', 'basechain_block_fee'],
                properties: {
                    masterchain_block_fee: { type: 'integer', format: 'int64' },
                    basechain_block_fee: { type: 'integer', format: 'int64' }
                }
            },
            '15': {
                type: 'object',
                required: [
                    'validators_elected_for',
                    'elections_start_before',
                    'elections_end_before',
                    'stake_held_for'
                ],
                properties: {
                    validators_elected_for: { type: 'integer', format: 'int64' },
                    elections_start_before: { type: 'integer', format: 'int64' },
                    elections_end_before: { type: 'integer', format: 'int64' },
                    stake_held_for: { type: 'integer', format: 'int64' }
                }
            },
            '16': {
                type: 'object',
                required: ['max_validators', 'max_main_validators', 'min_validators'],
                properties: {
                    max_validators: { type: 'integer' },
                    max_main_validators: { type: 'integer' },
                    min_validators: { type: 'integer' }
                }
            },
            '17': {
                type: 'object',
                required: ['min_stake', 'max_stake', 'min_total_stake', 'max_stake_factor'],
                properties: {
                    min_stake: { type: 'string' },
                    max_stake: { type: 'string' },
                    min_total_stake: { type: 'string' },
                    max_stake_factor: { type: 'integer', format: 'int64' }
                }
            },
            '18': {
                type: 'object',
                required: ['storage_prices'],
                properties: {
                    storage_prices: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: [
                                'utime_since',
                                'bit_price_ps',
                                'cell_price_ps',
                                'mc_bit_price_ps',
                                'mc_cell_price_ps'
                            ],
                            properties: {
                                utime_since: { type: 'integer', format: 'int64' },
                                bit_price_ps: { type: 'integer', format: 'int64' },
                                cell_price_ps: { type: 'integer', format: 'int64' },
                                mc_bit_price_ps: { type: 'integer', format: 'int64' },
                                mc_cell_price_ps: { type: 'integer', format: 'int64' }
                            }
                        }
                    }
                }
            },
            '20': {
                type: 'object',
                required: ['gas_limits_prices'],
                properties: { gas_limits_prices: { $ref: '#/components/schemas/GasLimitPrices' } }
            },
            '21': {
                type: 'object',
                required: ['gas_limits_prices'],
                properties: { gas_limits_prices: { $ref: '#/components/schemas/GasLimitPrices' } }
            },
            '22': {
                type: 'object',
                required: ['block_limits'],
                properties: { block_limits: { $ref: '#/components/schemas/BlockLimits' } }
            },
            '23': {
                type: 'object',
                required: ['block_limits'],
                properties: { block_limits: { $ref: '#/components/schemas/BlockLimits' } }
            },
            '24': {
                type: 'object',
                required: ['msg_forward_prices'],
                properties: {
                    msg_forward_prices: { $ref: '#/components/schemas/MsgForwardPrices' }
                }
            },
            '25': {
                type: 'object',
                required: ['msg_forward_prices'],
                properties: {
                    msg_forward_prices: { $ref: '#/components/schemas/MsgForwardPrices' }
                }
            },
            '28': {
                type: 'object',
                required: [
                    'mc_catchain_lifetime',
                    'shard_catchain_lifetime',
                    'shard_validators_lifetime',
                    'shard_validators_num'
                ],
                properties: {
                    mc_catchain_lifetime: { type: 'integer', format: 'int64' },
                    shard_catchain_lifetime: { type: 'integer', format: 'int64' },
                    shard_validators_lifetime: { type: 'integer', format: 'int64' },
                    shard_validators_num: { type: 'integer', format: 'int64' },
                    flags: { type: 'integer', format: 'int' },
                    shuffle_mc_validators: { type: 'boolean' }
                }
            },
            '29': {
                type: 'object',
                required: [
                    'round_candidates',
                    'next_candidate_delay_ms',
                    'consensus_timeout_ms',
                    'fast_attempts',
                    'attempt_duration',
                    'catchain_max_deps',
                    'max_block_bytes',
                    'max_collated_bytes'
                ],
                properties: {
                    flags: { type: 'integer', format: 'int' },
                    new_catchain_ids: { type: 'boolean' },
                    round_candidates: { type: 'integer', format: 'int64' },
                    next_candidate_delay_ms: { type: 'integer', format: 'int64' },
                    consensus_timeout_ms: { type: 'integer', format: 'int64' },
                    fast_attempts: { type: 'integer', format: 'int64' },
                    attempt_duration: { type: 'integer', format: 'int64' },
                    catchain_max_deps: { type: 'integer', format: 'int64' },
                    max_block_bytes: { type: 'integer', format: 'int64' },
                    max_collated_bytes: { type: 'integer', format: 'int64' },
                    proto_version: { type: 'integer', format: 'int64' },
                    catchain_max_blocks_coeff: { type: 'integer', format: 'int64' }
                }
            },
            '31': {
                type: 'object',
                required: ['fundamental_smc_addr'],
                properties: {
                    fundamental_smc_addr: {
                        type: 'array',
                        items: { type: 'string', format: 'address' }
                    }
                }
            },
            '32': { $ref: '#/components/schemas/ValidatorsSet' },
            '33': { $ref: '#/components/schemas/ValidatorsSet' },
            '34': { $ref: '#/components/schemas/ValidatorsSet' },
            '35': { $ref: '#/components/schemas/ValidatorsSet' },
            '36': { $ref: '#/components/schemas/ValidatorsSet' },
            '37': { $ref: '#/components/schemas/ValidatorsSet' },
            '40': {
                type: 'object',
                required: ['misbehaviour_punishment_config'],
                properties: {
                    misbehaviour_punishment_config: {
                        $ref: '#/components/schemas/MisbehaviourPunishmentConfig'
                    }
                }
            },
            '43': {
                type: 'object',
                required: ['size_limits_config'],
                properties: {
                    size_limits_config: { $ref: '#/components/schemas/SizeLimitsConfig' }
                }
            },
            '44': {
                type: 'object',
                required: ['accounts', 'suspended_until'],
                properties: {
                    accounts: { type: 'array', items: { type: 'string', format: 'address' } },
                    suspended_until: { type: 'integer' }
                }
            },
            '71': {
                type: 'object',
                required: ['oracle_bridge_params'],
                properties: {
                    oracle_bridge_params: { $ref: '#/components/schemas/OracleBridgeParams' }
                }
            },
            '72': {
                type: 'object',
                required: ['oracle_bridge_params'],
                properties: {
                    oracle_bridge_params: { $ref: '#/components/schemas/OracleBridgeParams' }
                }
            },
            '73': {
                type: 'object',
                required: ['oracle_bridge_params'],
                properties: {
                    oracle_bridge_params: { $ref: '#/components/schemas/OracleBridgeParams' }
                }
            },
            '79': {
                type: 'object',
                required: ['jetton_bridge_params'],
                properties: {
                    jetton_bridge_params: { $ref: '#/components/schemas/JettonBridgeParams' }
                }
            },
            '81': {
                type: 'object',
                required: ['jetton_bridge_params'],
                properties: {
                    jetton_bridge_params: { $ref: '#/components/schemas/JettonBridgeParams' }
                }
            },
            '82': {
                type: 'object',
                required: ['jetton_bridge_params'],
                properties: {
                    jetton_bridge_params: { $ref: '#/components/schemas/JettonBridgeParams' }
                }
            },
            raw: { type: 'string', format: 'cell' }
        }
    },
    '#/components/schemas/DomainNames': {
        type: 'object',
        required: ['domains'],
        properties: { domains: { type: 'array', items: { type: 'string' } } }
    },
    '#/components/schemas/DomainBid': {
        type: 'object',
        required: ['success', 'value', 'txTime', 'bidder', 'txHash'],
        properties: {
            success: { type: 'boolean', default: false },
            value: { type: 'integer', format: 'int64' },
            txTime: { type: 'integer', format: 'int64' },
            txHash: { type: 'string' },
            bidder: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/DomainBids': {
        type: 'object',
        required: ['data'],
        properties: { data: { type: 'array', items: { $ref: '#/components/schemas/DomainBid' } } }
    },
    '#/components/schemas/JettonVerificationType': {
        type: 'string',
        enum: ['whitelist', 'blacklist', 'none']
    },
    '#/components/schemas/JettonPreview': {
        type: 'object',
        required: ['address', 'name', 'symbol', 'decimals', 'verification', 'image'],
        properties: {
            address: { type: 'string', format: 'address' },
            name: { type: 'string' },
            symbol: { type: 'string' },
            decimals: { type: 'integer' },
            image: { type: 'string' },
            verification: { $ref: '#/components/schemas/JettonVerificationType' },
            custom_payload_api_uri: { type: 'string' }
        }
    },
    '#/components/schemas/JettonBalance': {
        type: 'object',
        required: ['balance', 'wallet_address', 'jetton'],
        properties: {
            balance: { type: 'string' },
            price: { $ref: '#/components/schemas/TokenRates' },
            wallet_address: { $ref: '#/components/schemas/AccountAddress' },
            jetton: { $ref: '#/components/schemas/JettonPreview' },
            extensions: { type: 'array', items: { type: 'string' } },
            lock: {
                type: 'object',
                required: ['amount', 'till'],
                properties: {
                    amount: { type: 'string' },
                    till: { type: 'integer', format: 'int64' }
                }
            }
        }
    },
    '#/components/schemas/JettonsBalances': {
        type: 'object',
        required: ['balances'],
        properties: {
            balances: { type: 'array', items: { $ref: '#/components/schemas/JettonBalance' } }
        }
    },
    '#/components/schemas/Price': {
        type: 'object',
        required: ['value', 'token_name'],
        properties: { value: { type: 'string' }, token_name: { type: 'string' } }
    },
    '#/components/schemas/ImagePreview': {
        type: 'object',
        required: ['resolution', 'url'],
        properties: { resolution: { type: 'string' }, url: { type: 'string' } }
    },
    '#/components/schemas/NftApprovedBy': {
        type: 'array',
        items: { type: 'string', enum: ['getgems', 'tonkeeper', 'ton.diamonds'] }
    },
    '#/components/schemas/TrustType': {
        type: 'string',
        enum: ['whitelist', 'graylist', 'blacklist', 'none']
    },
    '#/components/schemas/Sale': {
        type: 'object',
        required: ['address', 'market', 'price'],
        properties: {
            address: { type: 'string', format: 'address' },
            market: { $ref: '#/components/schemas/AccountAddress' },
            owner: { $ref: '#/components/schemas/AccountAddress' },
            price: { $ref: '#/components/schemas/Price' }
        }
    },
    '#/components/schemas/NftItem': {
        type: 'object',
        required: ['address', 'index', 'verified', 'metadata', 'approved_by', 'trust'],
        properties: {
            address: { type: 'string', format: 'address' },
            index: { type: 'integer', format: 'int64' },
            owner: { $ref: '#/components/schemas/AccountAddress' },
            collection: {
                type: 'object',
                required: ['address', 'name', 'description'],
                properties: {
                    address: { type: 'string', format: 'address' },
                    name: { type: 'string' },
                    description: { type: 'string' }
                }
            },
            verified: { type: 'boolean' },
            metadata: { type: 'object', additionalProperties: true },
            sale: { $ref: '#/components/schemas/Sale' },
            previews: { type: 'array', items: { $ref: '#/components/schemas/ImagePreview' } },
            dns: { type: 'string' },
            approved_by: { $ref: '#/components/schemas/NftApprovedBy' },
            include_cnft: { type: 'boolean' },
            trust: { $ref: '#/components/schemas/TrustType' }
        }
    },
    '#/components/schemas/NftItems': {
        type: 'object',
        required: ['nft_items'],
        properties: {
            nft_items: { type: 'array', items: { $ref: '#/components/schemas/NftItem' } }
        }
    },
    '#/components/schemas/Multisigs': {
        type: 'object',
        required: ['multisigs'],
        properties: {
            multisigs: { type: 'array', items: { $ref: '#/components/schemas/Multisig' } }
        }
    },
    '#/components/schemas/Multisig': {
        type: 'object',
        required: ['address', 'seqno', 'threshold', 'signers', 'proposers', 'orders'],
        properties: {
            address: { type: 'string', format: 'address' },
            seqno: { type: 'integer', format: 'int64' },
            threshold: { type: 'integer', format: 'int32' },
            signers: { type: 'array', items: { type: 'string', format: 'address' } },
            proposers: { type: 'array', items: { type: 'string', format: 'address' } },
            orders: { type: 'array', items: { $ref: '#/components/schemas/MultisigOrder' } }
        }
    },
    '#/components/schemas/MultisigOrder': {
        type: 'object',
        required: [
            'address',
            'order_seqno',
            'threshold',
            'sent_for_execution',
            'signers',
            'approvals_num',
            'expiration_date',
            'risk',
            'creation_date',
            'signed_by'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            order_seqno: { type: 'integer', format: 'int64' },
            threshold: { type: 'integer', format: 'int32' },
            sent_for_execution: { type: 'boolean' },
            signers: { type: 'array', items: { type: 'string', format: 'address' } },
            approvals_num: { type: 'integer', format: 'int32' },
            expiration_date: { type: 'integer', format: 'int64' },
            risk: { $ref: '#/components/schemas/Risk' },
            creation_date: { type: 'integer', format: 'int64' },
            signed_by: { type: 'array', items: { type: 'string', format: 'address' } }
        }
    },
    '#/components/schemas/Refund': {
        type: 'object',
        required: ['type', 'origin'],
        properties: {
            type: { type: 'string', enum: ['DNS.ton', 'DNS.tg', 'GetGems'] },
            origin: { type: 'string' }
        }
    },
    '#/components/schemas/ValueFlow': {
        type: 'object',
        required: ['account', 'ton', 'fees'],
        properties: {
            account: { $ref: '#/components/schemas/AccountAddress' },
            ton: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            fees: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            jettons: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['account', 'quantity', 'jetton'],
                    properties: {
                        account: { $ref: '#/components/schemas/AccountAddress' },
                        jetton: { $ref: '#/components/schemas/JettonPreview' },
                        quantity: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
                    }
                }
            }
        }
    },
    '#/components/schemas/Action': {
        type: 'object',
        required: ['type', 'status', 'simple_preview', 'base_transactions'],
        properties: {
            type: {
                type: 'string',
                enum: [
                    'TonTransfer',
                    'JettonTransfer',
                    'JettonBurn',
                    'JettonMint',
                    'NftItemTransfer',
                    'ContractDeploy',
                    'Subscribe',
                    'UnSubscribe',
                    'AuctionBid',
                    'NftPurchase',
                    'DepositStake',
                    'WithdrawStake',
                    'WithdrawStakeRequest',
                    'JettonSwap',
                    'SmartContractExec',
                    'ElectionsRecoverStake',
                    'ElectionsDepositStake',
                    'DomainRenew',
                    'InscriptionTransfer',
                    'InscriptionMint',
                    'Unknown'
                ]
            },
            status: { type: 'string', enum: ['ok', 'failed'] },
            TonTransfer: { $ref: '#/components/schemas/TonTransferAction' },
            ContractDeploy: { $ref: '#/components/schemas/ContractDeployAction' },
            JettonTransfer: { $ref: '#/components/schemas/JettonTransferAction' },
            JettonBurn: { $ref: '#/components/schemas/JettonBurnAction' },
            JettonMint: { $ref: '#/components/schemas/JettonMintAction' },
            NftItemTransfer: { $ref: '#/components/schemas/NftItemTransferAction' },
            Subscribe: { $ref: '#/components/schemas/SubscriptionAction' },
            UnSubscribe: { $ref: '#/components/schemas/UnSubscriptionAction' },
            AuctionBid: { $ref: '#/components/schemas/AuctionBidAction' },
            NftPurchase: { $ref: '#/components/schemas/NftPurchaseAction' },
            DepositStake: { $ref: '#/components/schemas/DepositStakeAction' },
            WithdrawStake: { $ref: '#/components/schemas/WithdrawStakeAction' },
            WithdrawStakeRequest: { $ref: '#/components/schemas/WithdrawStakeRequestAction' },
            ElectionsDepositStake: { $ref: '#/components/schemas/ElectionsDepositStakeAction' },
            ElectionsRecoverStake: { $ref: '#/components/schemas/ElectionsRecoverStakeAction' },
            JettonSwap: { $ref: '#/components/schemas/JettonSwapAction' },
            SmartContractExec: { $ref: '#/components/schemas/SmartContractAction' },
            DomainRenew: { $ref: '#/components/schemas/DomainRenewAction' },
            InscriptionTransfer: { $ref: '#/components/schemas/InscriptionTransferAction' },
            InscriptionMint: { $ref: '#/components/schemas/InscriptionMintAction' },
            simple_preview: { $ref: '#/components/schemas/ActionSimplePreview' },
            base_transactions: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/TonTransferAction': {
        type: 'object',
        required: ['sender', 'recipient', 'amount'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            comment: { type: 'string' },
            encrypted_comment: { $ref: '#/components/schemas/EncryptedComment' },
            refund: { $ref: '#/components/schemas/Refund' }
        }
    },
    '#/components/schemas/SmartContractAction': {
        type: 'object',
        required: ['executor', 'contract', 'ton_attached', 'operation'],
        properties: {
            executor: { $ref: '#/components/schemas/AccountAddress' },
            contract: { $ref: '#/components/schemas/AccountAddress' },
            ton_attached: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            operation: { type: 'string' },
            payload: { type: 'string' },
            refund: { $ref: '#/components/schemas/Refund' }
        }
    },
    '#/components/schemas/DomainRenewAction': {
        type: 'object',
        required: ['domain', 'contract_address', 'renewer'],
        properties: {
            domain: { type: 'string' },
            contract_address: { type: 'string', format: 'address' },
            renewer: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/InscriptionMintAction': {
        type: 'object',
        required: ['type', 'ticker', 'recipient', 'amount', 'decimals'],
        properties: {
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'string' },
            type: { type: 'string', enum: ['ton20', 'gram20'] },
            ticker: { type: 'string' },
            decimals: { type: 'integer' }
        }
    },
    '#/components/schemas/InscriptionTransferAction': {
        type: 'object',
        required: ['sender', 'recipient', 'amount', 'type', 'ticker', 'decimals'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'string' },
            comment: { type: 'string' },
            type: { type: 'string', enum: ['ton20', 'gram20'] },
            ticker: { type: 'string' },
            decimals: { type: 'integer' }
        }
    },
    '#/components/schemas/NftItemTransferAction': {
        type: 'object',
        required: ['nft'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            nft: { type: 'string' },
            comment: { type: 'string' },
            encrypted_comment: { $ref: '#/components/schemas/EncryptedComment' },
            payload: { type: 'string' },
            refund: { $ref: '#/components/schemas/Refund' }
        }
    },
    '#/components/schemas/JettonTransferAction': {
        type: 'object',
        required: ['amount', 'jetton', 'senders_wallet', 'recipients_wallet'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            senders_wallet: { type: 'string', format: 'address' },
            recipients_wallet: { type: 'string', format: 'address' },
            amount: { type: 'string' },
            comment: { type: 'string' },
            encrypted_comment: { $ref: '#/components/schemas/EncryptedComment' },
            refund: { $ref: '#/components/schemas/Refund' },
            jetton: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/JettonBurnAction': {
        type: 'object',
        required: ['amount', 'jetton', 'sender', 'senders_wallet'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            senders_wallet: { type: 'string', format: 'address' },
            amount: { type: 'string' },
            jetton: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/JettonMintAction': {
        type: 'object',
        required: ['amount', 'jetton', 'recipient', 'recipients_wallet'],
        properties: {
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            recipients_wallet: { type: 'string', format: 'address' },
            amount: { type: 'string' },
            jetton: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/ContractDeployAction': {
        type: 'object',
        required: ['address', 'interfaces'],
        properties: {
            address: { type: 'string', format: 'address' },
            interfaces: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/SubscriptionAction': {
        type: 'object',
        required: ['subscriber', 'subscription', 'beneficiary', 'amount', 'initial'],
        properties: {
            subscriber: { $ref: '#/components/schemas/AccountAddress' },
            subscription: { type: 'string', format: 'address' },
            beneficiary: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            initial: { type: 'boolean' }
        }
    },
    '#/components/schemas/UnSubscriptionAction': {
        type: 'object',
        required: ['subscriber', 'subscription', 'beneficiary'],
        properties: {
            subscriber: { $ref: '#/components/schemas/AccountAddress' },
            subscription: { type: 'string', format: 'address' },
            beneficiary: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/AuctionBidAction': {
        type: 'object',
        required: ['amount', 'bidder', 'auction', 'auction_type'],
        properties: {
            auction_type: { type: 'string', enum: ['DNS.ton', 'DNS.tg', 'NUMBER.tg', 'getgems'] },
            amount: { $ref: '#/components/schemas/Price' },
            nft: { $ref: '#/components/schemas/NftItem' },
            bidder: { $ref: '#/components/schemas/AccountAddress' },
            auction: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/DepositStakeAction': {
        type: 'object',
        required: ['amount', 'staker', 'pool', 'implementation'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            staker: { $ref: '#/components/schemas/AccountAddress' },
            pool: { $ref: '#/components/schemas/AccountAddress' },
            implementation: { $ref: '#/components/schemas/PoolImplementationType' }
        }
    },
    '#/components/schemas/WithdrawStakeAction': {
        type: 'object',
        required: ['amount', 'staker', 'pool', 'implementation'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            staker: { $ref: '#/components/schemas/AccountAddress' },
            pool: { $ref: '#/components/schemas/AccountAddress' },
            implementation: { $ref: '#/components/schemas/PoolImplementationType' }
        }
    },
    '#/components/schemas/WithdrawStakeRequestAction': {
        type: 'object',
        required: ['staker', 'pool', 'implementation'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            staker: { $ref: '#/components/schemas/AccountAddress' },
            pool: { $ref: '#/components/schemas/AccountAddress' },
            implementation: { $ref: '#/components/schemas/PoolImplementationType' }
        }
    },
    '#/components/schemas/ElectionsRecoverStakeAction': {
        type: 'object',
        required: ['amount', 'staker'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            staker: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/ElectionsDepositStakeAction': {
        type: 'object',
        required: ['amount', 'staker'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            staker: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/JettonSwapAction': {
        type: 'object',
        required: ['dex', 'amount_in', 'amount_out', 'user_wallet', 'router'],
        properties: {
            dex: { type: 'string', enum: ['stonfi', 'dedust', 'megatonfi'] },
            amount_in: { type: 'string' },
            amount_out: { type: 'string' },
            ton_in: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            ton_out: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            user_wallet: { $ref: '#/components/schemas/AccountAddress' },
            router: { $ref: '#/components/schemas/AccountAddress' },
            jetton_master_in: { $ref: '#/components/schemas/JettonPreview' },
            jetton_master_out: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/NftPurchaseAction': {
        type: 'object',
        required: ['amount', 'seller', 'buyer', 'auction_type', 'nft'],
        properties: {
            auction_type: { type: 'string', enum: ['DNS.ton', 'DNS.tg', 'NUMBER.tg', 'getgems'] },
            amount: { $ref: '#/components/schemas/Price' },
            nft: { $ref: '#/components/schemas/NftItem' },
            seller: { $ref: '#/components/schemas/AccountAddress' },
            buyer: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/ActionSimplePreview': {
        type: 'object',
        required: ['name', 'description', 'accounts'],
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            action_image: { type: 'string' },
            value: { type: 'string' },
            value_image: { type: 'string' },
            accounts: { type: 'array', items: { $ref: '#/components/schemas/AccountAddress' } }
        }
    },
    '#/components/schemas/AccountEvent': {
        type: 'object',
        required: [
            'event_id',
            'timestamp',
            'actions',
            'account',
            'is_scam',
            'lt',
            'in_progress',
            'extra'
        ],
        properties: {
            event_id: { type: 'string' },
            account: { $ref: '#/components/schemas/AccountAddress' },
            timestamp: { type: 'integer', format: 'int64' },
            actions: { type: 'array', items: { $ref: '#/components/schemas/Action' } },
            is_scam: { type: 'boolean' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            in_progress: { type: 'boolean' },
            extra: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/AccountEvents': {
        type: 'object',
        required: ['events', 'next_from'],
        properties: {
            events: { type: 'array', items: { $ref: '#/components/schemas/AccountEvent' } },
            next_from: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/TraceID': {
        type: 'object',
        required: ['id', 'utime'],
        properties: { id: { type: 'string' }, utime: { type: 'integer', format: 'int64' } }
    },
    '#/components/schemas/TraceIDs': {
        type: 'object',
        required: ['traces'],
        properties: { traces: { type: 'array', items: { $ref: '#/components/schemas/TraceID' } } }
    },
    '#/components/schemas/ApyHistory': {
        type: 'object',
        required: ['apy', 'time'],
        properties: { apy: { type: 'number' }, time: { type: 'integer' } }
    },
    '#/components/schemas/Subscription': {
        type: 'object',
        required: [
            'address',
            'wallet_address',
            'beneficiary_address',
            'amount',
            'period',
            'start_time',
            'timeout',
            'last_payment_time',
            'last_request_time',
            'subscription_id',
            'failed_attempts'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            wallet_address: { type: 'string', format: 'address' },
            beneficiary_address: { type: 'string', format: 'address' },
            amount: { type: 'integer', format: 'int64' },
            period: { type: 'integer', format: 'int64' },
            start_time: { type: 'integer', format: 'int64' },
            timeout: { type: 'integer', format: 'int64' },
            last_payment_time: { type: 'integer', format: 'int64' },
            last_request_time: { type: 'integer', format: 'int64' },
            subscription_id: { type: 'integer', format: 'int64' },
            failed_attempts: { type: 'integer', format: 'int32' }
        }
    },
    '#/components/schemas/Subscriptions': {
        type: 'object',
        required: ['subscriptions'],
        properties: {
            subscriptions: { type: 'array', items: { $ref: '#/components/schemas/Subscription' } }
        }
    },
    '#/components/schemas/Auction': {
        type: 'object',
        required: ['domain', 'owner', 'price', 'bids', 'date'],
        properties: {
            domain: { type: 'string' },
            owner: { type: 'string', format: 'address' },
            price: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            bids: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            date: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/Auctions': {
        type: 'object',
        required: ['data', 'total'],
        properties: {
            data: { type: 'array', items: { $ref: '#/components/schemas/Auction' } },
            total: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/WalletDNS': {
        type: 'object',
        required: [
            'address',
            'is_wallet',
            'has_method_pubkey',
            'has_method_seqno',
            'names',
            'account'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            account: { $ref: '#/components/schemas/AccountAddress' },
            is_wallet: { type: 'boolean' },
            has_method_pubkey: { type: 'boolean' },
            has_method_seqno: { type: 'boolean' },
            names: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/DomainInfo': {
        type: 'object',
        required: ['name'],
        properties: {
            name: { type: 'string' },
            expiring_at: { type: 'integer', format: 'int64' },
            item: { $ref: '#/components/schemas/NftItem' }
        }
    },
    '#/components/schemas/DnsRecord': {
        type: 'object',
        required: ['sites'],
        properties: {
            wallet: { $ref: '#/components/schemas/WalletDNS' },
            next_resolver: { type: 'string', format: 'address' },
            sites: { type: 'array', items: { type: 'string' } },
            storage: { type: 'string' }
        }
    },
    '#/components/schemas/NftCollection': {
        type: 'object',
        required: ['address', 'next_item_index', 'raw_collection_content', 'approved_by'],
        properties: {
            address: { type: 'string', format: 'address' },
            next_item_index: { type: 'integer', format: 'int64' },
            owner: { $ref: '#/components/schemas/AccountAddress' },
            raw_collection_content: { type: 'string', format: 'cell' },
            metadata: { type: 'object', additionalProperties: true },
            previews: { type: 'array', items: { $ref: '#/components/schemas/ImagePreview' } },
            approved_by: { $ref: '#/components/schemas/NftApprovedBy' }
        }
    },
    '#/components/schemas/NftCollections': {
        type: 'object',
        required: ['nft_collections'],
        properties: {
            nft_collections: {
                type: 'array',
                items: { $ref: '#/components/schemas/NftCollection' }
            }
        }
    },
    '#/components/schemas/Trace': {
        type: 'object',
        required: ['transaction', 'interfaces'],
        properties: {
            transaction: { $ref: '#/components/schemas/Transaction' },
            interfaces: { type: 'array', items: { type: 'string' } },
            children: { type: 'array', items: { $ref: '#/components/schemas/Trace' } },
            emulated: { type: 'boolean' }
        }
    },
    '#/components/schemas/MessageConsequences': {
        type: 'object',
        required: ['trace', 'risk', 'event'],
        properties: {
            trace: { $ref: '#/components/schemas/Trace' },
            risk: { $ref: '#/components/schemas/Risk' },
            event: { $ref: '#/components/schemas/AccountEvent' }
        }
    },
    '#/components/schemas/Risk': {
        type: 'object',
        required: ['transfer_all_remaining_balance', 'ton', 'jettons', 'nfts'],
        properties: {
            transfer_all_remaining_balance: { type: 'boolean' },
            ton: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            jettons: { type: 'array', items: { $ref: '#/components/schemas/JettonQuantity' } },
            nfts: { type: 'array', items: { $ref: '#/components/schemas/NftItem' } }
        }
    },
    '#/components/schemas/JettonQuantity': {
        type: 'object',
        required: ['quantity', 'wallet_address', 'jetton'],
        properties: {
            quantity: { type: 'string' },
            wallet_address: { $ref: '#/components/schemas/AccountAddress' },
            jetton: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/DecodedMessage': {
        type: 'object',
        required: ['destination', 'destination_wallet_version'],
        properties: {
            destination: { $ref: '#/components/schemas/AccountAddress' },
            destination_wallet_version: { type: 'string' },
            ext_in_msg_decoded: {
                type: 'object',
                properties: {
                    wallet_v3: {
                        type: 'object',
                        required: ['subwallet_id', 'valid_until', 'seqno', 'op', 'raw_messages'],
                        properties: {
                            subwallet_id: { type: 'integer', format: 'int64' },
                            valid_until: { type: 'integer', format: 'int64' },
                            seqno: { type: 'integer', format: 'int64' },
                            raw_messages: {
                                type: 'array',
                                items: { $ref: '#/components/schemas/DecodedRawMessage' }
                            }
                        }
                    },
                    wallet_v4: {
                        type: 'object',
                        required: ['subwallet_id', 'valid_until', 'seqno', 'op', 'raw_messages'],
                        properties: {
                            subwallet_id: { type: 'integer', format: 'int64' },
                            valid_until: { type: 'integer', format: 'int64' },
                            seqno: { type: 'integer', format: 'int64' },
                            op: { type: 'integer', format: 'int32' },
                            raw_messages: {
                                type: 'array',
                                items: { $ref: '#/components/schemas/DecodedRawMessage' }
                            }
                        }
                    },
                    wallet_highload_v2: {
                        type: 'object',
                        required: ['subwallet_id', 'bounded_query_id', 'raw_messages'],
                        properties: {
                            subwallet_id: { type: 'integer', format: 'int64' },
                            bounded_query_id: { type: 'string' },
                            raw_messages: {
                                type: 'array',
                                items: { $ref: '#/components/schemas/DecodedRawMessage' }
                            }
                        }
                    }
                }
            }
        }
    },
    '#/components/schemas/DecodedRawMessage': {
        type: 'object',
        required: ['message', 'mode'],
        properties: {
            message: {
                type: 'object',
                required: ['boc'],
                properties: {
                    boc: { type: 'string', format: 'cell' },
                    decoded_op_name: { type: 'string' },
                    op_code: { type: 'string' },
                    decoded_body: {}
                }
            },
            mode: { type: 'integer' }
        }
    },
    '#/components/schemas/Event': {
        type: 'object',
        required: [
            'event_id',
            'timestamp',
            'actions',
            'value_flow',
            'is_scam',
            'lt',
            'in_progress'
        ],
        properties: {
            event_id: { type: 'string' },
            timestamp: { type: 'integer', format: 'int64' },
            actions: { type: 'array', items: { $ref: '#/components/schemas/Action' } },
            value_flow: { type: 'array', items: { $ref: '#/components/schemas/ValueFlow' } },
            is_scam: { type: 'boolean' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            in_progress: { type: 'boolean' }
        }
    },
    '#/components/schemas/JettonMetadata': {
        type: 'object',
        required: ['address', 'name', 'symbol', 'decimals'],
        properties: {
            address: { type: 'string', format: 'address' },
            name: { type: 'string' },
            symbol: { type: 'string' },
            decimals: { type: 'string' },
            image: { type: 'string' },
            description: { type: 'string' },
            social: { type: 'array', items: { type: 'string' } },
            websites: { type: 'array', items: { type: 'string' } },
            catalogs: { type: 'array', items: { type: 'string' } },
            custom_payload_api_uri: { type: 'string' }
        }
    },
    '#/components/schemas/InscriptionBalances': {
        type: 'object',
        required: ['inscriptions'],
        properties: {
            inscriptions: {
                type: 'array',
                items: { $ref: '#/components/schemas/InscriptionBalance' }
            }
        }
    },
    '#/components/schemas/InscriptionBalance': {
        type: 'object',
        required: ['type', 'ticker', 'balance', 'decimals'],
        properties: {
            type: { type: 'string', enum: ['ton20', 'gram20'] },
            ticker: { type: 'string' },
            balance: { type: 'string' },
            decimals: { type: 'integer' }
        }
    },
    '#/components/schemas/Jettons': {
        type: 'object',
        required: ['jettons'],
        properties: {
            jettons: { type: 'array', items: { $ref: '#/components/schemas/JettonInfo' } }
        }
    },
    '#/components/schemas/JettonInfo': {
        type: 'object',
        required: ['mintable', 'total_supply', 'metadata', 'verification', 'holders_count'],
        properties: {
            mintable: { type: 'boolean' },
            total_supply: { type: 'string' },
            admin: { $ref: '#/components/schemas/AccountAddress' },
            metadata: { $ref: '#/components/schemas/JettonMetadata' },
            verification: { $ref: '#/components/schemas/JettonVerificationType' },
            holders_count: { type: 'integer', format: 'int32' }
        }
    },
    '#/components/schemas/JettonHolders': {
        type: 'object',
        required: ['addresses', 'total'],
        properties: {
            addresses: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['address', 'owner', 'balance'],
                    properties: {
                        address: { type: 'string', format: 'address' },
                        owner: { $ref: '#/components/schemas/AccountAddress' },
                        balance: { type: 'string' }
                    }
                }
            },
            total: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/JettonTransferPayload': {
        type: 'object',
        required: ['payload'],
        properties: { custom_payload: { type: 'string' }, state_init: { type: 'string' } }
    },
    '#/components/schemas/AccountStaking': {
        type: 'object',
        required: ['pools'],
        properties: {
            pools: { type: 'array', items: { $ref: '#/components/schemas/AccountStakingInfo' } }
        }
    },
    '#/components/schemas/AccountStakingInfo': {
        type: 'object',
        required: ['pool', 'amount', 'pending_deposit', 'pending_withdraw', 'ready_withdraw'],
        properties: {
            pool: { type: 'string' },
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            pending_deposit: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            pending_withdraw: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            ready_withdraw: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/PoolInfo': {
        type: 'object',
        required: [
            'address',
            'total_amount',
            'implementation',
            'apy',
            'name',
            'min_stake',
            'cycle_start',
            'cycle_end',
            'verified',
            'current_nominators',
            'max_nominators',
            'nominators_stake',
            'validator_stake'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            name: { type: 'string' },
            total_amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            implementation: { $ref: '#/components/schemas/PoolImplementationType' },
            apy: { type: 'number' },
            min_stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            cycle_start: { type: 'integer', format: 'int64' },
            cycle_end: { type: 'integer', format: 'int64' },
            verified: { type: 'boolean' },
            current_nominators: { type: 'integer' },
            max_nominators: { type: 'integer' },
            liquid_jetton_master: { type: 'string', format: 'address' },
            nominators_stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            validator_stake: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            cycle_length: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/PoolImplementation': {
        type: 'object',
        required: ['name', 'description', 'url', 'socials'],
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            url: { type: 'string' },
            socials: { type: 'array', items: { type: 'string' } }
        }
    },
    '#/components/schemas/StorageProvider': {
        type: 'object',
        required: [
            'address',
            'accept_new_contracts',
            'rate_per_mb_day',
            'max_span',
            'minimal_file_size',
            'maximal_file_size'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            accept_new_contracts: { type: 'boolean' },
            rate_per_mb_day: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            max_span: { type: 'integer', format: 'int64' },
            minimal_file_size: { type: 'integer', format: 'int64' },
            maximal_file_size: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/FoundAccounts': {
        type: 'object',
        required: ['addresses'],
        properties: {
            addresses: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['address', 'name', 'preview'],
                    properties: {
                        address: { type: 'string', format: 'address' },
                        name: { type: 'string' },
                        preview: { type: 'string' }
                    }
                }
            }
        }
    },
    '#/components/schemas/DnsExpiring': {
        type: 'object',
        required: ['items'],
        properties: {
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['expiring_at', 'name'],
                    properties: {
                        expiring_at: { type: 'integer', format: 'int64' },
                        name: { type: 'string' },
                        dns_item: { $ref: '#/components/schemas/NftItem' }
                    }
                }
            }
        }
    },
    '#/components/schemas/AccountInfoByStateInit': {
        type: 'object',
        required: ['public_key', 'address'],
        properties: {
            public_key: { type: 'string' },
            address: { type: 'string', format: 'address' }
        }
    },
    '#/components/schemas/Seqno': {
        type: 'object',
        required: ['seqno'],
        properties: { seqno: { type: 'integer', format: 'int32' } }
    },
    '#/components/schemas/BlockRaw': {
        type: 'object',
        required: ['workchain', 'shard', 'seqno', 'root_hash', 'file_hash'],
        properties: {
            workchain: { type: 'integer', format: 'int32' },
            shard: { type: 'string' },
            seqno: { type: 'integer', format: 'int32' },
            root_hash: { type: 'string' },
            file_hash: { type: 'string' }
        }
    },
    '#/components/schemas/InitStateRaw': {
        type: 'object',
        required: ['workchain', 'root_hash', 'file_hash'],
        properties: {
            workchain: { type: 'integer', format: 'int32' },
            root_hash: { type: 'string' },
            file_hash: { type: 'string' }
        }
    },
    '#/components/schemas/EncryptedComment': {
        type: 'object',
        required: ['encryption_type', 'cipher_text'],
        properties: { encryption_type: { type: 'string' }, cipher_text: { type: 'string' } }
    },
    '#/components/schemas/BlockchainAccountInspect': {
        type: 'object',
        required: ['code', 'code_hash', 'methods'],
        properties: {
            code: { type: 'string', format: 'cell' },
            code_hash: { type: 'string' },
            methods: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['id', 'method'],
                    properties: {
                        id: { type: 'integer', format: 'int64' },
                        method: { type: 'string' }
                    }
                }
            },
            compiler: { type: 'string', enum: ['func'] }
        }
    },
    '#/components/schemas/PoolImplementationType': {
        type: 'string',
        enum: ['whales', 'tf', 'liquidTF']
    },
    '#/components/schemas/TokenRates': {
        type: 'object',
        properties: {
            prices: { type: 'object', additionalProperties: { type: 'number' } },
            diff_24h: { type: 'object', additionalProperties: { type: 'string' } },
            diff_7d: { type: 'object', additionalProperties: { type: 'string' } },
            diff_30d: { type: 'object', additionalProperties: { type: 'string' } }
        }
    },
    '#/components/schemas/MarketTonRates': {
        type: 'object',
        required: ['market', 'usd_price', 'last_date_update'],
        properties: {
            market: { type: 'string' },
            usd_price: { type: 'number' },
            last_date_update: { type: 'integer', format: 'int64' }
        }
    }
};
type ComponentRef = keyof typeof components;

function snakeToCamel(snakeCaseString: string): string {
    return snakeCaseString.replace(/(_\w)/g, match => match[1]?.toUpperCase() ?? '');
}

function camelToSnake(camel: string): string {
    return camel.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
}

function cellParse(src: string): Cell {
    return Cell.fromBase64(Buffer.from(src, 'hex').toString('base64'));
}

function parseHexToBigInt(str: string) {
    return str.startsWith('-') ? BigInt(str.slice(1)) * -1n : BigInt(str);
}

async function prepareResponse<U>(promise: Promise<any>, orSchema?: any): Promise<U> {
    return await promise
        .then(obj => prepareResponseData<U>(obj, orSchema))
        .catch(async error => {
            const errorJson = await error.json();
            const errorMessage =
                typeof errorJson === 'string' ? errorJson : (errorJson?.error as string);
            throw new Error(errorMessage, { cause: error });
        });
}

function prepareResponseData<U>(obj: any, orSchema?: any): U {
    const ref = (orSchema && orSchema.$ref) as ComponentRef | undefined;
    const schema = ref ? components[ref] : orSchema;

    if (Array.isArray(obj)) {
        const itemSchema = schema && schema.items;

        return obj.map(item => prepareResponseData(item, itemSchema)) as unknown as U;
    } else if (schema) {
        if (schema.type === 'string') {
            if (schema.format === 'address') {
                return Address.parse(obj as string) as U;
            }

            if (schema.format === 'cell') {
                return obj && (cellParse(obj as string) as U);
            }

            if (schema['x-js-format'] === 'bigint') {
                return BigInt(obj as string) as U;
            }

            // maybe not used
            if (schema.format === 'cell-base64') {
                return obj && (Cell.fromBase64(obj as string) as U);
            }
        }

        if (schema.type === 'integer') {
            if (schema['x-js-format'] === 'bigint') {
                return BigInt(obj as number) as U;
            }

            return Number(obj as number) as U;
        }

        if (schema.type === 'object') {
            if (schema.format === 'tuple-item') {
                switch (obj.type) {
                    case 'tuple':
                        const itemSchema = schema.properties.tuple.items;
                        return {
                            type: 'tuple',
                            items: obj.tuple.map((item: any) =>
                                prepareResponseData(item, itemSchema)
                            )
                        } as U;
                    case 'num':
                        return {
                            type: 'int',
                            value: parseHexToBigInt(obj.num)
                        } as U;
                    case 'cell':
                        return {
                            type: 'cell',
                            cell: cellParse(obj.cell as string)
                        } as U;
                    case 'slice':
                        return {
                            type: 'slice',
                            slice: cellParse(obj.slice as string)
                        } as U;
                    case 'null':
                        return {
                            type: 'null'
                        } as U;
                    case 'nan':
                        return {
                            type: 'nan'
                        } as U;
                    default:
                        throw new Error(`Unknown tuple item type: ${obj.type}`);
                }
            }
        }
    }

    // case of non tuple-item object
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce(
            (acc, key) => {
                const objSchema = schema?.properties && schema.properties[key];

                const camelCaseKey = snakeToCamel(key);

                acc[camelCaseKey] = prepareResponseData(obj[key], objSchema);
                return acc;
            },
            {} as Record<string, unknown>
        ) as U;
    }

    return obj as unknown as U;
}

function prepareRequestData(data: any, orSchema?: any): any {
    const ref = (orSchema && orSchema.$ref) as ComponentRef | undefined;
    const schema = ref ? components[ref] : orSchema;

    if (Array.isArray(data)) {
        const itemSchema = schema && schema.items;

        return data.map(item => prepareRequestData(item, itemSchema));
    } else if (schema) {
        if (schema.type === 'string') {
            if (schema.format === 'address') {
                return (data as Address).toRawString();
            }

            if (schema.format === 'cell') {
                return (data as Cell).toBoc().toString('hex');
            }

            if (schema.format === 'cell-base64') {
                return (data as Cell).toBoc().toString('base64');
            }

            if (schema['x-js-format'] === 'bigint') {
                return (data as bigint).toString();
            }
        }
    }

    if (data !== null && typeof data === 'object') {
        return Object.keys(data).reduce(
            (acc, key) => {
                const objSchema = schema?.properties && schema.properties[key];

                const snakeCaseKey = camelToSnake(key);

                acc[snakeCaseKey] = prepareRequestData(data[key], objSchema);
                return acc;
            },
            {} as Record<string, unknown>
        );
    }
    return data;
}

/**
 * @title REST api to TON blockchain explorer
 * @version 2.0.0
 * @baseUrl https://tonapi.io
 * @contact Support <support@tonkeeper.com>
 *
 * Provide access to indexed TON blockchain
 */
export class TonApiClient {
    http: HttpClient;

    constructor(apiConfig: ApiConfig = {}) {
        this.http = new HttpClient(apiConfig);
    }

    utilities = {
        /**
         * @description Status
         *
         * @tags Utilities
         * @name Status
         * @request GET:/v2/status
         */
        status: (params: RequestParams = {}) => {
            const req = this.http.request<ServiceStatus, Error>({
                path: `/v2/status`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<ServiceStatus>(req, {
                $ref: '#/components/schemas/ServiceStatus'
            });
        },

        /**
         * @description parse address and display in all formats
         *
         * @tags Utilities
         * @name AddressParse
         * @request GET:/v2/address/{account_id}/parse
         */
        addressParse: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    /**
                     * @format address
                     * @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e"
                     */
                    raw_form: Address;
                    bounceable: {
                        b64: string;
                        b64url: string;
                    };
                    non_bounceable: {
                        b64: string;
                        b64url: string;
                    };
                    given_type: string;
                    test_only: boolean;
                },
                Error
            >({
                path: `/v2/address/${accountId}/parse`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format address
                 * @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e"
                 */
                raw_form: Address;
                bounceable: {
                    b64: string;
                    b64url: string;
                };
                non_bounceable: {
                    b64: string;
                    b64url: string;
                };
                given_type: string;
                test_only: boolean;
            }>(req, {
                type: 'object',
                required: ['raw_form', 'bounceable', 'non_bounceable', 'given_type', 'test_only'],
                properties: {
                    raw_form: { type: 'string', format: 'address' },
                    bounceable: {
                        required: ['b64', 'b64url'],
                        type: 'object',
                        properties: { b64: { type: 'string' }, b64url: { type: 'string' } }
                    },
                    non_bounceable: {
                        required: ['b64', 'b64url'],
                        type: 'object',
                        properties: { b64: { type: 'string' }, b64url: { type: 'string' } }
                    },
                    given_type: { type: 'string' },
                    test_only: { type: 'boolean' }
                }
            });
        }
    };
    blockchain = {
        /**
         * @description Get reduced blockchain blocks data
         *
         * @tags Blockchain
         * @name GetReducedBlockchainBlocks
         * @request GET:/v2/blockchain/reduced/blocks
         */
        getReducedBlockchainBlocks: (
            query: {
                /** @format int64 */
                from: number;
                /** @format int64 */
                to: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<ReducedBlocks, Error>({
                path: `/v2/blockchain/reduced/blocks`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<ReducedBlocks>(req, {
                $ref: '#/components/schemas/ReducedBlocks'
            });
        },

        /**
         * @description Get blockchain block data
         *
         * @tags Blockchain
         * @name GetBlockchainBlock
         * @request GET:/v2/blockchain/blocks/{block_id}
         */
        getBlockchainBlock: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<BlockchainBlock, Error>({
                path: `/v2/blockchain/blocks/${blockId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainBlock>(req, {
                $ref: '#/components/schemas/BlockchainBlock'
            });
        },

        /**
         * @description Get blockchain block shards
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainShards
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
         */
        getBlockchainMasterchainShards: (masterchainSeqno: number, params: RequestParams = {}) => {
            const req = this.http.request<BlockchainBlockShards, Error>({
                path: `/v2/blockchain/masterchain/${masterchainSeqno}/shards`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainBlockShards>(req, {
                $ref: '#/components/schemas/BlockchainBlockShards'
            });
        },

        /**
         * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainBlocks
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
         */
        getBlockchainMasterchainBlocks: (masterchainSeqno: number, params: RequestParams = {}) => {
            const req = this.http.request<BlockchainBlocks, Error>({
                path: `/v2/blockchain/masterchain/${masterchainSeqno}/blocks`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainBlocks>(req, {
                $ref: '#/components/schemas/BlockchainBlocks'
            });
        },

        /**
         * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainTransactions
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
         */
        getBlockchainMasterchainTransactions: (
            masterchainSeqno: number,
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Transactions, Error>({
                path: `/v2/blockchain/masterchain/${masterchainSeqno}/transactions`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Transactions>(req, {
                $ref: '#/components/schemas/Transactions'
            });
        },

        /**
         * @description Get blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
         */
        getBlockchainConfigFromBlock: (masterchainSeqno: number, params: RequestParams = {}) => {
            const req = this.http.request<BlockchainConfig, Error>({
                path: `/v2/blockchain/masterchain/${masterchainSeqno}/config`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainConfig>(req, {
                $ref: '#/components/schemas/BlockchainConfig'
            });
        },

        /**
         * @description Get raw blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
         */
        getRawBlockchainConfigFromBlock: (masterchainSeqno: number, params: RequestParams = {}) => {
            const req = this.http.request<RawBlockchainConfig, Error>({
                path: `/v2/blockchain/masterchain/${masterchainSeqno}/config/raw`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<RawBlockchainConfig>(req, {
                $ref: '#/components/schemas/RawBlockchainConfig'
            });
        },

        /**
         * @description Get transactions from block
         *
         * @tags Blockchain
         * @name GetBlockchainBlockTransactions
         * @request GET:/v2/blockchain/blocks/{block_id}/transactions
         */
        getBlockchainBlockTransactions: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<Transactions, Error>({
                path: `/v2/blockchain/blocks/${blockId}/transactions`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Transactions>(req, {
                $ref: '#/components/schemas/Transactions'
            });
        },

        /**
         * @description Get transaction data
         *
         * @tags Blockchain
         * @name GetBlockchainTransaction
         * @request GET:/v2/blockchain/transactions/{transaction_id}
         */
        getBlockchainTransaction: (transactionId: string, params: RequestParams = {}) => {
            const req = this.http.request<Transaction, Error>({
                path: `/v2/blockchain/transactions/${transactionId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Transaction>(req, { $ref: '#/components/schemas/Transaction' });
        },

        /**
         * @description Get transaction data by message hash
         *
         * @tags Blockchain
         * @name GetBlockchainTransactionByMessageHash
         * @request GET:/v2/blockchain/messages/{msg_id}/transaction
         */
        getBlockchainTransactionByMessageHash: (msgId: string, params: RequestParams = {}) => {
            const req = this.http.request<Transaction, Error>({
                path: `/v2/blockchain/messages/${msgId}/transaction`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Transaction>(req, { $ref: '#/components/schemas/Transaction' });
        },

        /**
         * @description Get blockchain validators
         *
         * @tags Blockchain
         * @name GetBlockchainValidators
         * @request GET:/v2/blockchain/validators
         */
        getBlockchainValidators: (params: RequestParams = {}) => {
            const req = this.http.request<Validators, Error>({
                path: `/v2/blockchain/validators`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Validators>(req, { $ref: '#/components/schemas/Validators' });
        },

        /**
         * @description Get last known masterchain block
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainHead
         * @request GET:/v2/blockchain/masterchain-head
         */
        getBlockchainMasterchainHead: (params: RequestParams = {}) => {
            const req = this.http.request<BlockchainBlock, Error>({
                path: `/v2/blockchain/masterchain-head`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainBlock>(req, {
                $ref: '#/components/schemas/BlockchainBlock'
            });
        },

        /**
         * @description Get low-level information about an account taken directly from the blockchain.
         *
         * @tags Blockchain
         * @name GetBlockchainRawAccount
         * @request GET:/v2/blockchain/accounts/{account_id}
         */
        getBlockchainRawAccount: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<BlockchainRawAccount, Error>({
                path: `/v2/blockchain/accounts/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainRawAccount>(req, {
                $ref: '#/components/schemas/BlockchainRawAccount'
            });
        },

        /**
         * @description Get account transactions
         *
         * @tags Blockchain
         * @name GetBlockchainAccountTransactions
         * @request GET:/v2/blockchain/accounts/{account_id}/transactions
         */
        getBlockchainAccountTransactions: (
            accountId_Address: Address,
            query?: {
                /**
                 * omit this parameter to get last transactions
                 * @format bigint
                 * @example 39787624000003
                 */
                after_lt?: bigint;
                /**
                 * omit this parameter to get last transactions
                 * @format bigint
                 * @example 39787624000003
                 */
                before_lt?: bigint;
                /**
                 * @format int32
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 100
                 */
                limit?: number;
                /**
                 * used to sort the result-set in ascending or descending order by lt.
                 * @default "desc"
                 */
                sort_order?: 'desc' | 'asc';
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Transactions, Error>({
                path: `/v2/blockchain/accounts/${accountId}/transactions`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<Transactions>(req, {
                $ref: '#/components/schemas/Transactions'
            });
        },

        /**
         * @description Execute get method for account
         *
         * @tags Blockchain
         * @name ExecGetMethodForBlockchainAccount
         * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
         */
        execGetMethodForBlockchainAccount: (
            accountId_Address: Address,
            methodName: string,
            query?: {
                /**
                 * Supported values:
                 * "NaN" for NaN type,
                 * "Null" for Null type,
                 * 10-base digits for tiny int type (Example: 100500),
                 * 0x-prefixed hex digits for int257 (Example: 0xfa01d78381ae32),
                 * all forms of addresses for slice type (Example: 0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e),
                 * single-root base64-encoded BOC for cell (Example: "te6ccgEBAQEAAgAAAA=="),
                 * single-root hex-encoded BOC for slice (Example: b5ee9c72010101010002000000)
                 * @example ["0:9a33970f617bcd71acf2cd28357c067aa31859c02820d8f01d74c88063a8f4d8"]
                 */
                args?: string[];
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<MethodExecutionResult, Error>({
                path: `/v2/blockchain/accounts/${accountId}/methods/${methodName}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<MethodExecutionResult>(req, {
                $ref: '#/components/schemas/MethodExecutionResult'
            });
        },

        /**
         * @description Send message to blockchain
         *
         * @tags Blockchain
         * @name SendBlockchainMessage
         * @request POST:/v2/blockchain/message
         */
        sendBlockchainMessage: (
            data: {
                /** @format cell */
                boc?: Cell;
                /** @maxItems 10 */
                batch?: Cell[];
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<void, Error>({
                path: `/v2/blockchain/message`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    properties: {
                        boc: { type: 'string', format: 'cell' },
                        batch: {
                            type: 'array',
                            maxItems: 10,
                            items: { type: 'string', format: 'cell' }
                        }
                    }
                }),
                ...params
            });

            return prepareResponse<void>(req);
        },

        /**
         * @description Get blockchain config
         *
         * @tags Blockchain
         * @name GetBlockchainConfig
         * @request GET:/v2/blockchain/config
         */
        getBlockchainConfig: (params: RequestParams = {}) => {
            const req = this.http.request<BlockchainConfig, Error>({
                path: `/v2/blockchain/config`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainConfig>(req, {
                $ref: '#/components/schemas/BlockchainConfig'
            });
        },

        /**
         * @description Get raw blockchain config
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfig
         * @request GET:/v2/blockchain/config/raw
         */
        getRawBlockchainConfig: (params: RequestParams = {}) => {
            const req = this.http.request<RawBlockchainConfig, Error>({
                path: `/v2/blockchain/config/raw`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<RawBlockchainConfig>(req, {
                $ref: '#/components/schemas/RawBlockchainConfig'
            });
        },

        /**
         * @description Blockchain account inspect
         *
         * @tags Blockchain
         * @name BlockchainAccountInspect
         * @request GET:/v2/blockchain/accounts/{account_id}/inspect
         */
        blockchainAccountInspect: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<BlockchainAccountInspect, Error>({
                path: `/v2/blockchain/accounts/${accountId}/inspect`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<BlockchainAccountInspect>(req, {
                $ref: '#/components/schemas/BlockchainAccountInspect'
            });
        },

        /**
         * @description Status
         *
         * @tags Utilities
         * @name Status
         * @request GET:/v2/status
         * @deprecated
         */
        status: (requestParams: RequestParams = {}) => {
            const req = this.http.request<ServiceStatus, Error>({
                path: `/v2/status`,
                method: 'GET',
                format: 'json',
                ...requestParams
            });

            return prepareResponse<ServiceStatus>(req, {
                $ref: '#/components/schemas/ServiceStatus'
            });
        }
    };
    accounts = {
        /**
         * @description Get human-friendly information about several accounts without low-level details.
         *
         * @tags Accounts
         * @name GetAccounts
         * @request POST:/v2/accounts/_bulk
         */
        getAccounts: (
            data: {
                accountIds: Address[];
            },
            query?: {
                /** @example "usd" */
                currency?: string;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Accounts, Error>({
                path: `/v2/accounts/_bulk`,
                method: 'POST',
                query: query,
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['accountIds'],
                    properties: {
                        accountIds: { type: 'array', items: { type: 'string', format: 'address' } }
                    }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<Accounts>(req, { $ref: '#/components/schemas/Accounts' });
        },

        /**
         * @description Get human-friendly information about an account without low-level details.
         *
         * @tags Accounts
         * @name GetAccount
         * @request GET:/v2/accounts/{account_id}
         */
        getAccount: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Account, Error>({
                path: `/v2/accounts/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Account>(req, { $ref: '#/components/schemas/Account' });
        },

        /**
         * @description Get account's domains
         *
         * @tags Accounts
         * @name AccountDnsBackResolve
         * @request GET:/v2/accounts/{account_id}/dns/backresolve
         */
        accountDnsBackResolve: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<DomainNames, Error>({
                path: `/v2/accounts/${accountId}/dns/backresolve`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<DomainNames>(req, { $ref: '#/components/schemas/DomainNames' });
        },

        /**
         * @description Get all Jettons balances by owner address
         *
         * @tags Accounts
         * @name GetAccountJettonsBalances
         * @request GET:/v2/accounts/{account_id}/jettons
         */
        getAccountJettonsBalances: (
            accountId_Address: Address,
            query?: {
                /**
                 * accept ton and all possible fiat currencies, separated by commas
                 * @example ["ton","usd","rub"]
                 */
                currencies?: string[];
                /**
                 * comma separated list supported extensions
                 * @example ["custom_payload"]
                 */
                supported_extensions?: string[];
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<JettonsBalances, Error>({
                path: `/v2/accounts/${accountId}/jettons`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<JettonsBalances>(req, {
                $ref: '#/components/schemas/JettonsBalances'
            });
        },

        /**
         * @description Get Jetton balance by owner address
         *
         * @tags Accounts
         * @name GetAccountJettonBalance
         * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}
         */
        getAccountJettonBalance: (
            accountId_Address: Address,
            jettonId_Address: Address,
            query?: {
                /**
                 * accept ton and all possible fiat currencies, separated by commas
                 * @example ["ton","usd","rub"]
                 */
                currencies?: string[];
                /**
                 * comma separated list supported extensions
                 * @example ["custom_payload"]
                 */
                supported_extensions?: string[];
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const jettonId = jettonId_Address.toRawString();
            const req = this.http.request<JettonBalance, Error>({
                path: `/v2/accounts/${accountId}/jettons/${jettonId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<JettonBalance>(req, {
                $ref: '#/components/schemas/JettonBalance'
            });
        },

        /**
         * @description Get the transfer jettons history for account
         *
         * @tags Accounts
         * @name GetAccountJettonsHistory
         * @request GET:/v2/accounts/{account_id}/jettons/history
         */
        getAccountJettonsHistory: (
            accountId_Address: Address,
            query: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @example 100
                 */
                limit: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/accounts/${accountId}/jettons/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description Get the transfer jetton history for account and jetton
         *
         * @tags Accounts
         * @name GetAccountJettonHistoryById
         * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
         */
        getAccountJettonHistoryById: (
            accountId_Address: Address,
            jettonId_Address: Address,
            query: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @example 100
                 */
                limit: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const jettonId = jettonId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/accounts/${accountId}/jettons/${jettonId}/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description Get all NFT items by owner address
         *
         * @tags Accounts
         * @name GetAccountNftItems
         * @request GET:/v2/accounts/{account_id}/nfts
         */
        getAccountNftItems: (
            accountId_Address: Address,
            query?: {
                /**
                 * nft collection
                 * @format address
                 * @example "0:06d811f426598591b32b2c49f29f66c821368e4acb1de16762b04e0174532465"
                 */
                collection?: Address;
                /**
                 * @min 1
                 * @max 1000
                 * @default 1000
                 */
                limit?: number;
                /**
                 * @min 0
                 * @default 0
                 */
                offset?: number;
                /**
                 * Selling nft items in ton implemented usually via transfer items to special selling account. This option enables including items which owned not directly.
                 * @default false
                 */
                indirect_ownership?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<NftItems, Error>({
                path: `/v2/accounts/${accountId}/nfts`,
                method: 'GET',
                query: query && {
                    ...query,
                    collection: query.collection?.toRawString()
                },
                format: 'json',
                ...params
            });

            return prepareResponse<NftItems>(req, { $ref: '#/components/schemas/NftItems' });
        },

        /**
         * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Accounts
         * @name GetAccountEvents
         * @request GET:/v2/accounts/{account_id}/events
         */
        getAccountEvents: (
            accountId_Address: Address,
            query: {
                /**
                 * Show only events that are initiated by this account
                 * @default false
                 */
                initiator?: boolean;
                /**
                 * filter actions where requested account is not real subject (for example sender or receiver jettons)
                 * @default false
                 */
                subject_only?: boolean;
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 100
                 * @example 20
                 */
                limit: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/accounts/${accountId}/events`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description Get event for an account by event_id
         *
         * @tags Accounts
         * @name GetAccountEvent
         * @request GET:/v2/accounts/{account_id}/events/{event_id}
         */
        getAccountEvent: (
            accountId_Address: Address,
            eventId: string,
            query?: {
                /**
                 * filter actions where requested account is not real subject (for example sender or receiver jettons)
                 * @default false
                 */
                subject_only?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvent, Error>({
                path: `/v2/accounts/${accountId}/events/${eventId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvent>(req, {
                $ref: '#/components/schemas/AccountEvent'
            });
        },

        /**
         * @description Get traces for account
         *
         * @tags Accounts
         * @name GetAccountTraces
         * @request GET:/v2/accounts/{account_id}/traces
         */
        getAccountTraces: (
            accountId_Address: Address,
            query?: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 100
                 */
                limit?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<TraceIDs, Error>({
                path: `/v2/accounts/${accountId}/traces`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<TraceIDs>(req, { $ref: '#/components/schemas/TraceIDs' });
        },

        /**
         * @description Get all subscriptions by wallet address
         *
         * @tags Accounts
         * @name GetAccountSubscriptions
         * @request GET:/v2/accounts/{account_id}/subscriptions
         */
        getAccountSubscriptions: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Subscriptions, Error>({
                path: `/v2/accounts/${accountId}/subscriptions`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Subscriptions>(req, {
                $ref: '#/components/schemas/Subscriptions'
            });
        },

        /**
         * @description Update internal cache for a particular account
         *
         * @tags Accounts
         * @name ReindexAccount
         * @request POST:/v2/accounts/{account_id}/reindex
         */
        reindexAccount: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<void, Error>({
                path: `/v2/accounts/${accountId}/reindex`,
                method: 'POST',
                ...params
            });

            return prepareResponse<void>(req);
        },

        /**
         * @description Search by account domain name
         *
         * @tags Accounts
         * @name SearchAccounts
         * @request GET:/v2/accounts/search
         */
        searchAccounts: (
            query: {
                /**
                 * @minLength 3
                 * @maxLength 15
                 */
                name: string;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<FoundAccounts, Error>({
                path: `/v2/accounts/search`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<FoundAccounts>(req, {
                $ref: '#/components/schemas/FoundAccounts'
            });
        },

        /**
         * @description Get expiring account .ton dns
         *
         * @tags Accounts
         * @name GetAccountDnsExpiring
         * @request GET:/v2/accounts/{account_id}/dns/expiring
         */
        getAccountDnsExpiring: (
            accountId_Address: Address,
            query?: {
                /**
                 * number of days before expiration
                 * @min 1
                 * @max 3660
                 */
                period?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<DnsExpiring, Error>({
                path: `/v2/accounts/${accountId}/dns/expiring`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<DnsExpiring>(req, { $ref: '#/components/schemas/DnsExpiring' });
        },

        /**
         * @description Get public key by account id
         *
         * @tags Accounts
         * @name GetAccountPublicKey
         * @request GET:/v2/accounts/{account_id}/publickey
         */
        getAccountPublicKey: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
                    public_key: string;
                },
                Error
            >({
                path: `/v2/accounts/${accountId}/publickey`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
                public_key: string;
            }>(req, {
                type: 'object',
                required: ['public_key'],
                properties: { public_key: { type: 'string' } }
            });
        },

        /**
         * @description Get account's multisigs
         *
         * @tags Accounts
         * @name GetAccountMultisigs
         * @request GET:/v2/accounts/{account_id}/multisigs
         */
        getAccountMultisigs: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Multisigs, Error>({
                path: `/v2/accounts/${accountId}/multisigs`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Multisigs>(req, { $ref: '#/components/schemas/Multisigs' });
        },

        /**
         * @description Get account's balance change
         *
         * @tags Accounts
         * @name GetAccountDiff
         * @request GET:/v2/accounts/{account_id}/diff
         */
        getAccountDiff: (
            accountId_Address: Address,
            query: {
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    /**
                     * @format int64
                     * @example 1000000000
                     */
                    balance_change: number;
                },
                Error
            >({
                path: `/v2/accounts/${accountId}/diff`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format int64
                 * @example 1000000000
                 */
                balance_change: number;
            }>(req, {
                type: 'object',
                required: ['balance_change'],
                properties: { balance_change: { type: 'integer', format: 'int64' } }
            });
        },

        /**
         * @description parse address and display in all formats
         *
         * @tags Utilities
         * @name AddressParse
         * @request GET:/v2/address/{account_id}/parse
         * @deprecated
         */
        addressParse: (accountId_Address: Address, requestParams: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    /**
                     * @format address
                     * @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e"
                     */
                    raw_form: Address;
                    bounceable: {
                        b64: string;
                        b64url: string;
                    };
                    non_bounceable: {
                        b64: string;
                        b64url: string;
                    };
                    given_type: string;
                    test_only: boolean;
                },
                Error
            >({
                path: `/v2/address/${accountId}/parse`,
                method: 'GET',
                format: 'json',
                ...requestParams
            });

            return prepareResponse<{
                /**
                 * @format address
                 * @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e"
                 */
                raw_form: Address;
                bounceable: {
                    b64: string;
                    b64url: string;
                };
                non_bounceable: {
                    b64: string;
                    b64url: string;
                };
                given_type: string;
                test_only: boolean;
            }>(req, {
                type: 'object',
                required: ['raw_form', 'bounceable', 'non_bounceable', 'given_type', 'test_only'],
                properties: {
                    raw_form: { type: 'string', format: 'address' },
                    bounceable: {
                        required: ['b64', 'b64url'],
                        type: 'object',
                        properties: { b64: { type: 'string' }, b64url: { type: 'string' } }
                    },
                    non_bounceable: {
                        required: ['b64', 'b64url'],
                        type: 'object',
                        properties: { b64: { type: 'string' }, b64url: { type: 'string' } }
                    },
                    given_type: { type: 'string' },
                    test_only: { type: 'boolean' }
                }
            });
        }
    };
    nft = {
        /**
         * @description Get the transfer nft history
         *
         * @tags NFT
         * @name GetAccountNftHistory
         * @request GET:/v2/accounts/{account_id}/nfts/history
         */
        getAccountNftHistory: (
            accountId_Address: Address,
            query: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @example 100
                 */
                limit: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/accounts/${accountId}/nfts/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description Get NFT collections
         *
         * @tags NFT
         * @name GetNftCollections
         * @request GET:/v2/nfts/collections
         */
        getNftCollections: (
            query?: {
                /**
                 * @format int32
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 15
                 */
                limit?: number;
                /**
                 * @format int32
                 * @min 0
                 * @default 0
                 * @example 10
                 */
                offset?: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<NftCollections, Error>({
                path: `/v2/nfts/collections`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<NftCollections>(req, {
                $ref: '#/components/schemas/NftCollections'
            });
        },

        /**
         * @description Get NFT collection by collection address
         *
         * @tags NFT
         * @name GetNftCollection
         * @request GET:/v2/nfts/collections/{account_id}
         */
        getNftCollection: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<NftCollection, Error>({
                path: `/v2/nfts/collections/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<NftCollection>(req, {
                $ref: '#/components/schemas/NftCollection'
            });
        },

        /**
         * @description Get NFT items from collection by collection address
         *
         * @tags NFT
         * @name GetItemsFromCollection
         * @request GET:/v2/nfts/collections/{account_id}/items
         */
        getItemsFromCollection: (
            accountId_Address: Address,
            query?: {
                /**
                 * @min 1
                 * @max 1000
                 * @default 1000
                 */
                limit?: number;
                /**
                 * @min 0
                 * @default 0
                 */
                offset?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<NftItems, Error>({
                path: `/v2/nfts/collections/${accountId}/items`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<NftItems>(req, { $ref: '#/components/schemas/NftItems' });
        },

        /**
         * @description Get NFT items by their addresses
         *
         * @tags NFT
         * @name GetNftItemsByAddresses
         * @request POST:/v2/nfts/_bulk
         */
        getNftItemsByAddresses: (
            data: {
                accountIds: Address[];
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<NftItems, Error>({
                path: `/v2/nfts/_bulk`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['accountIds'],
                    properties: {
                        accountIds: { type: 'array', items: { type: 'string', format: 'address' } }
                    }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<NftItems>(req, { $ref: '#/components/schemas/NftItems' });
        },

        /**
         * @description Get NFT item by its address
         *
         * @tags NFT
         * @name GetNftItemByAddress
         * @request GET:/v2/nfts/{account_id}
         */
        getNftItemByAddress: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<NftItem, Error>({
                path: `/v2/nfts/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<NftItem>(req, { $ref: '#/components/schemas/NftItem' });
        },

        /**
         * @description Get the transfer nfts history for account
         *
         * @tags NFT
         * @name GetNftHistoryById
         * @request GET:/v2/nfts/{account_id}/history
         */
        getNftHistoryById: (
            accountId_Address: Address,
            query: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @example 100
                 */
                limit: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/nfts/${accountId}/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        }
    };
    dns = {
        /**
         * @description Get full information about domain name
         *
         * @tags DNS
         * @name GetDnsInfo
         * @request GET:/v2/dns/{domain_name}
         */
        getDnsInfo: (domainName: string, params: RequestParams = {}) => {
            const req = this.http.request<DomainInfo, Error>({
                path: `/v2/dns/${domainName}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<DomainInfo>(req, { $ref: '#/components/schemas/DomainInfo' });
        },

        /**
         * @description DNS resolve for domain name
         *
         * @tags DNS
         * @name DnsResolve
         * @request GET:/v2/dns/{domain_name}/resolve
         */
        dnsResolve: (domainName: string, params: RequestParams = {}) => {
            const req = this.http.request<DnsRecord, Error>({
                path: `/v2/dns/${domainName}/resolve`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<DnsRecord>(req, { $ref: '#/components/schemas/DnsRecord' });
        },

        /**
         * @description Get domain bids
         *
         * @tags DNS
         * @name GetDomainBids
         * @request GET:/v2/dns/{domain_name}/bids
         */
        getDomainBids: (domainName: string, params: RequestParams = {}) => {
            const req = this.http.request<DomainBids, Error>({
                path: `/v2/dns/${domainName}/bids`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<DomainBids>(req, { $ref: '#/components/schemas/DomainBids' });
        },

        /**
         * @description Get all auctions
         *
         * @tags DNS
         * @name GetAllAuctions
         * @request GET:/v2/dns/auctions
         */
        getAllAuctions: (
            query?: {
                /**
                 * domain filter for current auctions "ton" or "t.me"
                 * @example "ton"
                 */
                tld?: string;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Auctions, Error>({
                path: `/v2/dns/auctions`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<Auctions>(req, { $ref: '#/components/schemas/Auctions' });
        }
    };
    traces = {
        /**
         * @description Get the trace by trace ID or hash of any transaction in trace
         *
         * @tags Traces
         * @name GetTrace
         * @request GET:/v2/traces/{trace_id}
         */
        getTrace: (traceId: string, params: RequestParams = {}) => {
            const req = this.http.request<Trace, Error>({
                path: `/v2/traces/${traceId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Trace>(req, { $ref: '#/components/schemas/Trace' });
        }
    };
    events = {
        /**
         * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Events
         * @name GetEvent
         * @request GET:/v2/events/{event_id}
         */
        getEvent: (eventId: string, params: RequestParams = {}) => {
            const req = this.http.request<Event, Error>({
                path: `/v2/events/${eventId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Event>(req, { $ref: '#/components/schemas/Event' });
        }
    };
    inscriptions = {
        /**
         * @description Get all inscriptions by owner address. It's experimental API and can be dropped in the future.
         *
         * @tags Inscriptions
         * @name GetAccountInscriptions
         * @request GET:/v2/experimental/accounts/{account_id}/inscriptions
         */
        getAccountInscriptions: (
            accountId_Address: Address,
            query?: {
                /**
                 * @min 1
                 * @max 1000
                 * @default 1000
                 */
                limit?: number;
                /**
                 * @min 0
                 * @default 0
                 */
                offset?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<InscriptionBalances, Error>({
                path: `/v2/experimental/accounts/${accountId}/inscriptions`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<InscriptionBalances>(req, {
                $ref: '#/components/schemas/InscriptionBalances'
            });
        },

        /**
         * @description Get the transfer inscriptions history for account. It's experimental API and can be dropped in the future.
         *
         * @tags Inscriptions
         * @name GetAccountInscriptionsHistory
         * @request GET:/v2/experimental/accounts/{account_id}/inscriptions/history
         */
        getAccountInscriptionsHistory: (
            accountId_Address: Address,
            query?: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 100
                 */
                limit?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/experimental/accounts/${accountId}/inscriptions/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description Get the transfer inscriptions history for account. It's experimental API and can be dropped in the future.
         *
         * @tags Inscriptions
         * @name GetAccountInscriptionsHistoryByTicker
         * @request GET:/v2/experimental/accounts/{account_id}/inscriptions/{ticker}/history
         */
        getAccountInscriptionsHistoryByTicker: (
            accountId_Address: Address,
            ticker: string,
            query?: {
                /**
                 * omit this parameter to get last events
                 * @format bigint
                 * @example 25758317000002
                 */
                before_lt?: bigint;
                /**
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 100
                 */
                limit?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvents, Error>({
                path: `/v2/experimental/accounts/${accountId}/inscriptions/${ticker}/history`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvents>(req, {
                $ref: '#/components/schemas/AccountEvents'
            });
        },

        /**
         * @description return comment for making operation with inscription. please don't use it if you don't know what you are doing
         *
         * @tags Inscriptions
         * @name GetInscriptionOpTemplate
         * @request GET:/v2/experimental/inscriptions/op-template
         */
        getInscriptionOpTemplate: (
            query: {
                /** @example "ton20" */
                type: 'ton20' | 'gram20';
                destination?: string;
                comment?: string;
                /** @example "transfer" */
                operation: 'transfer';
                /** @example "1000000000" */
                amount: string;
                /** @example "nano" */
                ticker: string;
                /** @example "UQAs87W4yJHlF8mt29ocA4agnMrLsOP69jC1HPyBUjJay7Mg" */
                who: string;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /** @example "comment" */
                    comment: string;
                    /** @example "0:0000000000000" */
                    destination: string;
                },
                Error
            >({
                path: `/v2/experimental/inscriptions/op-template`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example "comment" */
                comment: string;
                /** @example "0:0000000000000" */
                destination: string;
            }>(req, {
                type: 'object',
                required: ['comment', 'destination'],
                properties: { comment: { type: 'string' }, destination: { type: 'string' } }
            });
        }
    };
    jettons = {
        /**
         * @description Get a list of all indexed jetton masters in the blockchain.
         *
         * @tags Jettons
         * @name GetJettons
         * @request GET:/v2/jettons
         */
        getJettons: (
            query?: {
                /**
                 * @format int32
                 * @min 1
                 * @max 1000
                 * @default 100
                 * @example 15
                 */
                limit?: number;
                /**
                 * @format int32
                 * @min 0
                 * @default 0
                 * @example 10
                 */
                offset?: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Jettons, Error>({
                path: `/v2/jettons`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<Jettons>(req, { $ref: '#/components/schemas/Jettons' });
        },

        /**
         * @description Get jetton metadata by jetton master address
         *
         * @tags Jettons
         * @name GetJettonInfo
         * @request GET:/v2/jettons/{account_id}
         */
        getJettonInfo: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<JettonInfo, Error>({
                path: `/v2/jettons/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<JettonInfo>(req, { $ref: '#/components/schemas/JettonInfo' });
        },

        /**
         * @description Get jetton's holders
         *
         * @tags Jettons
         * @name GetJettonHolders
         * @request GET:/v2/jettons/{account_id}/holders
         */
        getJettonHolders: (
            accountId_Address: Address,
            query?: {
                /**
                 * @min 1
                 * @max 1000
                 * @default 1000
                 */
                limit?: number;
                /**
                 * @min 0
                 * @default 0
                 */
                offset?: number;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<JettonHolders, Error>({
                path: `/v2/jettons/${accountId}/holders`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<JettonHolders>(req, {
                $ref: '#/components/schemas/JettonHolders'
            });
        },

        /**
         * @description Get jetton's custom payload and state init required for transfer
         *
         * @tags Jettons
         * @name GetJettonTransferPayload
         * @request GET:/v2/jettons/{jetton_id}/transfer/{account_id}/payload
         */
        getJettonTransferPayload: (
            accountId_Address: Address,
            jettonId_Address: Address,
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const jettonId = jettonId_Address.toRawString();
            const req = this.http.request<JettonTransferPayload, Error>({
                path: `/v2/jettons/${jettonId}/transfer/${accountId}/payload`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<JettonTransferPayload>(req, {
                $ref: '#/components/schemas/JettonTransferPayload'
            });
        },

        /**
         * @description Get only jetton transfers in the event
         *
         * @tags Jettons
         * @name GetJettonsEvents
         * @request GET:/v2/events/{event_id}/jettons
         */
        getJettonsEvents: (eventId: string, params: RequestParams = {}) => {
            const req = this.http.request<Event, Error>({
                path: `/v2/events/${eventId}/jettons`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Event>(req, { $ref: '#/components/schemas/Event' });
        }
    };
    staking = {
        /**
         * @description All pools where account participates
         *
         * @tags Staking
         * @name GetAccountNominatorsPools
         * @request GET:/v2/staking/nominator/{account_id}/pools
         */
        getAccountNominatorsPools: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountStaking, Error>({
                path: `/v2/staking/nominator/${accountId}/pools`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<AccountStaking>(req, {
                $ref: '#/components/schemas/AccountStaking'
            });
        },

        /**
         * @description Stacking pool info
         *
         * @tags Staking
         * @name GetStakingPoolInfo
         * @request GET:/v2/staking/pool/{account_id}
         */
        getStakingPoolInfo: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    implementation: PoolImplementation;
                    pool: PoolInfo;
                },
                Error
            >({
                path: `/v2/staking/pool/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                implementation: PoolImplementation;
                pool: PoolInfo;
            }>(req, {
                type: 'object',
                required: ['implementation', 'pool'],
                properties: {
                    implementation: { $ref: '#/components/schemas/PoolImplementation' },
                    pool: { $ref: '#/components/schemas/PoolInfo' }
                }
            });
        },

        /**
         * @description Pool history
         *
         * @tags Staking
         * @name GetStakingPoolHistory
         * @request GET:/v2/staking/pool/{account_id}/history
         */
        getStakingPoolHistory: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    apy: ApyHistory[];
                },
                Error
            >({
                path: `/v2/staking/pool/${accountId}/history`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                apy: ApyHistory[];
            }>(req, {
                type: 'object',
                required: ['apy'],
                properties: {
                    apy: { type: 'array', items: { $ref: '#/components/schemas/ApyHistory' } }
                }
            });
        },

        /**
         * @description All pools available in network
         *
         * @tags Staking
         * @name GetStakingPools
         * @request GET:/v2/staking/pools
         */
        getStakingPools: (
            query?: {
                /**
                 * account ID
                 * @format address
                 * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
                 */
                available_for?: Address;
                /**
                 * return also pools not from white list - just compatible by interfaces (maybe dangerous!)
                 * @example false
                 */
                include_unverified?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    pools: PoolInfo[];
                    implementations: Record<string, PoolImplementation>;
                },
                Error
            >({
                path: `/v2/staking/pools`,
                method: 'GET',
                query: query && {
                    ...query,
                    available_for: query.available_for?.toRawString()
                },
                format: 'json',
                ...params
            });

            return prepareResponse<{
                pools: PoolInfo[];
                implementations: Record<string, PoolImplementation>;
            }>(req, {
                type: 'object',
                required: ['pools', 'implementations'],
                properties: {
                    pools: { type: 'array', items: { $ref: '#/components/schemas/PoolInfo' } },
                    implementations: {
                        type: 'object',
                        additionalProperties: { $ref: '#/components/schemas/PoolImplementation' }
                    }
                }
            });
        }
    };
    storage = {
        /**
         * @description Get TON storage providers deployed to the blockchain.
         *
         * @tags Storage
         * @name GetStorageProviders
         * @request GET:/v2/storage/providers
         */
        getStorageProviders: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    providers: StorageProvider[];
                },
                Error
            >({
                path: `/v2/storage/providers`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                providers: StorageProvider[];
            }>(req, {
                type: 'object',
                required: ['providers'],
                properties: {
                    providers: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/StorageProvider' }
                    }
                }
            });
        }
    };
    rates = {
        /**
         * @description Get the token price in the chosen currency for display only. Don’t use this for financial transactions.
         *
         * @tags Rates
         * @name GetRates
         * @request GET:/v2/rates
         */
        getRates: (
            query: {
                /**
                 * accept ton and jetton master addresses, separated by commas
                 * @maxItems 100
                 * @example ["ton"]
                 */
                tokens: string[];
                /**
                 * accept ton and all possible fiat currencies, separated by commas
                 * @maxItems 50
                 * @example ["ton","usd","rub"]
                 */
                currencies: string[];
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    rates: Record<string, TokenRates>;
                },
                Error
            >({
                path: `/v2/rates`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                rates: Record<string, TokenRates>;
            }>(req, {
                type: 'object',
                required: ['rates'],
                properties: {
                    rates: {
                        type: 'object',
                        additionalProperties: { $ref: '#/components/schemas/TokenRates' }
                    }
                }
            });
        },

        /**
         * @description Get chart by token
         *
         * @tags Rates
         * @name GetChartRates
         * @request GET:/v2/rates/chart
         */
        getChartRates: (
            query: {
                /** accept jetton master address */
                token: string;
                /** @example "usd" */
                currency?: string;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                start_date?: number;
                /**
                 * @format int64
                 * @max 2114380800
                 * @example 1668436763
                 */
                end_date?: number;
                /**
                 * @format int
                 * @min 0
                 * @max 200
                 * @default 200
                 */
                points_count?: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /** @example {} */
                    points: any;
                },
                Error
            >({
                path: `/v2/rates/chart`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example {} */
                points: any;
            }>(req, {
                type: 'object',
                required: ['points'],
                properties: { points: { additionalProperties: true, example: {} } }
            });
        },

        /**
         * @description Get the TON price from markets
         *
         * @tags Rates
         * @name GetMarketsRates
         * @request GET:/v2/rates/markets
         */
        getMarketsRates: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    markets: MarketTonRates[];
                },
                Error
            >({
                path: `/v2/rates/markets`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                markets: MarketTonRates[];
            }>(req, {
                type: 'object',
                required: ['markets'],
                properties: {
                    markets: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/MarketTonRates' }
                    }
                }
            });
        }
    };
    connect = {
        /**
         * @description Get a payload for further token receipt
         *
         * @tags Connect
         * @name GetTonConnectPayload
         * @request GET:/v2/tonconnect/payload
         */
        getTonConnectPayload: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
                    payload: string;
                },
                Error
            >({
                path: `/v2/tonconnect/payload`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
                payload: string;
            }>(req, {
                type: 'object',
                required: ['payload'],
                properties: { payload: { type: 'string' } }
            });
        },

        /**
         * @description Get account info by state init
         *
         * @tags Connect
         * @name GetAccountInfoByStateInit
         * @request POST:/v2/tonconnect/stateinit
         */
        getAccountInfoByStateInit: (
            data: {
                /** @format cell-base64 */
                stateInit: Cell;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<AccountInfoByStateInit, Error>({
                path: `/v2/tonconnect/stateinit`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['stateInit'],
                    properties: { stateInit: { type: 'string', format: 'cell-base64' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<AccountInfoByStateInit>(req, {
                $ref: '#/components/schemas/AccountInfoByStateInit'
            });
        }
    };
    wallet = {
        /**
         * @description Get backup info
         *
         * @tags Wallet
         * @name GetWalletBackup
         * @request GET:/v2/wallet/backup
         */
        getWalletBackup: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    dump: string;
                },
                Error
            >({
                path: `/v2/wallet/backup`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                dump: string;
            }>(req, {
                type: 'object',
                required: ['dump'],
                properties: { dump: { type: 'string' } }
            });
        },

        /**
         * @description Set backup info
         *
         * @tags Wallet
         * @name SetWalletBackup
         * @request PUT:/v2/wallet/backup
         */
        setWalletBackup: (data: File, params: RequestParams = {}) => {
            const req = this.http.request<void, Error>({
                path: `/v2/wallet/backup`,
                method: 'PUT',
                body: prepareRequestData(data),
                ...params
            });

            return prepareResponse<void>(req);
        },

        /**
         * @description Account verification and token issuance
         *
         * @tags Wallet
         * @name TonConnectProof
         * @request POST:/v2/wallet/auth/proof
         */
        tonConnectProof: (
            data: {
                /**
                 * @format address
                 * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
                 */
                address: Address;
                proof: {
                    /**
                     * @format int64
                     * @example "1678275313"
                     */
                    timestamp: number;
                    domain: {
                        /** @format int32 */
                        lengthBytes?: number;
                        value: string;
                    };
                    signature: string;
                    /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
                    payload: string;
                    /** @format cell-base64 */
                    stateInit?: Cell;
                };
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
                    token: string;
                },
                Error
            >({
                path: `/v2/wallet/auth/proof`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['address', 'proof'],
                    properties: {
                        address: { type: 'string', format: 'address' },
                        proof: {
                            type: 'object',
                            required: ['timestamp', 'domain', 'signature', 'payload'],
                            properties: {
                                timestamp: { type: 'integer', format: 'int64' },
                                domain: {
                                    type: 'object',
                                    required: ['value'],
                                    properties: {
                                        lengthBytes: { type: 'integer', format: 'int32' },
                                        value: { type: 'string' }
                                    }
                                },
                                signature: { type: 'string' },
                                payload: { type: 'string' },
                                stateInit: { type: 'string', format: 'cell-base64' }
                            }
                        }
                    }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
                token: string;
            }>(req, {
                type: 'object',
                required: ['token'],
                properties: { token: { type: 'string' } }
            });
        },

        /**
         * @description Get account seqno
         *
         * @tags Wallet
         * @name GetAccountSeqno
         * @request GET:/v2/wallet/{account_id}/seqno
         */
        getAccountSeqno: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Seqno, Error>({
                path: `/v2/wallet/${accountId}/seqno`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Seqno>(req, { $ref: '#/components/schemas/Seqno' });
        },

        /**
         * @description Get wallets by public key
         *
         * @tags Wallet
         * @name GetWalletsByPublicKey
         * @request GET:/v2/pubkeys/{public_key}/wallets
         */
        getWalletsByPublicKey: (publicKey: string, params: RequestParams = {}) => {
            const req = this.http.request<Accounts, Error>({
                path: `/v2/pubkeys/${publicKey}/wallets`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Accounts>(req, { $ref: '#/components/schemas/Accounts' });
        }
    };
    gasless = {
        /**
         * @description Returns configuration of gasless transfers
         *
         * @tags Gasless
         * @name GaslessConfig
         * @request GET:/v2/gasless/config
         */
        gaslessConfig: (params: RequestParams = {}) => {
            const req = this.http.request<GaslessConfig, Error>({
                path: `/v2/gasless/config`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<GaslessConfig>(req, {
                $ref: '#/components/schemas/GaslessConfig'
            });
        },

        /**
         * @description Estimates the cost of the given messages and returns a payload to sign
         *
         * @tags Gasless
         * @name GaslessEstimate
         * @request POST:/v2/gasless/estimate/{master_id}
         */
        gaslessEstimate: (
            masterId_Address: Address,
            data: {
                /** @format address */
                walletAddress: Address;
                walletPublicKey: string;
                messages: {
                    /** @format cell */
                    boc: Cell;
                }[];
            },
            params: RequestParams = {}
        ) => {
            const masterId = masterId_Address.toRawString();
            const req = this.http.request<SignRawParams, Error>({
                path: `/v2/gasless/estimate/${masterId}`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['messages', 'walletAddress', 'walletPublicKey'],
                    properties: {
                        walletAddress: { type: 'string', format: 'address' },
                        walletPublicKey: { type: 'string' },
                        messages: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: ['boc'],
                                properties: { boc: { type: 'string', format: 'cell' } }
                            }
                        }
                    }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<SignRawParams>(req, {
                $ref: '#/components/schemas/SignRawParams'
            });
        },

        /**
         * @description Submits the signed gasless transaction message to the network
         *
         * @tags Gasless
         * @name GaslessSend
         * @request POST:/v2/gasless/send
         */
        gaslessSend: (
            data: {
                /** hex encoded public key */
                walletPublicKey: string;
                /** @format cell */
                boc: Cell;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<void, Error>({
                path: `/v2/gasless/send`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc', 'walletPublicKey'],
                    properties: {
                        walletPublicKey: { type: 'string' },
                        boc: { type: 'string', format: 'cell' }
                    }
                }),
                ...params
            });

            return prepareResponse<void>(req);
        }
    };
    liteServer = {
        /**
         * @description Get raw masterchain info
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfo
         * @request GET:/v2/liteserver/get_masterchain_info
         */
        getRawMasterchainInfo: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    last: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    state_root_hash: string;
                    init: InitStateRaw;
                },
                Error
            >({
                path: `/v2/liteserver/get_masterchain_info`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                last: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                state_root_hash: string;
                init: InitStateRaw;
            }>(req, {
                type: 'object',
                required: ['last', 'state_root_hash', 'init'],
                properties: {
                    last: { $ref: '#/components/schemas/BlockRaw' },
                    state_root_hash: { type: 'string' },
                    init: { $ref: '#/components/schemas/InitStateRaw' }
                }
            });
        },

        /**
         * @description Get raw masterchain info ext
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfoExt
         * @request GET:/v2/liteserver/get_masterchain_info_ext
         */
        getRawMasterchainInfoExt: (
            query: {
                /**
                 * mode
                 * @format int32
                 * @example 0
                 */
                mode: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /**
                     * @format int32
                     * @example 0
                     */
                    mode: number;
                    /**
                     * @format int32
                     * @example 257
                     */
                    version: number;
                    /**
                     * @format int64
                     * @example 7
                     */
                    capabilities: number;
                    last: BlockRaw;
                    /**
                     * @format int32
                     * @example 1687938199
                     */
                    last_utime: number;
                    /**
                     * @format int32
                     * @example 1687938204
                     */
                    now: number;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    state_root_hash: string;
                    init: InitStateRaw;
                },
                Error
            >({
                path: `/v2/liteserver/get_masterchain_info_ext`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format int32
                 * @example 0
                 */
                mode: number;
                /**
                 * @format int32
                 * @example 257
                 */
                version: number;
                /**
                 * @format int64
                 * @example 7
                 */
                capabilities: number;
                last: BlockRaw;
                /**
                 * @format int32
                 * @example 1687938199
                 */
                last_utime: number;
                /**
                 * @format int32
                 * @example 1687938204
                 */
                now: number;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                state_root_hash: string;
                init: InitStateRaw;
            }>(req, {
                type: 'object',
                required: [
                    'mode',
                    'version',
                    'capabilities',
                    'last',
                    'last_utime',
                    'now',
                    'state_root_hash',
                    'init'
                ],
                properties: {
                    mode: { type: 'integer', format: 'int32' },
                    version: { type: 'integer', format: 'int32' },
                    capabilities: { type: 'integer', format: 'int64' },
                    last: { $ref: '#/components/schemas/BlockRaw' },
                    last_utime: { type: 'integer', format: 'int32' },
                    now: { type: 'integer', format: 'int32' },
                    state_root_hash: { type: 'string' },
                    init: { $ref: '#/components/schemas/InitStateRaw' }
                }
            });
        },

        /**
         * @description Get raw time
         *
         * @tags Lite Server
         * @name GetRawTime
         * @request GET:/v2/liteserver/get_time
         */
        getRawTime: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    /**
                     * @format int32
                     * @example 1687146728
                     */
                    time: number;
                },
                Error
            >({
                path: `/v2/liteserver/get_time`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format int32
                 * @example 1687146728
                 */
                time: number;
            }>(req, {
                type: 'object',
                required: ['time'],
                properties: { time: { type: 'integer', format: 'int32' } }
            });
        },

        /**
         * @description Get raw blockchain block
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlock
         * @request GET:/v2/liteserver/get_block/{block_id}
         */
        getRawBlockchainBlock: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    data: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_block/${blockId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                data: string;
            }>(req, {
                type: 'object',
                required: ['id', 'data'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    data: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw blockchain block state
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockState
         * @request GET:/v2/liteserver/get_state/{block_id}
         */
        getRawBlockchainBlockState: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    root_hash: string;
                    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
                    file_hash: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    data: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_state/${blockId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                root_hash: string;
                /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
                file_hash: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                data: string;
            }>(req, {
                type: 'object',
                required: ['id', 'root_hash', 'file_hash', 'data'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    root_hash: { type: 'string' },
                    file_hash: { type: 'string' },
                    data: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw blockchain block header
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockHeader
         * @request GET:/v2/liteserver/get_block_header/{block_id}
         */
        getRawBlockchainBlockHeader: (
            blockId: string,
            query: {
                /**
                 * mode
                 * @format int32
                 * @example 0
                 */
                mode: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    /**
                     * @format int32
                     * @example 0
                     */
                    mode: number;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    header_proof: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_block_header/${blockId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                /**
                 * @format int32
                 * @example 0
                 */
                mode: number;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                header_proof: string;
            }>(req, {
                type: 'object',
                required: ['id', 'mode', 'header_proof'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    mode: { type: 'integer', format: 'int32' },
                    header_proof: { type: 'string' }
                }
            });
        },

        /**
         * @description Send raw message to blockchain
         *
         * @tags Lite Server
         * @name SendRawMessage
         * @request POST:/v2/liteserver/send_message
         */
        sendRawMessage: (
            data: {
                /** @format cell-base64 */
                body: Cell;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /**
                     * @format int32
                     * @example 200
                     */
                    code: number;
                },
                Error
            >({
                path: `/v2/liteserver/send_message`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['body'],
                    properties: { body: { type: 'string', format: 'cell-base64' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format int32
                 * @example 200
                 */
                code: number;
            }>(req, {
                type: 'object',
                required: ['code'],
                properties: { code: { type: 'integer', format: 'int32' } }
            });
        },

        /**
         * @description Get raw account state
         *
         * @tags Lite Server
         * @name GetRawAccountState
         * @request GET:/v2/liteserver/get_account_state/{account_id}
         */
        getRawAccountState: (
            accountId_Address: Address,
            query?: {
                /**
                 * target block: (workchain,shard,seqno,root_hash,file_hash)
                 * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
                 */
                target_block?: string;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    id: BlockRaw;
                    shardblk: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    shard_proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    state: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_account_state/${accountId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                shardblk: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                shard_proof: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                proof: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                state: string;
            }>(req, {
                type: 'object',
                required: ['id', 'shardblk', 'shard_proof', 'proof', 'state'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    shardblk: { $ref: '#/components/schemas/BlockRaw' },
                    shard_proof: { type: 'string' },
                    proof: { type: 'string' },
                    state: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw shard info
         *
         * @tags Lite Server
         * @name GetRawShardInfo
         * @request GET:/v2/liteserver/get_shard_info/{block_id}
         */
        getRawShardInfo: (
            blockId: string,
            query: {
                /**
                 * workchain
                 * @format int32
                 * @example 1
                 */
                workchain: number;
                /**
                 * shard
                 * @format int64
                 * @example 1
                 */
                shard: number;
                /**
                 * exact
                 * @example false
                 */
                exact: boolean;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    shardblk: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    shard_proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    shard_descr: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_shard_info/${blockId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                shardblk: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                shard_proof: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                shard_descr: string;
            }>(req, {
                type: 'object',
                required: ['id', 'shardblk', 'shard_proof', 'shard_descr'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    shardblk: { $ref: '#/components/schemas/BlockRaw' },
                    shard_proof: { type: 'string' },
                    shard_descr: { type: 'string' }
                }
            });
        },

        /**
         * @description Get all raw shards info
         *
         * @tags Lite Server
         * @name GetAllRawShardsInfo
         * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
         */
        getAllRawShardsInfo: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    data: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_all_shards_info/${blockId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                proof: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                data: string;
            }>(req, {
                type: 'object',
                required: ['id', 'proof', 'data'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    proof: { type: 'string' },
                    data: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw transactions
         *
         * @tags Lite Server
         * @name GetRawTransactions
         * @request GET:/v2/liteserver/get_transactions/{account_id}
         */
        getRawTransactions: (
            accountId_Address: Address,
            query: {
                /**
                 * count
                 * @format int32
                 * @example 100
                 */
                count: number;
                /**
                 * lt
                 * @format int64
                 * @example 23814011000000
                 */
                lt: number;
                /**
                 * hash
                 * @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85"
                 */
                hash: string;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<
                {
                    ids: BlockRaw[];
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    transactions: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_transactions/${accountId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                ids: BlockRaw[];
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                transactions: string;
            }>(req, {
                type: 'object',
                required: ['ids', 'transactions'],
                properties: {
                    ids: { type: 'array', items: { $ref: '#/components/schemas/BlockRaw' } },
                    transactions: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw list block transactions
         *
         * @tags Lite Server
         * @name GetRawListBlockTransactions
         * @request GET:/v2/liteserver/list_block_transactions/{block_id}
         */
        getRawListBlockTransactions: (
            blockId: string,
            query: {
                /**
                 * mode
                 * @format int32
                 * @example 0
                 */
                mode: number;
                /**
                 * count
                 * @format int32
                 * @example 100
                 */
                count: number;
                /**
                 * account ID
                 * @format address
                 * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
                 */
                account_id?: Address;
                /**
                 * lt
                 * @format int64
                 * @example 23814011000000
                 */
                lt?: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    id: BlockRaw;
                    /**
                     * @format int32
                     * @example 100
                     */
                    req_count: number;
                    /** @example true */
                    incomplete: boolean;
                    ids: {
                        /**
                         * @format int32
                         * @example 0
                         */
                        mode: number;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        account?: string;
                        /** @format bigint */
                        lt?: bigint;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        hash?: string;
                    }[];
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    proof: string;
                },
                Error
            >({
                path: `/v2/liteserver/list_block_transactions/${blockId}`,
                method: 'GET',
                query: query && {
                    ...query,
                    account_id: query.account_id?.toRawString()
                },
                format: 'json',
                ...params
            });

            return prepareResponse<{
                id: BlockRaw;
                /**
                 * @format int32
                 * @example 100
                 */
                req_count: number;
                /** @example true */
                incomplete: boolean;
                ids: {
                    /**
                     * @format int32
                     * @example 0
                     */
                    mode: number;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    account?: string;
                    /** @format bigint */
                    lt?: bigint;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    hash?: string;
                }[];
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                proof: string;
            }>(req, {
                type: 'object',
                required: ['id', 'req_count', 'incomplete', 'ids', 'proof'],
                properties: {
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    req_count: { type: 'integer', format: 'int32' },
                    incomplete: { type: 'boolean' },
                    ids: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['mode'],
                            properties: {
                                mode: { type: 'integer', format: 'int32' },
                                account: { type: 'string' },
                                lt: { type: 'integer', format: 'bigint', 'x-js-format': 'bigint' },
                                hash: { type: 'string' }
                            }
                        }
                    },
                    proof: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw block proof
         *
         * @tags Lite Server
         * @name GetRawBlockProof
         * @request GET:/v2/liteserver/get_block_proof
         */
        getRawBlockProof: (
            query: {
                /**
                 * known block: (workchain,shard,seqno,root_hash,file_hash)
                 * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
                 */
                known_block: string;
                /**
                 * target block: (workchain,shard,seqno,root_hash,file_hash)
                 * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
                 */
                target_block?: string;
                /**
                 * mode
                 * @format int32
                 * @example 0
                 */
                mode: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /** @example true */
                    complete: boolean;
                    from: BlockRaw;
                    to: BlockRaw;
                    steps: {
                        lite_server_block_link_back: {
                            /** @example false */
                            to_key_block: boolean;
                            from: BlockRaw;
                            to: BlockRaw;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            dest_proof: string;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            proof: string;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            state_proof: string;
                        };
                        lite_server_block_link_forward: {
                            /** @example false */
                            to_key_block: boolean;
                            from: BlockRaw;
                            to: BlockRaw;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            dest_proof: string;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            config_proof: string;
                            signatures: {
                                /** @format int64 */
                                validator_set_hash: number;
                                /** @format int32 */
                                catchain_seqno: number;
                                signatures: {
                                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                                    node_id_short: string;
                                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                                    signature: string;
                                }[];
                            };
                        };
                    }[];
                },
                Error
            >({
                path: `/v2/liteserver/get_block_proof`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @example true */
                complete: boolean;
                from: BlockRaw;
                to: BlockRaw;
                steps: {
                    lite_server_block_link_back: {
                        /** @example false */
                        to_key_block: boolean;
                        from: BlockRaw;
                        to: BlockRaw;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        dest_proof: string;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        proof: string;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        state_proof: string;
                    };
                    lite_server_block_link_forward: {
                        /** @example false */
                        to_key_block: boolean;
                        from: BlockRaw;
                        to: BlockRaw;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        dest_proof: string;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        config_proof: string;
                        signatures: {
                            /** @format int64 */
                            validator_set_hash: number;
                            /** @format int32 */
                            catchain_seqno: number;
                            signatures: {
                                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                                node_id_short: string;
                                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                                signature: string;
                            }[];
                        };
                    };
                }[];
            }>(req, {
                type: 'object',
                required: ['complete', 'from', 'to', 'steps'],
                properties: {
                    complete: { type: 'boolean' },
                    from: { $ref: '#/components/schemas/BlockRaw' },
                    to: { $ref: '#/components/schemas/BlockRaw' },
                    steps: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: [
                                'lite_server_block_link_back',
                                'lite_server_block_link_forward'
                            ],
                            properties: {
                                lite_server_block_link_back: {
                                    type: 'object',
                                    required: [
                                        'to_key_block',
                                        'from',
                                        'to',
                                        'dest_proof',
                                        'proof',
                                        'state_proof'
                                    ],
                                    properties: {
                                        to_key_block: { type: 'boolean' },
                                        from: { $ref: '#/components/schemas/BlockRaw' },
                                        to: { $ref: '#/components/schemas/BlockRaw' },
                                        dest_proof: { type: 'string' },
                                        proof: { type: 'string' },
                                        state_proof: { type: 'string' }
                                    }
                                },
                                lite_server_block_link_forward: {
                                    type: 'object',
                                    required: [
                                        'to_key_block',
                                        'from',
                                        'to',
                                        'dest_proof',
                                        'config_proof',
                                        'signatures'
                                    ],
                                    properties: {
                                        to_key_block: { type: 'boolean' },
                                        from: { $ref: '#/components/schemas/BlockRaw' },
                                        to: { $ref: '#/components/schemas/BlockRaw' },
                                        dest_proof: { type: 'string' },
                                        config_proof: { type: 'string' },
                                        signatures: {
                                            type: 'object',
                                            required: [
                                                'validator_set_hash',
                                                'catchain_seqno',
                                                'signatures'
                                            ],
                                            properties: {
                                                validator_set_hash: {
                                                    type: 'integer',
                                                    format: 'int64'
                                                },
                                                catchain_seqno: {
                                                    type: 'integer',
                                                    format: 'int32'
                                                },
                                                signatures: {
                                                    type: 'array',
                                                    items: {
                                                        type: 'object',
                                                        required: ['node_id_short', 'signature'],
                                                        properties: {
                                                            node_id_short: { type: 'string' },
                                                            signature: { type: 'string' }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        },

        /**
         * @description Get raw config
         *
         * @tags Lite Server
         * @name GetRawConfig
         * @request GET:/v2/liteserver/get_config_all/{block_id}
         */
        getRawConfig: (
            blockId: string,
            query: {
                /**
                 * mode
                 * @format int32
                 * @example 0
                 */
                mode: number;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<
                {
                    /**
                     * @format int32
                     * @example 0
                     */
                    mode: number;
                    id: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    state_proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    config_proof: string;
                },
                Error
            >({
                path: `/v2/liteserver/get_config_all/${blockId}`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /**
                 * @format int32
                 * @example 0
                 */
                mode: number;
                id: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                state_proof: string;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                config_proof: string;
            }>(req, {
                type: 'object',
                required: ['mode', 'id', 'state_proof', 'config_proof'],
                properties: {
                    mode: { type: 'integer', format: 'int32' },
                    id: { $ref: '#/components/schemas/BlockRaw' },
                    state_proof: { type: 'string' },
                    config_proof: { type: 'string' }
                }
            });
        },

        /**
         * @description Get raw shard block proof
         *
         * @tags Lite Server
         * @name GetRawShardBlockProof
         * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
         */
        getRawShardBlockProof: (blockId: string, params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    masterchain_id: BlockRaw;
                    links: {
                        id: BlockRaw;
                        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                        proof: string;
                    }[];
                },
                Error
            >({
                path: `/v2/liteserver/get_shard_block_proof/${blockId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                masterchain_id: BlockRaw;
                links: {
                    id: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    proof: string;
                }[];
            }>(req, {
                type: 'object',
                required: ['masterchain_id', 'links'],
                properties: {
                    masterchain_id: { $ref: '#/components/schemas/BlockRaw' },
                    links: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['id', 'proof'],
                            properties: {
                                id: { $ref: '#/components/schemas/BlockRaw' },
                                proof: { type: 'string' }
                            }
                        }
                    }
                }
            });
        },

        /**
         * @description Get out msg queue sizes
         *
         * @tags Lite Server
         * @name GetOutMsgQueueSizes
         * @request GET:/v2/liteserver/get_out_msg_queue_sizes
         */
        getOutMsgQueueSizes: (params: RequestParams = {}) => {
            const req = this.http.request<
                {
                    /** @format uint32 */
                    ext_msg_queue_size_limit: number;
                    shards: {
                        id: BlockRaw;
                        /** @format uint32 */
                        size: number;
                    }[];
                },
                Error
            >({
                path: `/v2/liteserver/get_out_msg_queue_sizes`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<{
                /** @format uint32 */
                ext_msg_queue_size_limit: number;
                shards: {
                    id: BlockRaw;
                    /** @format uint32 */
                    size: number;
                }[];
            }>(req, {
                type: 'object',
                required: ['ext_msg_queue_size_limit', 'shards'],
                properties: {
                    ext_msg_queue_size_limit: { type: 'integer', format: 'uint32' },
                    shards: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['id', 'size'],
                            properties: {
                                id: { $ref: '#/components/schemas/BlockRaw' },
                                size: { type: 'integer', format: 'uint32' }
                            }
                        }
                    }
                }
            });
        }
    };
    multisig = {
        /**
         * @description Get multisig account info
         *
         * @tags Multisig
         * @name GetMultisigAccount
         * @request GET:/v2/multisig/{account_id}
         */
        getMultisigAccount: (accountId_Address: Address, params: RequestParams = {}) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<Multisig, Error>({
                path: `/v2/multisig/${accountId}`,
                method: 'GET',
                format: 'json',
                ...params
            });

            return prepareResponse<Multisig>(req, { $ref: '#/components/schemas/Multisig' });
        }
    };
    emulation = {
        /**
         * @description Decode a given message. Only external incoming messages can be decoded currently.
         *
         * @tags Emulation
         * @name DecodeMessage
         * @request POST:/v2/message/decode
         */
        decodeMessage: (
            data: {
                /** @format cell */
                boc: Cell;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<DecodedMessage, Error>({
                path: `/v2/message/decode`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc'],
                    properties: { boc: { type: 'string', format: 'cell' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<DecodedMessage>(req, {
                $ref: '#/components/schemas/DecodedMessage'
            });
        },

        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation, Events
         * @name EmulateMessageToEvent
         * @request POST:/v2/events/emulate
         */
        emulateMessageToEvent: (
            data: {
                /** @format cell */
                boc: Cell;
            },
            query?: {
                ignore_signature_check?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Event, Error>({
                path: `/v2/events/emulate`,
                method: 'POST',
                query: query,
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc'],
                    properties: { boc: { type: 'string', format: 'cell' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<Event>(req, { $ref: '#/components/schemas/Event' });
        },

        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation, Traces
         * @name EmulateMessageToTrace
         * @request POST:/v2/traces/emulate
         */
        emulateMessageToTrace: (
            data: {
                /** @format cell */
                boc: Cell;
            },
            query?: {
                ignore_signature_check?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<Trace, Error>({
                path: `/v2/traces/emulate`,
                method: 'POST',
                query: query,
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc'],
                    properties: { boc: { type: 'string', format: 'cell' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<Trace>(req, { $ref: '#/components/schemas/Trace' });
        },

        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation, Wallet
         * @name EmulateMessageToWallet
         * @request POST:/v2/wallet/emulate
         */
        emulateMessageToWallet: (
            data: {
                /** @format cell */
                boc: Cell;
                /** additional per account configuration */
                params?: {
                    /**
                     * @format address
                     * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
                     */
                    address: Address;
                    /**
                     * @format bigint
                     * @example 10000000000
                     */
                    balance?: bigint;
                }[];
            },
            params: RequestParams = {}
        ) => {
            const req = this.http.request<MessageConsequences, Error>({
                path: `/v2/wallet/emulate`,
                method: 'POST',
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc'],
                    properties: {
                        boc: { type: 'string', format: 'cell' },
                        params: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: ['address'],
                                properties: {
                                    address: { type: 'string', format: 'address' },
                                    balance: {
                                        type: 'integer',
                                        format: 'bigint',
                                        'x-js-format': 'bigint'
                                    }
                                }
                            }
                        }
                    }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<MessageConsequences>(req, {
                $ref: '#/components/schemas/MessageConsequences'
            });
        },

        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation, Accounts
         * @name EmulateMessageToAccountEvent
         * @request POST:/v2/accounts/{account_id}/events/emulate
         */
        emulateMessageToAccountEvent: (
            accountId_Address: Address,
            data: {
                /** @format cell */
                boc: Cell;
            },
            query?: {
                ignore_signature_check?: boolean;
            },
            params: RequestParams = {}
        ) => {
            const accountId = accountId_Address.toRawString();
            const req = this.http.request<AccountEvent, Error>({
                path: `/v2/accounts/${accountId}/events/emulate`,
                method: 'POST',
                query: query,
                body: prepareRequestData(data, {
                    type: 'object',
                    required: ['boc'],
                    properties: { boc: { type: 'string', format: 'cell' } }
                }),
                format: 'json',
                ...params
            });

            return prepareResponse<AccountEvent>(req, {
                $ref: '#/components/schemas/AccountEvent'
            });
        }
    };
}
