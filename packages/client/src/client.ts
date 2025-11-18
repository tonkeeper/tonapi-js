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
     * @format maybe-address
     * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
     */
    address: Address | null;
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
        /**
         * @format bigint
         * @example "10000000000"
         */
        value: bigint;
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
    /** @example "8000000000000000" */
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
    /** @example "8000000000000000" */
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
    valueExtra?: ExtraCurrency[];
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
    /**
     * @format bigint
     * @example "0xdeadbeaf"
     */
    opCode?: bigint;
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
    CskipNoGas = 'cskip_no_gas',
    CskipSuspended = 'cskip_suspended'
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
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    zerostateRootHash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
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
    /**
     * @format bigint
     * @example "1152921504606846800"
     */
    totalWeight?: bigint;
    list: {
        publicKey: string;
        /** @format bigint */
        weight: bigint;
        /** @example "45061C1D4EC44A937D0318589E13C73D151D1CEF5D3C0E53AFBCF56A6C2FE2BD" */
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
    extraBalance?: ExtraCurrency[];
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

export interface BlockchainLibrary {
    /**
     * @format cell
     * @example "b5ee9c7201010101005f0000baff0020dd2082014c97ba218201339cbab19c71b0ed44d0d31fd70bffe304e0a4f260810200d71820d70b1fed44d0d31fd3ffd15112baf2a122f901541044f910f2a2f80001d31f3120d74a96d307d402fb00ded1a4c8cb1fcbffc9ed54"
     */
    boc: Cell;
}

export interface WalletStats {
    /**
     * @format int32
     * @example 123456789
     */
    nftsCount: number;
    /**
     * @format int32
     * @example 123456789
     */
    jettonsCount: number;
    /**
     * @format int32
     * @example 123456789
     */
    multisigCount: number;
    /**
     * @format int32
     * @example 123456789
     */
    stakingCount: number;
}

export interface WalletPlugin {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    /** @example "subscription_v1" */
    type: string;
    status: AccountStatus;
}

export interface Wallets {
    accounts: Wallet[];
}

export interface Wallet {
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    address: Address;
    isWallet: boolean;
    /**
     * @format bigint
     * @example 123456789
     */
    balance: bigint;
    stats: WalletStats;
    plugins: WalletPlugin[];
    status: AccountStatus;
    /**
     * unix timestamp
     * @format int64
     * @example 1720860269
     */
    lastActivity: number;
    /** @example "Ton foundation" */
    name?: string;
    /** @example "https://ton.org/logo.png" */
    icon?: string;
    /**
     * @deprecated
     * @example ["get_item_data"]
     */
    getMethods: string[];
    isSuspended?: boolean;
    signatureDisabled?: boolean;
    interfaces?: string[];
    /**
     * @format bigint
     * @example 25713146000001
     */
    lastLt: bigint;
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
    extraBalance?: ExtraCurrency[];
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

export interface GaslessTx {
    protocolName: string;
}

export interface SignRawParams {
    protocolName: string;
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    relayAddress: Address;
    /**
     * Commission for the transaction. In nanocoins.
     * @format bigint
     * @example "1000000"
     */
    commission: bigint;
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
    emulation?: MessageConsequences;
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
    /** precompiled contracts */
    '45'?: {
        contracts: {
            /** @format address */
            codeHash: Address;
            /** @format int64 */
            gasUsage: number;
        }[];
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
    Graylist = 'graylist',
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
    /** @format int32 */
    score: number;
    scaledUi?: ScaledUI;
}

export interface ScaledUI {
    /**
     * @format bigint
     * @example "597968399"
     */
    numerator: bigint;
    /**
     * @format bigint
     * @example "597968399"
     */
    denominator: bigint;
}

export interface JettonBalance {
    /**
     * @format bigint
     * @example "597968399"
     */
    balance: bigint;
    price?: TokenRates;
    walletAddress: AccountAddress;
    jetton: JettonPreview;
    /** @example ["custom_payload","non_transferable"] */
    extensions?: string[];
    lock?: {
        /**
         * @format bigint
         * @example "597968399"
         */
        amount: bigint;
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

/** @example "jetton" */
export enum CurrencyType {
    Native = 'native',
    ExtraCurrency = 'extra_currency',
    Jetton = 'jetton',
    Fiat = 'fiat'
}

export interface VaultDepositInfo {
    price: Price;
    /**
     * @format address
     * @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0"
     */
    vault: Address;
}

export interface Price {
    currencyType: CurrencyType;
    /**
     * @format bigint
     * @example "123000000000"
     */
    value: bigint;
    /** @example 9 */
    decimals: number;
    /** @example "TON" */
    tokenName: string;
    verification: TrustType;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image: string;
    /**
     * @format address
     * @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0"
     */
    jetton?: Address;
}

export interface ImagePreview {
    /** @example "100x100" */
    resolution: string;
    /** @example "https://site.com/pic1.jpg" */
    url: string;
}

export type NftApprovedBy = ('getgems' | 'tonkeeper')[];

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
    /**
     * Collection master contract confirmed that this item is part of collection
     * @example true
     */
    verified: boolean;
    /** @example {} */
    metadata: Record<string, any>;
    sale?: Sale;
    previews?: ImagePreview[];
    /** @example "crypto.ton" */
    dns?: string;
    /**
     * Please use trust field
     * @deprecated
     */
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
    seqno: string;
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
    orderSeqno: string;
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
    /**
     * @format address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    multisigAddress: Address;
    changingParameters?: {
        /** @format int32 */
        threshold: number;
        signers: Address[];
        proposers: Address[];
    };
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
         * @example "200"
         */
        qty: bigint;
        /**
         * @deprecated
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
        | 'ExtraCurrencyTransfer'
        | 'ContractDeploy'
        | 'JettonTransfer'
        | 'JettonBurn'
        | 'JettonMint'
        | 'NftItemTransfer'
        | 'Subscribe'
        | 'UnSubscribe'
        | 'AuctionBid'
        | 'NftPurchase'
        | 'DepositStake'
        | 'WithdrawStake'
        | 'WithdrawStakeRequest'
        | 'ElectionsDepositStake'
        | 'ElectionsRecoverStake'
        | 'JettonSwap'
        | 'SmartContractExec'
        | 'DomainRenew'
        | 'Purchase'
        | 'AddExtension'
        | 'RemoveExtension'
        | 'SetSignatureAllowedAction'
        | 'GasRelay'
        | 'DepositTokenStake'
        | 'WithdrawTokenStakeRequest'
        | 'LiquidityDeposit'
        | 'Unknown';
    /** @example "ok" */
    status: 'ok' | 'failed';
    TonTransfer?: TonTransferAction;
    ExtraCurrencyTransfer?: ExtraCurrencyTransferAction;
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
    Purchase?: PurchaseAction;
    AddExtension?: AddExtensionAction;
    RemoveExtension?: RemoveExtensionAction;
    SetSignatureAllowedAction?: SetSignatureAllowedAction;
    GasRelay?: GasRelayAction;
    DepositTokenStake?: DepositTokenStakeAction;
    WithdrawTokenStakeRequest?: WithdrawTokenStakeRequestAction;
    LiquidityDeposit?: LiquidityDepositAction;
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

export interface ExtraCurrencies {
    extraCurrencies: EcPreview[];
}

export interface EcPreview {
    /**
     * @format int32
     * @example 239
     */
    id: number;
    /** @example "FMS" */
    symbol: string;
    /** @example 5 */
    decimals: number;
    /** @example "https://cache.tonapi.io/images/extra.jpg" */
    image: string;
}

export interface ExtraCurrencyTransferAction {
    sender: AccountAddress;
    recipient: AccountAddress;
    /**
     * amount in quanta of tokens
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encryptedComment?: EncryptedComment;
    currency: EcPreview;
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

export interface GasRelayAction {
    /**
     * @format bigint
     * @example 1000000000
     */
    amount: bigint;
    relayer: AccountAddress;
    target: AccountAddress;
}

export interface PurchaseAction {
    source: AccountAddress;
    destination: AccountAddress;
    /** @example "03cfc582-b1c3-410a-a9a7-1f3afe326b3b" */
    invoiceId: string;
    amount: Price;
    metadata: Metadata;
}

export interface AddExtensionAction {
    wallet: AccountAddress;
    /**
     * @format address
     * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
     */
    extension: Address;
}

export interface RemoveExtensionAction {
    wallet: AccountAddress;
    /**
     * @format address
     * @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365"
     */
    extension: Address;
}

export interface SetSignatureAllowedAction {
    wallet: AccountAddress;
    allowed: boolean;
}

export interface NftItemTransferAction {
    sender?: AccountAddress;
    recipient?: AccountAddress;
    /**
     * @format maybe-address
     * @example ""
     */
    nft: Address | null;
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
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
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
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
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
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
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
    admin: AccountAddress;
    /**
     * @deprecated
     * @format bigint
     * @example 1000000000
     */
    amount?: bigint;
    price: Price;
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
    admin: AccountAddress;
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
    /** @example "stonfi" */
    dex: string;
    /**
     * @format bigint
     * @example "1660050553"
     */
    amountIn: bigint;
    /**
     * @format bigint
     * @example "1660050553"
     */
    amountOut: bigint;
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

export interface DepositTokenStakeAction {
    staker: AccountAddress;
    protocol: Protocol;
    stakeMeta?: Price;
}

export interface WithdrawTokenStakeRequestAction {
    staker: AccountAddress;
    protocol: Protocol;
    stakeMeta?: Price;
}

export interface LiquidityDepositAction {
    protocol: Protocol;
    from: AccountAddress;
    tokens: VaultDepositInfo[];
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
    /**
     * @format float
     * @min 0
     * @max 1
     * @example 0.5
     */
    progress: number;
}

export interface AccountEvents {
    events: AccountEvent[];
    /**
     * @format int64
     * @example 25713146000001
     */
    nextFrom: number;
}

export interface Purchase {
    /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
    eventId: string;
    /** @example "03cfc582-b1c3-410a-a9a7-1f3afe326b3b" */
    invoiceId: string;
    source: AccountAddress;
    destination: AccountAddress;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    /**
     * @format int64
     * @example 1645544908
     */
    utime: number;
    amount: Price;
    metadata: Metadata;
}

export interface AccountPurchases {
    purchases: Purchase[];
    /**
     * @format int64
     * @example 25713146000001
     */
    nextFrom: number;
}

export interface Metadata {
    /** hex encoded bytes */
    encryptedBinary: string;
    /**
     * hex encoded bytes
     * @example "dead.....beef"
     */
    decryptionKey?: string;
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
     * type of subscription
     * @example "v2"
     */
    type: string;
    status: 'not_ready' | 'active' | 'suspended' | 'cancelled';
    /**
     * payment period in seconds
     * @format int64
     * @example 2592000
     */
    period: number;
    /** common identifier */
    subscriptionId: string;
    paymentPerPeriod: Price;
    wallet: AccountAddress;
    /**
     * @format int64
     * @example 1653996834
     */
    nextChargeAt: number;
    metadata: Metadata;
    /**
     * @format maybe-address
     * @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee"
     */
    address?: Address | null;
    beneficiary?: AccountAddress;
    admin?: AccountAddress;
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
     * @format maybe-address
     * @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    nextResolver?: Address | null;
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
    /**
     * Estimated equivalent value of all assets at risk in selected currency (for example USD)
     * @format float
     */
    totalEquivalent?: number;
}

export interface JettonQuantity {
    /**
     * @format bigint
     * @example "597968399"
     */
    quantity: bigint;
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
        walletV5?: {
            /**
             * @format int64
             * @example 1
             */
            validUntil: number;
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
        /**
         * @format bigint
         * @example "0xdeadbeaf"
         */
        opCode?: bigint;
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
    /**
     * @format float
     * @min 0
     * @max 1
     * @example 0.5
     */
    progress: number;
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
    /**
     * this field currently returns a cached image URL (e.g., "https://cache.tonapi.io/images/jetton.jpg"). In the future, this will be replaced with the original URL from the metadata. The cached image is already available in the `preview` field of `JettonInfo` and will remain there.
     * @example "https://bitcoincash-example.github.io/website/logo.png"
     */
    image?: string;
    /** @example "Wrapped Toncoin" */
    description?: string;
    social?: string[];
    websites?: string[];
    catalogs?: string[];
    /** @example "https://claim-api.tonapi.io/jettons/TESTMINT" */
    customPayloadApiUri?: string;
}

export interface Jettons {
    jettons: JettonInfo[];
}

export interface JettonInfo {
    /** @example true */
    mintable: boolean;
    /**
     * @format bigint
     * @example "5887105890579978"
     */
    totalSupply: bigint;
    admin?: AccountAddress;
    metadata: JettonMetadata;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    preview: string;
    verification: JettonVerificationType;
    /**
     * @format int32
     * @example 2000
     */
    holdersCount: number;
    scaledUi?: ScaledUI;
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
         * @format bigint
         * @example "168856200518084"
         */
        balance: bigint;
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
     * @format cell
     */
    customPayload?: Cell;
    /**
     * hex-encoded BoC
     * @format cell
     */
    stateInit?: Cell;
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
        trust: TrustType;
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

/**
 * Each inner array is a pair [timestamp, price]:
 *   • index 0 — Unix timestamp (int64)
 *   • index 1 — token price (decimal) in the requested currency.
 * @example [1668436763,97.21323234]
 */
export type ChartPoints = [number, number];

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
    /** @example "800000000000000" */
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
    disassembledCode?: string;
    codeHash: string;
    methods: Method[];
    compiler: 'func' | 'fift' | 'tact';
    source?: Source;
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

export interface ExtraCurrency {
    /**
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
    preview: EcPreview;
}

export interface SourceFile {
    name: string;
    content: string;
    /** @example false */
    isEntrypoint: boolean;
    /** @example false */
    isStdLib: boolean;
    /** @example false */
    includeInCommand: boolean;
}

export interface Source {
    files: SourceFile[];
}

export interface Method {
    /** @format int64 */
    id: number;
    /** @example "get_something" */
    method: string;
}

export interface NftOperations {
    operations: NftOperation[];
    /**
     * @format bigint
     * @example 25713146000001
     */
    nextFrom?: bigint;
}

export interface NftOperation {
    /** @example "transfer" */
    operation: string;
    /**
     * @format int64
     * @example 1234567890
     */
    utime: number;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    /** @example "0xdeadbeaf" */
    transactionHash: string;
    source?: AccountAddress;
    destination?: AccountAddress;
    item: NftItem;
}

export interface JettonOperations {
    operations: JettonOperation[];
    /**
     * @format bigint
     * @example 25713146000001
     */
    nextFrom?: bigint;
}

export interface JettonOperation {
    /** @example "transfer" */
    operation: 'transfer' | 'mint' | 'burn';
    /**
     * @format int64
     * @example 1234567890
     */
    utime: number;
    /**
     * @format bigint
     * @example 25713146000001
     */
    lt: bigint;
    /** @example "cbf3e3d70ecf6f69643dd430761cd6004de2cacbdbc3029b0abd30ca3cc1c67e" */
    transactionHash: string;
    source?: AccountAddress;
    destination?: AccountAddress;
    /**
     * @format bigint
     * @example "1000000000"
     */
    amount: bigint;
    jetton: JettonPreview;
    /** @example "8fa19eec7bd6d00d0d76048cebe31e34082a859410c9fcf7d55ef4ff8f7fcb47" */
    traceId: string;
    /**
     * @format bigint
     * @example "17286061481122318000"
     */
    queryId: bigint;
    payload?: any;
}

/**
 * Data type of the argument value:
 * - `nan`: Not-a-Number value
 * - `null`: Null value
 * - `tinyint`: Decimal integer (e.g., `100500`)
 * - `int257`: 257-bit integer in hex format with 0x prefix (e.g., `0xfa01d78381ae32`)
 * - `slice`: TON blockchain address (e.g., `0:6e731f2e...`)
 * - `cell_boc_base64`: Base64-encoded cell BOC (Binary Object Code) (e.g., `te6ccgEBAQEAAgAAAA==`)
 * - `slice_boc_hex`: Hex-encoded slice BOC (e.g., `b5ee9c72...`)
 * @example "int257"
 */
export enum ExecGetMethodArgType {
    Nan = 'nan',
    Null = 'null',
    Tinyint = 'tinyint',
    Int257 = 'int257',
    Slice = 'slice',
    CellBocBase64 = 'cell_boc_base64',
    SliceBocHex = 'slice_boc_hex'
}

export interface ExecGetMethodArg {
    /**
     * Data type of the argument value:
     * - `nan`: Not-a-Number value
     * - `null`: Null value
     * - `tinyint`: Decimal integer (e.g., `100500`)
     * - `int257`: 257-bit integer in hex format with 0x prefix (e.g., `0xfa01d78381ae32`)
     * - `slice`: TON blockchain address (e.g., `0:6e731f2e...`)
     * - `cell_boc_base64`: Base64-encoded cell BOC (Binary Object Code) (e.g., `te6ccgEBAQEAAgAAAA==`)
     * - `slice_boc_hex`: Hex-encoded slice BOC (e.g., `b5ee9c72...`)
     */
    type: ExecGetMethodArgType;
    /**
     * String representation of the value according to the specified type
     * @example "0xfa01d78381ae32"
     */
    value: string;
}

export interface Protocol {
    /** @example "Ethena" */
    name: string;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image?: string;
}

export type GetOpenapiJsonData = any;

/** @format binary */
export type GetOpenapiYmlData = File;

export type StatusData = ServiceStatus;

export type GetReducedBlockchainBlocksData = ReducedBlocks;

export type GetBlockchainBlockData = BlockchainBlock;

/** @format binary */
export type DownloadBlockchainBlockBocData = File;

export type GetBlockchainMasterchainShardsData = BlockchainBlockShards;

export type GetBlockchainMasterchainBlocksData = BlockchainBlocks;

export type GetBlockchainMasterchainTransactionsData = Transactions;

export type GetBlockchainConfigFromBlockData = BlockchainConfig;

export type GetRawBlockchainConfigFromBlockData = RawBlockchainConfig;

export type GetBlockchainBlockTransactionsData = Transactions;

export type GetBlockchainTransactionData = Transaction;

export type GetBlockchainTransactionByMessageHashData = Transaction;

export type GetBlockchainValidatorsData = Validators;

export type GetBlockchainMasterchainHeadData = BlockchainBlock;

export type GetBlockchainRawAccountData = BlockchainRawAccount;

export type GetBlockchainAccountTransactionsData = Transactions;

export type ExecGetMethodForBlockchainAccountData = MethodExecutionResult;

export type ExecGetMethodWithBodyForBlockchainAccountData = MethodExecutionResult;

export type SendBlockchainMessageData = any;

export type GetBlockchainConfigData = BlockchainConfig;

export type GetRawBlockchainConfigData = RawBlockchainConfig;

export type BlockchainAccountInspectData = BlockchainAccountInspect;

export type GetLibraryByHashData = BlockchainLibrary;

export interface AddressParseData {
    /**
     * @format address
     * @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e"
     */
    rawForm: Address;
    bounceable: {
        b64: string;
        b64url: string;
    };
    nonBounceable: {
        b64: string;
        b64url: string;
    };
    givenType: string;
    testOnly: boolean;
}

export type GetAccountsData = Accounts;

export type GetAccountData = Account;

export type AccountDnsBackResolveData = DomainNames;

export type GetAccountJettonsBalancesData = JettonsBalances;

export type GetAccountJettonBalanceData = JettonBalance;

export type GetAccountJettonsHistoryData = JettonOperations;

export type GetAccountJettonHistoryByIdData = AccountEvents;

export type GetAccountNftItemsData = NftItems;

export type GetAccountNftHistoryData = NftOperations;

export type GetAccountEventsData = AccountEvents;

export type GetAccountEventData = AccountEvent;

export type GetAccountTracesData = TraceIDs;

export type GetAccountSubscriptionsData = Subscriptions;

export type ReindexAccountData = any;

export type SearchAccountsData = FoundAccounts;

export type GetAccountDnsExpiringData = DnsExpiring;

export interface GetAccountPublicKeyData {
    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
    publicKey: string;
}

export type GetAccountMultisigsData = Multisigs;

export interface GetAccountDiffData {
    /**
     * @format int64
     * @example 1000000000
     */
    balanceChange: number;
}

export type GetAccountExtraCurrencyHistoryByIdData = AccountEvents;

export type GetDnsInfoData = DomainInfo;

export type DnsResolveData = DnsRecord;

export type GetDomainBidsData = DomainBids;

export type GetAllAuctionsData = Auctions;

export type GetNftCollectionsData = NftCollections;

export type GetNftCollectionData = NftCollection;

export type GetNftCollectionItemsByAddressesData = NftCollections;

export type GetItemsFromCollectionData = NftItems;

export type GetNftItemsByAddressesData = NftItems;

export type GetNftItemByAddressData = NftItem;

export type GetNftHistoryByIdData = AccountEvents;

export type GetTraceData = Trace;

export type GetEventData = Event;

export type GetJettonsData = Jettons;

export type GetJettonInfoData = JettonInfo;

export type GetJettonInfosByAddressesData = Jettons;

export type GetJettonHoldersData = JettonHolders;

export type GetJettonTransferPayloadData = JettonTransferPayload;

export type GetJettonsEventsData = Event;

export type GetJettonAccountHistoryByIdData = JettonOperations;

export type GetExtraCurrencyInfoData = EcPreview;

export type GetAccountNominatorsPoolsData = AccountStaking;

export interface GetStakingPoolInfoData {
    implementation: PoolImplementation;
    pool: PoolInfo;
}

export interface GetStakingPoolHistoryData {
    apy: ApyHistory[];
}

export interface GetStakingPoolsData {
    pools: PoolInfo[];
    implementations: Record<string, PoolImplementation>;
}

export interface GetStorageProvidersData {
    providers: StorageProvider[];
}

export interface GetRatesData {
    rates: Record<string, TokenRates>;
}

export interface GetChartRatesData {
    points: ChartPoints[];
}

export interface GetMarketsRatesData {
    markets: MarketTonRates[];
}

export interface GetTonConnectPayloadData {
    /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
    payload: string;
}

export type GetAccountInfoByStateInitData = AccountInfoByStateInit;

export interface TonConnectProofData {
    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
    token: string;
}

export type GetAccountSeqnoData = Seqno;

export type GetWalletInfoData = Wallet;

export type GaslessConfigData = GaslessConfig;

export type GaslessEstimateData = SignRawParams;

export type GaslessSendData = GaslessTx;

export type GetWalletsByPublicKeyData = Wallets;

export interface GetRawMasterchainInfoData {
    last: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    stateRootHash: string;
    init: InitStateRaw;
}

export interface GetRawMasterchainInfoExtData {
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
    lastUtime: number;
    /**
     * @format int32
     * @example 1687938204
     */
    now: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    stateRootHash: string;
    init: InitStateRaw;
}

export interface GetRawTimeData {
    /**
     * @format int32
     * @example 1687146728
     */
    time: number;
}

export interface GetRawBlockchainBlockData {
    id: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    data: string;
}

export interface GetRawBlockchainBlockStateData {
    id: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    rootHash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    fileHash: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    data: string;
}

export interface GetRawBlockchainBlockHeaderData {
    id: BlockRaw;
    /**
     * @format int32
     * @example 0
     */
    mode: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    headerProof: string;
}

export interface SendRawMessageData {
    /**
     * @format int32
     * @example 200
     */
    code: number;
}

export interface GetRawAccountStateData {
    id: BlockRaw;
    shardblk: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    shardProof: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    proof: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    state: string;
}

export interface GetRawShardInfoData {
    id: BlockRaw;
    shardblk: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    shardProof: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    shardDescr: string;
}

export interface GetAllRawShardsInfoData {
    id: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    proof: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    data: string;
}

export interface GetRawTransactionsData {
    ids: BlockRaw[];
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    transactions: string;
}

export interface GetRawListBlockTransactionsData {
    id: BlockRaw;
    /**
     * @format int32
     * @example 100
     */
    reqCount: number;
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
}

export interface GetRawBlockProofData {
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
}

export interface GetRawConfigData {
    /**
     * @format int32
     * @example 0
     */
    mode: number;
    id: BlockRaw;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    stateProof: string;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    configProof: string;
}

export interface GetRawShardBlockProofData {
    masterchainId: BlockRaw;
    links: {
        id: BlockRaw;
        /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
        proof: string;
    }[];
}

export interface GetOutMsgQueueSizesData {
    /** @format uint32 */
    extMsgQueueSizeLimit: number;
    shards: {
        id: BlockRaw;
        /** @format uint32 */
        size: number;
    }[];
}

export type GetMultisigAccountData = Multisig;

export type GetMultisigOrderData = MultisigOrder;

export type DecodeMessageData = DecodedMessage;

export type EmulateMessageToEventData = Event;

export type EmulateMessageToTraceData = Trace;

export type EmulateMessageToWalletData = MessageConsequences;

export type EmulateMessageToAccountEventData = AccountEvent;

export type GetPurchaseHistoryData = AccountPurchases;

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
    /** query implode */
    queryImplode?: string[];
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
        const providedFetch = apiConfig.fetch ?? (tonapi && tonapi.fetch) ?? null;

        const baseApiParams = apiConfig.baseApiParams || {};
        const { apiKey, ...apiConfigWithoutApiKey } = apiConfig;

        const headers = {
            ...(baseApiParams.headers ?? {}),
            ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
            'x-tonapi-client': `tonapi-js@0.5.0-alpha.6`
        };

        const preparedApiConfig = {
            ...apiConfigWithoutApiKey,
            providedFetch,
            baseApiParams: {
                ...baseApiParams,
                headers
            }
        };

        Object.assign(this, preparedApiConfig);
    }

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addImplodeArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key]
            .map((val: any) => encodeURIComponent(typeof val === 'number' ? val : `${val}`))
            .join(',');

        // Don't double-encode: value is already encoded, only encode the key
        return `${encodeURIComponent(key)}=${value}`;
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string, implodeParams?: string[]) {
        const value = query[key];
        return implodeParams?.includes(key)
            ? this.addImplodeArrayQueryParam(query, key)
            : value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
    }

    protected toQueryString(rawQuery?: QueryParamsType, implodeParams?: string[]): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
        return keys
            .map(key =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key, implodeParams)
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
        queryImplode,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<T> => {
        const requestParams = this.mergeRequestParams(params);
        const queryString = query && this.toQueryString(query, queryImplode);
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
            const r = response as HttpResponse<T, E>;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const customResponseFormat = responseFormat === 'json' ? 'text' : responseFormat;

            const result = !customResponseFormat
                ? r
                : await response[customResponseFormat!]()
                      .then(data => {
                          if (r.ok) {
                              r.data = responseFormat === 'json' ? JSONParse(data as string) : data;
                              return r;
                          }
                          r.error = data as E;

                          return r;
                      })
                      .catch(e => {
                          r.error = e;
                          return r;
                      });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            // Return result object instead of throwing
            // prepareResponse will handle error conversion
            if (!response.ok) throw result;
            return result.data;
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
            address: { type: 'string', format: 'maybe-address' },
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
                        value: { type: 'string', 'x-js-format': 'bigint' }
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
            value_extra: { type: 'array', items: { $ref: '#/components/schemas/ExtraCurrency' } },
            fwd_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            ihr_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            source: { $ref: '#/components/schemas/AccountAddress' },
            import_fee: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            created_at: { type: 'integer', format: 'int64' },
            op_code: { type: 'string', 'x-js-format': 'bigint' },
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
        enum: ['cskip_no_state', 'cskip_bad_state', 'cskip_no_gas', 'cskip_suspended']
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
            total_weight: { type: 'string', 'x-js-format': 'bigint' },
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
            extra_balance: { type: 'array', items: { $ref: '#/components/schemas/ExtraCurrency' } },
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
    '#/components/schemas/BlockchainLibrary': {
        type: 'object',
        required: ['boc'],
        properties: { boc: { type: 'string', format: 'cell' } }
    },
    '#/components/schemas/WalletStats': {
        type: 'object',
        required: ['nfts_count', 'jettons_count', 'multisig_count', 'staking_count'],
        properties: {
            nfts_count: { type: 'integer', format: 'int32' },
            jettons_count: { type: 'integer', format: 'int32' },
            multisig_count: { type: 'integer', format: 'int32' },
            staking_count: { type: 'integer', format: 'int32' }
        }
    },
    '#/components/schemas/WalletPlugin': {
        type: 'object',
        required: ['address', 'type', 'status'],
        properties: {
            address: { type: 'string', format: 'address' },
            type: { type: 'string' },
            status: { $ref: '#/components/schemas/AccountStatus' }
        }
    },
    '#/components/schemas/Wallets': {
        type: 'object',
        required: ['accounts'],
        properties: { accounts: { type: 'array', items: { $ref: '#/components/schemas/Wallet' } } }
    },
    '#/components/schemas/Wallet': {
        type: 'object',
        required: [
            'address',
            'balance',
            'stats',
            'plugins',
            'status',
            'last_activity',
            'get_methods',
            'is_wallet',
            'last_lt'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            is_wallet: { type: 'boolean' },
            balance: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            stats: { $ref: '#/components/schemas/WalletStats' },
            plugins: { type: 'array', items: { $ref: '#/components/schemas/WalletPlugin' } },
            status: { $ref: '#/components/schemas/AccountStatus' },
            last_activity: { type: 'integer', format: 'int64' },
            name: { type: 'string' },
            icon: { type: 'string' },
            get_methods: { type: 'array', deprecated: true, items: { type: 'string' } },
            is_suspended: { type: 'boolean' },
            signature_disabled: { type: 'boolean' },
            interfaces: { type: 'array', items: { type: 'string' } },
            last_lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/Account': {
        type: 'object',
        required: ['address', 'balance', 'status', 'last_activity', 'get_methods', 'is_wallet'],
        properties: {
            address: { type: 'string', format: 'address' },
            balance: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            extra_balance: { type: 'array', items: { $ref: '#/components/schemas/ExtraCurrency' } },
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
    '#/components/schemas/GaslessTx': {
        type: 'object',
        required: ['protocol_name'],
        properties: { protocol_name: { type: 'string' } }
    },
    '#/components/schemas/SignRawParams': {
        type: 'object',
        required: [
            'messages',
            'relay_address',
            'commission',
            'from',
            'valid_until',
            'protocol_name'
        ],
        properties: {
            protocol_name: { type: 'string' },
            relay_address: { type: 'string', format: 'address' },
            commission: { type: 'string', 'x-js-format': 'bigint' },
            from: { type: 'string', format: 'address' },
            valid_until: { type: 'integer', format: 'int64' },
            messages: { type: 'array', items: { $ref: '#/components/schemas/SignRawMessage' } },
            emulation: { $ref: '#/components/schemas/MessageConsequences' }
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
            '45': {
                type: 'object',
                required: ['contracts'],
                properties: {
                    contracts: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['code_hash', 'gas_usage'],
                            properties: {
                                code_hash: { type: 'string', format: 'address' },
                                gas_usage: { type: 'integer', format: 'int64' }
                            }
                        }
                    }
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
        enum: ['whitelist', 'graylist', 'blacklist', 'none']
    },
    '#/components/schemas/JettonPreview': {
        type: 'object',
        required: ['address', 'name', 'symbol', 'decimals', 'verification', 'image', 'score'],
        properties: {
            address: { type: 'string', format: 'address' },
            name: { type: 'string' },
            symbol: { type: 'string' },
            decimals: { type: 'integer' },
            image: { type: 'string' },
            verification: { $ref: '#/components/schemas/JettonVerificationType' },
            custom_payload_api_uri: { type: 'string' },
            score: { type: 'integer', format: 'int32' },
            scaled_ui: { $ref: '#/components/schemas/ScaledUI' }
        }
    },
    '#/components/schemas/ScaledUI': {
        type: 'object',
        required: ['numerator', 'denominator'],
        properties: {
            numerator: { type: 'string', 'x-js-format': 'bigint' },
            denominator: { type: 'string', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/JettonBalance': {
        type: 'object',
        required: ['balance', 'wallet_address', 'jetton'],
        properties: {
            balance: { type: 'string', 'x-js-format': 'bigint' },
            price: { $ref: '#/components/schemas/TokenRates' },
            wallet_address: { $ref: '#/components/schemas/AccountAddress' },
            jetton: { $ref: '#/components/schemas/JettonPreview' },
            extensions: { type: 'array', items: { type: 'string' } },
            lock: {
                type: 'object',
                required: ['amount', 'till'],
                properties: {
                    amount: { type: 'string', 'x-js-format': 'bigint' },
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
    '#/components/schemas/CurrencyType': {
        type: 'string',
        enum: ['native', 'extra_currency', 'jetton', 'fiat']
    },
    '#/components/schemas/VaultDepositInfo': {
        type: 'object',
        required: ['price', 'vault'],
        properties: {
            price: { $ref: '#/components/schemas/Price' },
            vault: { type: 'string', format: 'address' }
        }
    },
    '#/components/schemas/Price': {
        type: 'object',
        required: ['currency_type', 'value', 'decimals', 'token_name', 'verification', 'image'],
        properties: {
            currency_type: { $ref: '#/components/schemas/CurrencyType' },
            value: { type: 'string', 'x-js-format': 'bigint' },
            decimals: { type: 'integer' },
            token_name: { type: 'string' },
            verification: { $ref: '#/components/schemas/TrustType' },
            image: { type: 'string' },
            jetton: { type: 'string', format: 'address' }
        }
    },
    '#/components/schemas/ImagePreview': {
        type: 'object',
        required: ['resolution', 'url'],
        properties: { resolution: { type: 'string' }, url: { type: 'string' } }
    },
    '#/components/schemas/NftApprovedBy': {
        type: 'array',
        items: { type: 'string', enum: ['getgems', 'tonkeeper'] }
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
            approved_by: {
                allOf: { '0': { $ref: '#/components/schemas/NftApprovedBy' } },
                deprecated: true,
                description: 'Please use trust field'
            },
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
            seqno: { type: 'string' },
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
            'signed_by',
            'multisig_address'
        ],
        properties: {
            address: { type: 'string', format: 'address' },
            order_seqno: { type: 'string' },
            threshold: { type: 'integer', format: 'int32' },
            sent_for_execution: { type: 'boolean' },
            signers: { type: 'array', items: { type: 'string', format: 'address' } },
            approvals_num: { type: 'integer', format: 'int32' },
            expiration_date: { type: 'integer', format: 'int64' },
            risk: { $ref: '#/components/schemas/Risk' },
            creation_date: { type: 'integer', format: 'int64' },
            signed_by: { type: 'array', items: { type: 'string', format: 'address' } },
            multisig_address: { type: 'string', format: 'address' },
            changing_parameters: {
                type: 'object',
                required: ['threshold', 'signers', 'proposers'],
                properties: {
                    threshold: { type: 'integer', format: 'int32' },
                    signers: { type: 'array', items: { type: 'string', format: 'address' } },
                    proposers: { type: 'array', items: { type: 'string', format: 'address' } }
                }
            }
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
                    required: ['account', 'qty', 'quantity', 'jetton'],
                    properties: {
                        account: { $ref: '#/components/schemas/AccountAddress' },
                        jetton: { $ref: '#/components/schemas/JettonPreview' },
                        qty: { type: 'string', 'x-js-format': 'bigint' },
                        quantity: {
                            type: 'integer',
                            deprecated: true,
                            format: 'int64',
                            'x-js-format': 'bigint'
                        }
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
                    'ExtraCurrencyTransfer',
                    'ContractDeploy',
                    'JettonTransfer',
                    'JettonBurn',
                    'JettonMint',
                    'NftItemTransfer',
                    'Subscribe',
                    'UnSubscribe',
                    'AuctionBid',
                    'NftPurchase',
                    'DepositStake',
                    'WithdrawStake',
                    'WithdrawStakeRequest',
                    'ElectionsDepositStake',
                    'ElectionsRecoverStake',
                    'JettonSwap',
                    'SmartContractExec',
                    'DomainRenew',
                    'Purchase',
                    'AddExtension',
                    'RemoveExtension',
                    'SetSignatureAllowedAction',
                    'GasRelay',
                    'DepositTokenStake',
                    'WithdrawTokenStakeRequest',
                    'LiquidityDeposit',
                    'Unknown'
                ]
            },
            status: { type: 'string', enum: ['ok', 'failed'] },
            TonTransfer: { $ref: '#/components/schemas/TonTransferAction' },
            ExtraCurrencyTransfer: { $ref: '#/components/schemas/ExtraCurrencyTransferAction' },
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
            Purchase: { $ref: '#/components/schemas/PurchaseAction' },
            AddExtension: { $ref: '#/components/schemas/AddExtensionAction' },
            RemoveExtension: { $ref: '#/components/schemas/RemoveExtensionAction' },
            SetSignatureAllowedAction: { $ref: '#/components/schemas/SetSignatureAllowedAction' },
            GasRelay: { $ref: '#/components/schemas/GasRelayAction' },
            DepositTokenStake: { $ref: '#/components/schemas/DepositTokenStakeAction' },
            WithdrawTokenStakeRequest: {
                $ref: '#/components/schemas/WithdrawTokenStakeRequestAction'
            },
            LiquidityDeposit: { $ref: '#/components/schemas/LiquidityDepositAction' },
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
    '#/components/schemas/ExtraCurrencies': {
        type: 'object',
        required: ['extra_currencies'],
        properties: {
            extra_currencies: { type: 'array', items: { $ref: '#/components/schemas/EcPreview' } }
        }
    },
    '#/components/schemas/EcPreview': {
        type: 'object',
        required: ['id', 'symbol', 'decimals', 'image'],
        properties: {
            id: { type: 'integer', format: 'int32' },
            symbol: { type: 'string' },
            decimals: { type: 'integer' },
            image: { type: 'string' }
        }
    },
    '#/components/schemas/ExtraCurrencyTransferAction': {
        type: 'object',
        required: ['sender', 'recipient', 'amount', 'currency'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'string', 'x-js-format': 'bigint' },
            comment: { type: 'string' },
            encrypted_comment: { $ref: '#/components/schemas/EncryptedComment' },
            currency: { $ref: '#/components/schemas/EcPreview' }
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
    '#/components/schemas/GasRelayAction': {
        type: 'object',
        required: ['amount', 'relayer', 'target'],
        properties: {
            amount: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            relayer: { $ref: '#/components/schemas/AccountAddress' },
            target: { $ref: '#/components/schemas/AccountAddress' }
        }
    },
    '#/components/schemas/PurchaseAction': {
        type: 'object',
        required: ['source', 'destination', 'invoice_id', 'amount', 'metadata'],
        properties: {
            source: { $ref: '#/components/schemas/AccountAddress' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            invoice_id: { type: 'string' },
            amount: { $ref: '#/components/schemas/Price' },
            metadata: { $ref: '#/components/schemas/Metadata' }
        }
    },
    '#/components/schemas/AddExtensionAction': {
        type: 'object',
        required: ['wallet', 'extension'],
        properties: {
            wallet: { $ref: '#/components/schemas/AccountAddress' },
            extension: { type: 'string', format: 'address' }
        }
    },
    '#/components/schemas/RemoveExtensionAction': {
        type: 'object',
        required: ['wallet', 'extension'],
        properties: {
            wallet: { $ref: '#/components/schemas/AccountAddress' },
            extension: { type: 'string', format: 'address' }
        }
    },
    '#/components/schemas/SetSignatureAllowedAction': {
        type: 'object',
        required: ['wallet', 'allowed'],
        properties: {
            wallet: { $ref: '#/components/schemas/AccountAddress' },
            allowed: { type: 'boolean' }
        }
    },
    '#/components/schemas/NftItemTransferAction': {
        type: 'object',
        required: ['nft'],
        properties: {
            sender: { $ref: '#/components/schemas/AccountAddress' },
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            nft: { type: 'string', format: 'maybe-address' },
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
            amount: { type: 'string', 'x-js-format': 'bigint' },
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
            amount: { type: 'string', 'x-js-format': 'bigint' },
            jetton: { $ref: '#/components/schemas/JettonPreview' }
        }
    },
    '#/components/schemas/JettonMintAction': {
        type: 'object',
        required: ['amount', 'jetton', 'recipient', 'recipients_wallet'],
        properties: {
            recipient: { $ref: '#/components/schemas/AccountAddress' },
            recipients_wallet: { type: 'string', format: 'address' },
            amount: { type: 'string', 'x-js-format': 'bigint' },
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
        required: ['subscriber', 'subscription', 'beneficiary', 'admin', 'price', 'initial'],
        properties: {
            subscriber: { $ref: '#/components/schemas/AccountAddress' },
            subscription: { type: 'string', format: 'address' },
            beneficiary: { $ref: '#/components/schemas/AccountAddress' },
            admin: { $ref: '#/components/schemas/AccountAddress' },
            amount: { deprecated: true, type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            price: { $ref: '#/components/schemas/Price' },
            initial: { type: 'boolean' }
        }
    },
    '#/components/schemas/UnSubscriptionAction': {
        type: 'object',
        required: ['subscriber', 'subscription', 'beneficiary', 'admin'],
        properties: {
            subscriber: { $ref: '#/components/schemas/AccountAddress' },
            subscription: { type: 'string', format: 'address' },
            beneficiary: { $ref: '#/components/schemas/AccountAddress' },
            admin: { $ref: '#/components/schemas/AccountAddress' }
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
            dex: { type: 'string' },
            amount_in: { type: 'string', 'x-js-format': 'bigint' },
            amount_out: { type: 'string', 'x-js-format': 'bigint' },
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
    '#/components/schemas/DepositTokenStakeAction': {
        type: 'object',
        required: ['staker', 'protocol'],
        properties: {
            staker: { $ref: '#/components/schemas/AccountAddress' },
            protocol: { $ref: '#/components/schemas/Protocol' },
            stake_meta: { $ref: '#/components/schemas/Price' }
        }
    },
    '#/components/schemas/WithdrawTokenStakeRequestAction': {
        type: 'object',
        required: ['staker', 'protocol'],
        properties: {
            staker: { $ref: '#/components/schemas/AccountAddress' },
            protocol: { $ref: '#/components/schemas/Protocol' },
            stake_meta: { $ref: '#/components/schemas/Price' }
        }
    },
    '#/components/schemas/LiquidityDepositAction': {
        type: 'object',
        required: ['protocol', 'from', 'tokens'],
        properties: {
            protocol: { $ref: '#/components/schemas/Protocol' },
            from: { $ref: '#/components/schemas/AccountAddress' },
            tokens: { type: 'array', items: { $ref: '#/components/schemas/VaultDepositInfo' } }
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
            'extra',
            'progress'
        ],
        properties: {
            event_id: { type: 'string' },
            account: { $ref: '#/components/schemas/AccountAddress' },
            timestamp: { type: 'integer', format: 'int64' },
            actions: { type: 'array', items: { $ref: '#/components/schemas/Action' } },
            is_scam: { type: 'boolean' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            in_progress: { type: 'boolean' },
            extra: { type: 'integer', format: 'int64' },
            progress: { type: 'number', format: 'float', minimum: 0, maximum: 1 }
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
    '#/components/schemas/Purchase': {
        type: 'object',
        required: [
            'event_id',
            'invoice_id',
            'source',
            'destination',
            'lt',
            'utime',
            'amount',
            'metadata'
        ],
        properties: {
            event_id: { type: 'string' },
            invoice_id: { type: 'string' },
            source: { $ref: '#/components/schemas/AccountAddress' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            utime: { type: 'integer', format: 'int64' },
            amount: { $ref: '#/components/schemas/Price' },
            metadata: { $ref: '#/components/schemas/Metadata' }
        }
    },
    '#/components/schemas/AccountPurchases': {
        type: 'object',
        required: ['purchases', 'next_from'],
        properties: {
            purchases: { type: 'array', items: { $ref: '#/components/schemas/Purchase' } },
            next_from: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/Metadata': {
        type: 'object',
        required: ['encrypted_binary'],
        properties: { encrypted_binary: { type: 'string' }, decryption_key: { type: 'string' } }
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
            'type',
            'status',
            'period',
            'subscription_id',
            'payment_per_period',
            'wallet',
            'next_charge_at',
            'metadata'
        ],
        properties: {
            type: { type: 'string' },
            status: { type: 'string', enum: ['not_ready', 'active', 'suspended', 'cancelled'] },
            period: { type: 'integer', format: 'int64' },
            subscription_id: { type: 'string' },
            payment_per_period: { $ref: '#/components/schemas/Price' },
            wallet: { $ref: '#/components/schemas/AccountAddress' },
            next_charge_at: { type: 'integer', format: 'int64' },
            metadata: { $ref: '#/components/schemas/Metadata' },
            address: { type: 'string', format: 'maybe-address' },
            beneficiary: { $ref: '#/components/schemas/AccountAddress' },
            admin: { $ref: '#/components/schemas/AccountAddress' }
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
            next_resolver: { type: 'string', format: 'maybe-address' },
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
            nfts: { type: 'array', items: { $ref: '#/components/schemas/NftItem' } },
            total_equivalent: { type: 'number', format: 'float' }
        }
    },
    '#/components/schemas/JettonQuantity': {
        type: 'object',
        required: ['quantity', 'wallet_address', 'jetton'],
        properties: {
            quantity: { type: 'string', 'x-js-format': 'bigint' },
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
                    wallet_v5: {
                        type: 'object',
                        required: ['raw_messages', 'valid_until'],
                        properties: {
                            valid_until: { type: 'integer', format: 'int64' },
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
                    op_code: { type: 'string', 'x-js-format': 'bigint' },
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
            'in_progress',
            'progress'
        ],
        properties: {
            event_id: { type: 'string' },
            timestamp: { type: 'integer', format: 'int64' },
            actions: { type: 'array', items: { $ref: '#/components/schemas/Action' } },
            value_flow: { type: 'array', items: { $ref: '#/components/schemas/ValueFlow' } },
            is_scam: { type: 'boolean' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            in_progress: { type: 'boolean' },
            progress: { type: 'number', format: 'float', minimum: 0, maximum: 1 }
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
    '#/components/schemas/Jettons': {
        type: 'object',
        required: ['jettons'],
        properties: {
            jettons: { type: 'array', items: { $ref: '#/components/schemas/JettonInfo' } }
        }
    },
    '#/components/schemas/JettonInfo': {
        type: 'object',
        required: [
            'mintable',
            'total_supply',
            'metadata',
            'verification',
            'holders_count',
            'preview'
        ],
        properties: {
            mintable: { type: 'boolean' },
            total_supply: { type: 'string', 'x-js-format': 'bigint' },
            admin: { $ref: '#/components/schemas/AccountAddress' },
            metadata: { $ref: '#/components/schemas/JettonMetadata' },
            preview: { type: 'string' },
            verification: { $ref: '#/components/schemas/JettonVerificationType' },
            holders_count: { type: 'integer', format: 'int32' },
            scaled_ui: { $ref: '#/components/schemas/ScaledUI' }
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
                        balance: { type: 'string', 'x-js-format': 'bigint' }
                    }
                }
            },
            total: { type: 'integer', format: 'int64' }
        }
    },
    '#/components/schemas/JettonTransferPayload': {
        type: 'object',
        required: ['payload'],
        properties: {
            custom_payload: { type: 'string', format: 'cell' },
            state_init: { type: 'string', format: 'cell' }
        }
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
                    required: ['address', 'name', 'preview', 'trust'],
                    properties: {
                        address: { type: 'string', format: 'address' },
                        name: { type: 'string' },
                        preview: { type: 'string' },
                        trust: { $ref: '#/components/schemas/TrustType' }
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
    '#/components/schemas/ChartPoints': {
        type: 'array',
        prefixItems: [
            { type: 'integer', format: 'int64', description: 'Unix timestamp of the data point' },
            { type: 'number', description: 'Decimal price of the token in the requested currency' }
        ],
        additionalItems: false,
        items: false
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
        required: ['code', 'code_hash', 'methods', 'compiler'],
        properties: {
            code: { type: 'string', format: 'cell' },
            disassembled_code: { type: 'string' },
            code_hash: { type: 'string' },
            methods: { type: 'array', items: { $ref: '#/components/schemas/Method' } },
            compiler: { type: 'string', enum: ['func', 'fift', 'tact'] },
            source: { $ref: '#/components/schemas/Source' }
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
    },
    '#/components/schemas/ExtraCurrency': {
        type: 'object',
        required: ['amount', 'preview'],
        properties: {
            amount: { type: 'string', 'x-js-format': 'bigint' },
            preview: { $ref: '#/components/schemas/EcPreview' }
        }
    },
    '#/components/schemas/SourceFile': {
        type: 'object',
        required: ['name', 'content', 'is_entrypoint', 'is_std_lib', 'include_in_command'],
        properties: {
            name: { type: 'string' },
            content: { type: 'string' },
            is_entrypoint: { type: 'boolean' },
            is_std_lib: { type: 'boolean' },
            include_in_command: { type: 'boolean' }
        }
    },
    '#/components/schemas/Source': {
        type: 'object',
        required: ['files'],
        properties: { files: { type: 'array', items: { $ref: '#/components/schemas/SourceFile' } } }
    },
    '#/components/schemas/Method': {
        type: 'object',
        required: ['id', 'method'],
        properties: { id: { type: 'integer', format: 'int64' }, method: { type: 'string' } }
    },
    '#/components/schemas/NftOperations': {
        type: 'object',
        required: ['operations'],
        properties: {
            operations: { type: 'array', items: { $ref: '#/components/schemas/NftOperation' } },
            next_from: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/NftOperation': {
        type: 'object',
        required: ['operation', 'utime', 'lt', 'transaction_hash', 'item'],
        properties: {
            operation: { type: 'string' },
            utime: { type: 'integer', format: 'int64' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            transaction_hash: { type: 'string' },
            source: { $ref: '#/components/schemas/AccountAddress' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            item: { $ref: '#/components/schemas/NftItem' }
        }
    },
    '#/components/schemas/JettonOperations': {
        type: 'object',
        required: ['operations'],
        properties: {
            operations: { type: 'array', items: { $ref: '#/components/schemas/JettonOperation' } },
            next_from: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' }
        }
    },
    '#/components/schemas/JettonOperation': {
        type: 'object',
        required: [
            'operation',
            'utime',
            'lt',
            'jetton',
            'transaction_hash',
            'amount',
            'trace_id',
            'query_id'
        ],
        properties: {
            operation: { type: 'string', enum: ['transfer', 'mint', 'burn'] },
            utime: { type: 'integer', format: 'int64' },
            lt: { type: 'integer', format: 'int64', 'x-js-format': 'bigint' },
            transaction_hash: { type: 'string' },
            source: { $ref: '#/components/schemas/AccountAddress' },
            destination: { $ref: '#/components/schemas/AccountAddress' },
            amount: { type: 'string', 'x-js-format': 'bigint' },
            jetton: { $ref: '#/components/schemas/JettonPreview' },
            trace_id: { type: 'string' },
            query_id: { type: 'string', 'x-js-format': 'bigint' },
            payload: {}
        }
    },
    '#/components/schemas/ExecGetMethodArgType': {
        type: 'string',
        enum: ['nan', 'null', 'tinyint', 'int257', 'slice', 'cell_boc_base64', 'slice_boc_hex']
    },
    '#/components/schemas/ExecGetMethodArg': {
        type: 'object',
        required: ['type', 'value'],
        properties: {
            type: { $ref: '#/components/schemas/ExecGetMethodArgType' },
            value: { type: 'string' }
        }
    },
    '#/components/schemas/Protocol': {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string' }, image: { type: 'string' } }
    }
};
/**
 * Base abstract error class for all TonAPI SDK errors
 * Not exported - only used for internal inheritance
 */
abstract class TonApiErrorAbstract extends Error {
    abstract readonly type: string;
    readonly message: string;
    readonly originalCause?: unknown;

    constructor(message: string, cause?: unknown) {
        super(message);
        this.message = message;
        this.originalCause = cause;

        // Maintain proper stack trace in V8
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

/**
 * HTTP error returned by TonAPI
 * Represents 4xx and 5xx responses from the API
 *
 * @example
 * ```typescript
 * if (error instanceof TonApiHttpError) {
 *   console.log('HTTP Status:', error.status);
 *   console.log('Error code:', error.code);
 *   console.log('Request URL:', error.url);
 * }
 * ```
 */
export class TonApiHttpError extends TonApiErrorAbstract {
    readonly type = 'http_error' as const;
    readonly status: number;
    readonly code?: string;
    readonly url: string;

    constructor(status: number, message: string, url: string, code?: string, cause?: unknown) {
        const formattedMessage = code
            ? `HTTP ${status} [${code}]: ${message}`
            : `HTTP ${status}: ${message}`;
        super(formattedMessage, cause);
        this.name = 'TonApiHttpError';
        this.status = status;
        this.url = url;
        this.code = code;
    }
}

/**
 * Network error (connection failed, timeout, etc.)
 * Thrown when the HTTP request itself fails, not when it returns an error response
 *
 * @example
 * ```typescript
 * if (error instanceof TonApiNetworkError) {
 *   console.log('Network error:', error.message);
 *   console.log('Cause:', error.originalCause);
 * }
 * ```
 */
export class TonApiNetworkError extends TonApiErrorAbstract {
    readonly type = 'network_error' as const;

    constructor(message: string, cause: unknown) {
        const formattedMessage = `Network error: ${message}`;
        super(formattedMessage, cause);
        this.name = 'TonApiNetworkError';
    }
}

/**
 * Parsing error for Address, Cell, BigInt, TupleItem, or Unknown
 * Thrown when SDK fails to parse data returned from TonAPI
 *
 * @example
 * ```typescript
 * if (error instanceof TonApiParsingError) {
 *   console.log('Parsing type:', error.parsingType); // 'Address', 'Cell', 'BigInt', 'TupleItem', 'Unknown'
 *   console.log('Error message:', error.message);
 *   console.log('Original response:', error.response);
 * }
 * ```
 */
export class TonApiParsingError extends TonApiErrorAbstract {
    readonly type = 'parsing_error' as const;
    readonly parsingType: 'Address' | 'MaybeAddress' | 'Cell' | 'BigInt' | 'TupleItem' | 'Unknown';
    readonly response: unknown;

    constructor(
        parsingType: 'Address' | 'MaybeAddress' | 'Cell' | 'BigInt' | 'TupleItem' | 'Unknown',
        message: string,
        cause: unknown,
        response: unknown
    ) {
        const formattedMessage = `SDK parsing error [${parsingType}]: ${message}`;
        super(formattedMessage, cause);
        this.name = 'TonApiParsingError';
        this.parsingType = parsingType;
        this.response = response;

        // Log to console with request to report issue
        console.error(
            `[TonAPI SDK] Parsing error occurred. This might be a bug in the SDK.\n` +
                `Please report this issue at: https://github.com/tonkeeper/tonapi-js/issues\n` +
                `Error details:`,
            {
                type: parsingType,
                message: message,
                response: response
            }
        );
    }
}

/**
 * Validation error for client-side input validation
 * Thrown when user provides invalid input (e.g., invalid address string, invalid Cell string)
 * This happens before making any network request
 *
 * @example
 * ```typescript
 * if (error instanceof TonApiValidationError) {
 *   console.log('Validation type:', error.validationType); // 'Address' or 'Cell'
 *   console.log('Error message:', error.message);
 *   console.log('Invalid input:', error.invalidInput);
 * }
 * ```
 */
export class TonApiValidationError extends TonApiErrorAbstract {
    readonly type = 'validation_error' as const;
    readonly validationType: 'Address' | 'Cell';
    readonly invalidInput: string;

    constructor(
        validationType: 'Address' | 'Cell',
        message: string,
        invalidInput: string,
        cause?: unknown
    ) {
        const formattedMessage = `Validation error [${validationType}]: ${message}`;
        super(formattedMessage, cause);
        this.name = 'TonApiValidationError';
        this.validationType = validationType;
        this.invalidInput = invalidInput;
    }
}

/**
 * Unknown error type
 * Thrown when an error occurs that doesn't fit other categories
 *
 * @example
 * ```typescript
 * if (error instanceof TonApiUnknownError) {
 *   console.log('Unknown error:', error.message);
 *   console.log('Cause:', error.originalCause);
 * }
 * ```
 */
export class TonApiUnknownError extends TonApiErrorAbstract {
    readonly type = 'unknown_error' as const;

    constructor(message: string, cause: unknown) {
        const formattedMessage = `Unknown error: ${message}`;
        super(formattedMessage, cause);
        this.name = 'TonApiUnknownError';
    }
}

/**
 * Union type of all possible TonAPI errors
 * Use this type in Result<T> and for error handling
 *
 * @example
 * ```typescript
 * const { data, error } = await getAccount(address);
 *
 * if (error) {
 *   // Type-safe instanceof checks
 *   if (error instanceof TonApiHttpError) {
 *     console.log(`HTTP ${error.status}: ${error.message}`);
 *   } else if (error instanceof TonApiNetworkError) {
 *     console.log(`Network error: ${error.message}`);
 *   } else if (error instanceof TonApiParsingError) {
 *     console.log(`Parsing ${error.parsingType} failed: ${error.message}`);
 *   } else if (error instanceof TonApiValidationError) {
 *     console.log(`Validation ${error.validationType} failed: ${error.message}`);
 *   } else if (error instanceof TonApiUnknownError) {
 *     console.log(`Unknown error: ${error.message}`);
 *   }
 *
 *   // Or use discriminated union
 *   switch (error.type) {
 *     case 'http_error':
 *       console.log(error.status, error.code, error.url);
 *       break;
 *     case 'network_error':
 *       console.log(error.originalCause);
 *       break;
 *     case 'parsing_error':
 *       console.log(error.parsingType);
 *       break;
 *     case 'validation_error':
 *       console.log(error.validationType, error.invalidInput);
 *       break;
 *     case 'unknown_error':
 *       console.log(error.originalCause);
 *       break;
 *   }
 * }
 * ```
 */
export type TonApiError =
    | TonApiHttpError
    | TonApiNetworkError
    | TonApiParsingError
    | TonApiValidationError
    | TonApiUnknownError;

type ComponentRef = keyof typeof components;

/**
 * Custom Promise interface with typed error handling
 * This allows TypeScript to infer the correct error type in .catch() handlers
 * and preserves error typing through .then() and .finally() chains
 */
export interface TonApiPromise<T, E = TonApiError> extends Promise<T> {
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined,
        onrejected?: ((reason: E) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ): TonApiPromise<TResult1 | TResult2, E>;

    catch<TResult = never>(
        onrejected?: ((reason: E) => TResult | PromiseLike<TResult>) | null | undefined
    ): TonApiPromise<T | TResult, E>;

    finally(onfinally?: (() => void) | null | undefined): TonApiPromise<T, E>;
}

export type Result<T> = { data: T; error: null } | { data: null; error: TonApiError };

/**
 * Conditional return type for Advanced API methods with throwOnError support
 * @template T - The data type returned on success
 * @template ThrowOnError - Boolean flag determining if errors should be thrown
 *
 * When ThrowOnError is true: returns Promise<T> (throws on error)
 * When ThrowOnError is false: returns Promise<Result<T>> (returns {data, error})
 */
export type MethodResult<T, ThrowOnError extends boolean = false> = ThrowOnError extends true
    ? Promise<T>
    : Promise<Result<T>>;

/**
 * Sync version of MethodResult for use with async functions
 * (async functions automatically wrap return type in Promise)
 * When ThrowOnError is true, returns T but the Promise will reject with TonApiError
 * When ThrowOnError is false, returns Result<T>
 */
type MethodResultSync<T, ThrowOnError extends boolean = false> = ThrowOnError extends true
    ? T
    : Result<T>;

function snakeToCamel(snakeCaseString: string): string {
    return snakeCaseString.replace(/(_\w)/g, match => match[1]?.toUpperCase() ?? '');
}

function camelToSnake(camel: string): string {
    return camel.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
}

function cellParse(src: string, response: unknown): Cell {
    try {
        return Cell.fromHex(src);
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        throw new TonApiParsingError('Cell', msg, e, response);
    }
}

function parseHexToBigInt(str: string) {
    return str.startsWith('-') ? BigInt(str.slice(1)) * -1n : BigInt(str);
}

function addressToString(value: Address | string | undefined): string | undefined {
    if (value === undefined) {
        return undefined;
    }

    if (typeof value === 'string') {
        // Validate format without parsing
        if (!Address.isFriendly(value) && !Address.isRaw(value)) {
            throw new TonApiValidationError('Address', `Invalid address format: ${value}`, value);
        }
        // Return string as-is, let the API handle it
        return value;
    }

    // Return raw format for Address objects
    return value.toRawString();
}

function tokenOrAddressToString(value: Address | string | undefined): string | undefined {
    if (value === undefined) {
        return undefined;
    }

    if (typeof value === 'string') {
        // Return string as-is without validation
        // This allows cryptocurrency codes like "ton", "btc" to pass through
        return value;
    }

    // Return raw format for Address objects
    return value.toRawString();
}

function cellToString(
    value: Cell | string | undefined,
    format: 'hex' | 'base64'
): string | undefined {
    if (value === undefined) {
        return undefined;
    }

    if (typeof value === 'string') {
        // Parse and convert to expected format
        let cell: Cell;
        try {
            cell = Cell.fromHex(value);
        } catch {
            try {
                cell = Cell.fromBase64(value);
            } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                throw new TonApiValidationError('Cell', `Invalid cell format: ${msg}`, value);
            }
        }
        // Convert to expected format
        return format === 'base64' ? cell.toBoc().toString('base64') : cell.toBoc().toString('hex');
    }

    return format === 'base64' ? value.toBoc().toString('base64') : value.toBoc().toString('hex');
}

/**
 * Prepares and validates API response data
 * @template U - The success response type
 * @template E - The error type (defaults to TonApiError)
 * @throws {E} Always throws error of type E on failure
 */
function prepareResponse<U, E = TonApiError>(
    promise: Promise<any>,
    orSchema?: any
): TonApiPromise<U, E> {
    return promise
        .then(obj => {
            try {
                return prepareResponseData<U>(obj, orSchema, obj);
            } catch (parseError: unknown) {
                if (parseError instanceof TonApiParsingError) {
                    throw parseError;
                }

                const message =
                    parseError instanceof Error
                        ? `SDK parsing error: ${parseError.message}`
                        : 'SDK parsing error: Unknown error';

                throw new TonApiParsingError('Unknown', message, parseError, obj);
            }
        })
        .catch((response: any) => {
            // Re-throw our custom errors without wrapping
            if (
                response instanceof TonApiParsingError ||
                response instanceof TonApiNetworkError ||
                response instanceof TonApiHttpError ||
                response instanceof TonApiValidationError ||
                response instanceof TonApiUnknownError
            ) {
                throw response;
            }

            if (response instanceof Error) {
                throw new TonApiNetworkError(response.message || 'Network error', response);
            }

            if (response && typeof response === 'object' && response.status !== undefined) {
                const status = response.status;
                const url = response.url || '';
                let message: string = 'Request failed';
                let code: string | undefined = undefined;

                if (typeof response.error === 'string') {
                    try {
                        const errorJson = JSONParse(response.error);

                        if (typeof errorJson === 'string') {
                            message = errorJson;
                        } else if (errorJson && typeof errorJson === 'object') {
                            message = errorJson.error || errorJson.message || 'Request failed';
                            code = errorJson.code || errorJson.error_code;
                        }
                    } catch (jsonParseError: unknown) {
                        message = 'Failed to parse error response';
                    }
                }

                throw new TonApiHttpError(status, message, url, code, response);
            }

            throw new TonApiUnknownError('Unknown error occurred', response);
        }) as TonApiPromise<U, E>;
}

function prepareResponseData<U>(obj: any, orSchema?: any, originalResponse: unknown = obj): U {
    const ref = (orSchema && orSchema.$ref) as ComponentRef | undefined;
    const schema = ref ? components[ref] : orSchema;

    if (Array.isArray(obj)) {
        const itemSchema = schema && schema.items;

        return obj.map(item =>
            prepareResponseData(item, itemSchema, originalResponse)
        ) as unknown as U;
    } else if (schema) {
        if (schema.type === 'string') {
            if (schema.format === 'address') {
                try {
                    return Address.parse(obj as string) as U;
                } catch (e) {
                    const msg = e instanceof Error ? e.message : String(e);
                    throw new TonApiParsingError('Address', msg, e, originalResponse);
                }
            }

            if (schema.format === 'maybe-address') {
                if (!obj || obj === '') {
                    return null as U;
                }
                try {
                    return Address.parse(obj as string) as U;
                } catch (e) {
                    const msg = e instanceof Error ? e.message : String(e);
                    throw new TonApiParsingError('MaybeAddress', msg, e, originalResponse);
                }
            }

            if (schema.format === 'cell') {
                return obj && (cellParse(obj as string, originalResponse) as U);
            }

            if (schema['x-js-format'] === 'bigint') {
                try {
                    return BigInt(obj as string) as U;
                } catch (e) {
                    const msg = e instanceof Error ? e.message : String(e);
                    throw new TonApiParsingError('BigInt', msg, e, originalResponse);
                }
            }

            // maybe not used
            if (schema.format === 'cell-base64') {
                try {
                    return obj && (Cell.fromBase64(obj as string) as U);
                } catch (e) {
                    const msg = e instanceof Error ? e.message : String(e);
                    throw new TonApiParsingError('Cell', msg, e, originalResponse);
                }
            }
        }

        if (schema.type === 'integer') {
            if (schema['x-js-format'] === 'bigint') {
                try {
                    return BigInt(obj as number) as U;
                } catch (e) {
                    const msg = e instanceof Error ? e.message : String(e);
                    throw new TonApiParsingError('BigInt', msg, e, originalResponse);
                }
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
                                prepareResponseData(item, itemSchema, originalResponse)
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
                            cell: cellParse(obj.cell as string, originalResponse)
                        } as U;
                    case 'slice':
                        return {
                            type: 'slice',
                            slice: cellParse(obj.slice as string, originalResponse)
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
                        throw new TonApiParsingError(
                            'TupleItem',
                            `Unknown tuple item type: ${obj.type}`,
                            obj,
                            originalResponse
                        );
                }
            }
        }
    }

    // Case of non tuple-item object
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce(
            (acc, key) => {
                if (!schema) {
                    // If schema is undefined, do not convert keys
                    acc[key] = prepareResponseData(obj[key], undefined, originalResponse);
                    return acc;
                }

                const objSchema = schema.properties && schema.properties[key];
                const isDefinedProperty = !!objSchema;

                // Only convert to camelCase if it's a defined property
                const camelCaseKey = isDefinedProperty ? snakeToCamel(key) : key;

                // Use the specific property schema or the additionalProperties schema
                const propertySchema = isDefinedProperty ? objSchema : schema.additionalProperties;

                acc[camelCaseKey] = prepareResponseData(obj[key], propertySchema, originalResponse);
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
            // Check x-js-format first for custom formats
            if (schema['x-js-format'] === 'token-or-address') {
                return tokenOrAddressToString(data as Address | string);
            }

            if (schema['x-js-format'] === 'bigint') {
                return (data as bigint).toString();
            }

            // Then check standard format field
            if (schema.format === 'address') {
                return addressToString(data as Address | string);
            }

            if (schema.format === 'cell') {
                return cellToString(data as Cell | string, 'hex');
            }

            if (schema.format === 'cell-base64') {
                return cellToString(data as Cell | string, 'base64');
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

/**
 * TonAPI Client - instance-based approach (recommended)
 *
 * @example
 * ```typescript
 * const client = new TonApiClient({
 *   baseUrl: 'https://tonapi.io',
 *   apiKey: process.env.TON_API_KEY
 * });
 *
 * try {
 *   const account = await client.getAccount(address);
 *   console.log(account);
 * } catch (error) {
 *   console.error('Error:', error.message);
 * }
 * ```
 */
export class TonApiClient {
    private http: HttpClient;

    constructor(apiConfig: ApiConfig = {}) {
        this.http = new HttpClient(apiConfig);
    }

    /**
     * @description Get the openapi.json file
     *
     * @tags Utilities
     * @name GetOpenapiJson
     * @request GET:/v2/openapi.json
     */
    /**
     * @description Get the openapi.json file
     *
     * @tags Utilities
     * @name GetOpenapiJson
     * @request GET:/v2/openapi.json
     */
    getOpenapiJson(params: RequestParams = {}): TonApiPromise<GetOpenapiJsonData, TonApiError> {
        const req = this.http.request<GetOpenapiJsonData, TonApiError>({
            path: `/v2/openapi.json`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetOpenapiJsonData, TonApiError>(req, {});
    }

    /**
     * @description Get the openapi.yml file
     *
     * @tags Utilities
     * @name GetOpenapiYml
     * @request GET:/v2/openapi.yml
     */
    /**
     * @description Get the openapi.yml file
     *
     * @tags Utilities
     * @name GetOpenapiYml
     * @request GET:/v2/openapi.yml
     */
    getOpenapiYml(params: RequestParams = {}): TonApiPromise<GetOpenapiYmlData, TonApiError> {
        const req = this.http.request<GetOpenapiYmlData, TonApiError>({
            path: `/v2/openapi.yml`,
            method: 'GET',
            ...params
        });

        return prepareResponse<GetOpenapiYmlData, TonApiError>(req);
    }

    /**
     * @description Status
     *
     * @tags Utilities
     * @name Status
     * @request GET:/v2/status
     */
    /**
     * @description Status
     *
     * @tags Utilities
     * @name Status
     * @request GET:/v2/status
     */
    status(params: RequestParams = {}): TonApiPromise<StatusData, TonApiError> {
        const req = this.http.request<StatusData, TonApiError>({
            path: `/v2/status`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<StatusData, TonApiError>(req, {
            $ref: '#/components/schemas/ServiceStatus'
        });
    }

    /**
     * @description parse address and display in all formats
     *
     * @tags Utilities
     * @name AddressParse
     * @request GET:/v2/address/{account_id}/parse
     */
    /**
     * @description parse address and display in all formats
     *
     * @tags Utilities
     * @name AddressParse
     * @request GET:/v2/address/{account_id}/parse
     */
    addressParse(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<AddressParseData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<AddressParseData, TonApiError>({
            path: `/v2/address/${accountId}/parse`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<AddressParseData, TonApiError>(req, {
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

    /**
     * @description Get reduced blockchain blocks data
     *
     * @tags Blockchain
     * @name GetReducedBlockchainBlocks
     * @request GET:/v2/blockchain/reduced/blocks
     */
    /**
     * @description Get reduced blockchain blocks data
     *
     * @tags Blockchain
     * @name GetReducedBlockchainBlocks
     * @request GET:/v2/blockchain/reduced/blocks
     */
    getReducedBlockchainBlocks(
        query: {
            /** @format int64 */
            from: number;
            /** @format int64 */
            to: number;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetReducedBlockchainBlocksData, TonApiError> {
        const req = this.http.request<GetReducedBlockchainBlocksData, TonApiError>({
            path: `/v2/blockchain/reduced/blocks`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetReducedBlockchainBlocksData, TonApiError>(req, {
            $ref: '#/components/schemas/ReducedBlocks'
        });
    }

    /**
     * @description Get blockchain block data
     *
     * @tags Blockchain
     * @name GetBlockchainBlock
     * @request GET:/v2/blockchain/blocks/{block_id}
     */
    /**
     * @description Get blockchain block data
     *
     * @tags Blockchain
     * @name GetBlockchainBlock
     * @request GET:/v2/blockchain/blocks/{block_id}
     */
    getBlockchainBlock(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainBlockData, TonApiError> {
        const req = this.http.request<GetBlockchainBlockData, TonApiError>({
            path: `/v2/blockchain/blocks/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainBlockData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainBlock'
        });
    }

    /**
     * @description Download blockchain block BOC
     *
     * @tags Blockchain
     * @name DownloadBlockchainBlockBoc
     * @request GET:/v2/blockchain/blocks/{block_id}/boc
     */
    /**
     * @description Download blockchain block BOC
     *
     * @tags Blockchain
     * @name DownloadBlockchainBlockBoc
     * @request GET:/v2/blockchain/blocks/{block_id}/boc
     */
    downloadBlockchainBlockBoc(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<DownloadBlockchainBlockBocData, TonApiError> {
        const req = this.http.request<DownloadBlockchainBlockBocData, TonApiError>({
            path: `/v2/blockchain/blocks/${blockId}/boc`,
            method: 'GET',
            ...params
        });

        return prepareResponse<DownloadBlockchainBlockBocData, TonApiError>(req);
    }

    /**
     * @description Get blockchain block shards
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainShards
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
     */
    /**
     * @description Get blockchain block shards
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainShards
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
     */
    getBlockchainMasterchainShards(
        masterchainSeqno: number,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainMasterchainShardsData, TonApiError> {
        const req = this.http.request<GetBlockchainMasterchainShardsData, TonApiError>({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/shards`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainMasterchainShardsData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainBlockShards'
        });
    }

    /**
     * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainBlocks
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
     */
    /**
     * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainBlocks
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
     */
    getBlockchainMasterchainBlocks(
        masterchainSeqno: number,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainMasterchainBlocksData, TonApiError> {
        const req = this.http.request<GetBlockchainMasterchainBlocksData, TonApiError>({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/blocks`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainMasterchainBlocksData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainBlocks'
        });
    }

    /**
     * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainTransactions
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
     */
    /**
     * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainTransactions
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
     */
    getBlockchainMasterchainTransactions(
        masterchainSeqno: number,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainMasterchainTransactionsData, TonApiError> {
        const req = this.http.request<GetBlockchainMasterchainTransactionsData, TonApiError>({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/transactions`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainMasterchainTransactionsData, TonApiError>(req, {
            $ref: '#/components/schemas/Transactions'
        });
    }

    /**
     * @description Get blockchain config from a specific block, if present.
     *
     * @tags Blockchain
     * @name GetBlockchainConfigFromBlock
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
     */
    /**
     * @description Get blockchain config from a specific block, if present.
     *
     * @tags Blockchain
     * @name GetBlockchainConfigFromBlock
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
     */
    getBlockchainConfigFromBlock(
        masterchainSeqno: number,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainConfigFromBlockData, TonApiError> {
        const req = this.http.request<GetBlockchainConfigFromBlockData, TonApiError>({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/config`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainConfigFromBlockData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainConfig'
        });
    }

    /**
     * @description Get raw blockchain config from a specific block, if present.
     *
     * @tags Blockchain
     * @name GetRawBlockchainConfigFromBlock
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
     */
    /**
     * @description Get raw blockchain config from a specific block, if present.
     *
     * @tags Blockchain
     * @name GetRawBlockchainConfigFromBlock
     * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
     */
    getRawBlockchainConfigFromBlock(
        masterchainSeqno: number,
        params: RequestParams = {}
    ): TonApiPromise<GetRawBlockchainConfigFromBlockData, TonApiError> {
        const req = this.http.request<GetRawBlockchainConfigFromBlockData, TonApiError>({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/config/raw`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockchainConfigFromBlockData, TonApiError>(req, {
            $ref: '#/components/schemas/RawBlockchainConfig'
        });
    }

    /**
     * @description Get transactions from block
     *
     * @tags Blockchain
     * @name GetBlockchainBlockTransactions
     * @request GET:/v2/blockchain/blocks/{block_id}/transactions
     */
    /**
     * @description Get transactions from block
     *
     * @tags Blockchain
     * @name GetBlockchainBlockTransactions
     * @request GET:/v2/blockchain/blocks/{block_id}/transactions
     */
    getBlockchainBlockTransactions(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainBlockTransactionsData, TonApiError> {
        const req = this.http.request<GetBlockchainBlockTransactionsData, TonApiError>({
            path: `/v2/blockchain/blocks/${blockId}/transactions`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainBlockTransactionsData, TonApiError>(req, {
            $ref: '#/components/schemas/Transactions'
        });
    }

    /**
     * @description Get transaction data
     *
     * @tags Blockchain
     * @name GetBlockchainTransaction
     * @request GET:/v2/blockchain/transactions/{transaction_id}
     */
    /**
     * @description Get transaction data
     *
     * @tags Blockchain
     * @name GetBlockchainTransaction
     * @request GET:/v2/blockchain/transactions/{transaction_id}
     */
    getBlockchainTransaction(
        transactionId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainTransactionData, TonApiError> {
        const req = this.http.request<GetBlockchainTransactionData, TonApiError>({
            path: `/v2/blockchain/transactions/${transactionId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainTransactionData, TonApiError>(req, {
            $ref: '#/components/schemas/Transaction'
        });
    }

    /**
     * @description Get transaction data by message hash
     *
     * @tags Blockchain
     * @name GetBlockchainTransactionByMessageHash
     * @request GET:/v2/blockchain/messages/{msg_id}/transaction
     */
    /**
     * @description Get transaction data by message hash
     *
     * @tags Blockchain
     * @name GetBlockchainTransactionByMessageHash
     * @request GET:/v2/blockchain/messages/{msg_id}/transaction
     */
    getBlockchainTransactionByMessageHash(
        msgId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainTransactionByMessageHashData, TonApiError> {
        const req = this.http.request<GetBlockchainTransactionByMessageHashData, TonApiError>({
            path: `/v2/blockchain/messages/${msgId}/transaction`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainTransactionByMessageHashData, TonApiError>(req, {
            $ref: '#/components/schemas/Transaction'
        });
    }

    /**
     * @description Get blockchain validators
     *
     * @tags Blockchain
     * @name GetBlockchainValidators
     * @request GET:/v2/blockchain/validators
     */
    /**
     * @description Get blockchain validators
     *
     * @tags Blockchain
     * @name GetBlockchainValidators
     * @request GET:/v2/blockchain/validators
     */
    getBlockchainValidators(
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainValidatorsData, TonApiError> {
        const req = this.http.request<GetBlockchainValidatorsData, TonApiError>({
            path: `/v2/blockchain/validators`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainValidatorsData, TonApiError>(req, {
            $ref: '#/components/schemas/Validators'
        });
    }

    /**
     * @description Get last known masterchain block
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainHead
     * @request GET:/v2/blockchain/masterchain-head
     */
    /**
     * @description Get last known masterchain block
     *
     * @tags Blockchain
     * @name GetBlockchainMasterchainHead
     * @request GET:/v2/blockchain/masterchain-head
     */
    getBlockchainMasterchainHead(
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainMasterchainHeadData, TonApiError> {
        const req = this.http.request<GetBlockchainMasterchainHeadData, TonApiError>({
            path: `/v2/blockchain/masterchain-head`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainMasterchainHeadData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainBlock'
        });
    }

    /**
     * @description Get low-level information about an account taken directly from the blockchain.
     *
     * @tags Blockchain
     * @name GetBlockchainRawAccount
     * @request GET:/v2/blockchain/accounts/{account_id}
     */
    /**
     * @description Get low-level information about an account taken directly from the blockchain.
     *
     * @tags Blockchain
     * @name GetBlockchainRawAccount
     * @request GET:/v2/blockchain/accounts/{account_id}
     */
    getBlockchainRawAccount(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainRawAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetBlockchainRawAccountData, TonApiError>({
            path: `/v2/blockchain/accounts/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainRawAccountData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainRawAccount'
        });
    }

    /**
     * @description Get account transactions
     *
     * @tags Blockchain
     * @name GetBlockchainAccountTransactions
     * @request GET:/v2/blockchain/accounts/{account_id}/transactions
     */
    /**
     * @description Get account transactions
     *
     * @tags Blockchain
     * @name GetBlockchainAccountTransactions
     * @request GET:/v2/blockchain/accounts/{account_id}/transactions
     */
    getBlockchainAccountTransactions(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetBlockchainAccountTransactionsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetBlockchainAccountTransactionsData, TonApiError>({
            path: `/v2/blockchain/accounts/${accountId}/transactions`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainAccountTransactionsData, TonApiError>(req, {
            $ref: '#/components/schemas/Transactions'
        });
    }

    /**
     * @description Execute get method for account
     *
     * @tags Blockchain
     * @name ExecGetMethodForBlockchainAccount
     * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
     */
    /**
     * @description Execute get method for account
     *
     * @tags Blockchain
     * @name ExecGetMethodForBlockchainAccount
     * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
     */
    execGetMethodForBlockchainAccount(
        accountId_Address: Address | string,
        methodName: string,
        query?: {
            /**
             * Array of method arguments in string format. Supported value formats:
             * - "NaN" for Not-a-Number type
             * - "Null" for Null type
             * - Decimal integers for tinyint type (e.g., "100500")
             * - 0x-prefixed hex strings for int257 type (e.g., "0xfa01d78381ae32")
             * - TON blockchain addresses for slice type (e.g., "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e")
             * - Base64-encoded BOC for cell type (e.g., "te6ccgEBAQEAAgAAAA==")
             * - Hex-encoded BOC for slice type (e.g., "b5ee9c72010101010002000000")
             * @example ["0:9a33970f617bcd71acf2cd28357c067aa31859c02820d8f01d74c88063a8f4d8"]
             */
            args?: string[];
        },
        params: RequestParams = {}
    ): TonApiPromise<ExecGetMethodForBlockchainAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<ExecGetMethodForBlockchainAccountData, TonApiError>({
            path: `/v2/blockchain/accounts/${accountId}/methods/${methodName}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<ExecGetMethodForBlockchainAccountData, TonApiError>(req, {
            $ref: '#/components/schemas/MethodExecutionResult'
        });
    }

    /**
     * @description Execute get method for account
     *
     * @tags Blockchain
     * @name ExecGetMethodWithBodyForBlockchainAccount
     * @request POST:/v2/blockchain/accounts/{account_id}/methods/{method_name}
     */
    /**
     * @description Execute get method for account
     *
     * @tags Blockchain
     * @name ExecGetMethodWithBodyForBlockchainAccount
     * @request POST:/v2/blockchain/accounts/{account_id}/methods/{method_name}
     */
    execGetMethodWithBodyForBlockchainAccount(
        accountId_Address: Address | string,
        methodName: string,
        data: {
            args: ExecGetMethodArg[];
        },
        params: RequestParams = {}
    ): TonApiPromise<ExecGetMethodWithBodyForBlockchainAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<ExecGetMethodWithBodyForBlockchainAccountData, TonApiError>({
            path: `/v2/blockchain/accounts/${accountId}/methods/${methodName}`,
            method: 'POST',
            body: prepareRequestData(data, {
                type: 'object',
                required: ['args'],
                properties: {
                    args: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/ExecGetMethodArg' }
                    }
                }
            }),
            format: 'json',
            ...params
        });

        return prepareResponse<ExecGetMethodWithBodyForBlockchainAccountData, TonApiError>(req, {
            $ref: '#/components/schemas/MethodExecutionResult'
        });
    }

    /**
     * @description Send message to blockchain
     *
     * @tags Blockchain
     * @name SendBlockchainMessage
     * @request POST:/v2/blockchain/message
     */
    /**
     * @description Send message to blockchain
     *
     * @tags Blockchain
     * @name SendBlockchainMessage
     * @request POST:/v2/blockchain/message
     */
    sendBlockchainMessage(
        data: {
            /** @format cell */
            boc?: Cell | string;
            /** @maxItems 5 */
            batch?: (Cell | string)[];
            meta?: Record<string, string>;
        },
        params: RequestParams = {}
    ): TonApiPromise<SendBlockchainMessageData, TonApiError> {
        const req = this.http.request<SendBlockchainMessageData, TonApiError>({
            path: `/v2/blockchain/message`,
            method: 'POST',
            body: prepareRequestData(data, {
                type: 'object',
                properties: {
                    boc: { type: 'string', format: 'cell' },
                    batch: {
                        type: 'array',
                        maxItems: 5,
                        items: { type: 'string', format: 'cell' }
                    },
                    meta: { type: 'object', additionalProperties: { type: 'string' } }
                }
            }),
            ...params
        });

        return prepareResponse<SendBlockchainMessageData, TonApiError>(req);
    }

    /**
     * @description Get blockchain config
     *
     * @tags Blockchain
     * @name GetBlockchainConfig
     * @request GET:/v2/blockchain/config
     */
    /**
     * @description Get blockchain config
     *
     * @tags Blockchain
     * @name GetBlockchainConfig
     * @request GET:/v2/blockchain/config
     */
    getBlockchainConfig(
        params: RequestParams = {}
    ): TonApiPromise<GetBlockchainConfigData, TonApiError> {
        const req = this.http.request<GetBlockchainConfigData, TonApiError>({
            path: `/v2/blockchain/config`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetBlockchainConfigData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainConfig'
        });
    }

    /**
     * @description Get raw blockchain config
     *
     * @tags Blockchain
     * @name GetRawBlockchainConfig
     * @request GET:/v2/blockchain/config/raw
     */
    /**
     * @description Get raw blockchain config
     *
     * @tags Blockchain
     * @name GetRawBlockchainConfig
     * @request GET:/v2/blockchain/config/raw
     */
    getRawBlockchainConfig(
        params: RequestParams = {}
    ): TonApiPromise<GetRawBlockchainConfigData, TonApiError> {
        const req = this.http.request<GetRawBlockchainConfigData, TonApiError>({
            path: `/v2/blockchain/config/raw`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockchainConfigData, TonApiError>(req, {
            $ref: '#/components/schemas/RawBlockchainConfig'
        });
    }

    /**
     * @description Blockchain account inspect
     *
     * @tags Blockchain
     * @name BlockchainAccountInspect
     * @request GET:/v2/blockchain/accounts/{account_id}/inspect
     */
    /**
     * @description Blockchain account inspect
     *
     * @tags Blockchain
     * @name BlockchainAccountInspect
     * @request GET:/v2/blockchain/accounts/{account_id}/inspect
     */
    blockchainAccountInspect(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<BlockchainAccountInspectData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<BlockchainAccountInspectData, TonApiError>({
            path: `/v2/blockchain/accounts/${accountId}/inspect`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<BlockchainAccountInspectData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainAccountInspect'
        });
    }

    /**
     * @description Get library cell
     *
     * @tags Blockchain
     * @name GetLibraryByHash
     * @request GET:/v2/blockchain/libraries/{hash}
     */
    /**
     * @description Get library cell
     *
     * @tags Blockchain
     * @name GetLibraryByHash
     * @request GET:/v2/blockchain/libraries/{hash}
     */
    getLibraryByHash(
        hash: string,
        params: RequestParams = {}
    ): TonApiPromise<GetLibraryByHashData, TonApiError> {
        const req = this.http.request<GetLibraryByHashData, TonApiError>({
            path: `/v2/blockchain/libraries/${hash}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetLibraryByHashData, TonApiError>(req, {
            $ref: '#/components/schemas/BlockchainLibrary'
        });
    }

    /**
     * @description Get human-friendly information about several accounts without low-level details.
     *
     * @tags Accounts
     * @name GetAccounts
     * @request POST:/v2/accounts/_bulk
     */
    /**
     * @description Get human-friendly information about several accounts without low-level details.
     *
     * @tags Accounts
     * @name GetAccounts
     * @request POST:/v2/accounts/_bulk
     */
    getAccounts(
        data: {
            accountIds: (Address | string)[];
        },
        query?: {
            /** @example "usd" */
            currency?: string;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountsData, TonApiError> {
        const req = this.http.request<GetAccountsData, TonApiError>({
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

        return prepareResponse<GetAccountsData, TonApiError>(req, {
            $ref: '#/components/schemas/Accounts'
        });
    }

    /**
     * @description Get human-friendly information about an account without low-level details.
     *
     * @tags Accounts
     * @name GetAccount
     * @request GET:/v2/accounts/{account_id}
     */
    /**
     * @description Get human-friendly information about an account without low-level details.
     *
     * @tags Accounts
     * @name GetAccount
     * @request GET:/v2/accounts/{account_id}
     */
    getAccount(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountData, TonApiError>({
            path: `/v2/accounts/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountData, TonApiError>(req, {
            $ref: '#/components/schemas/Account'
        });
    }

    /**
     * @description Get account's domains
     *
     * @tags Accounts
     * @name AccountDnsBackResolve
     * @request GET:/v2/accounts/{account_id}/dns/backresolve
     */
    /**
     * @description Get account's domains
     *
     * @tags Accounts
     * @name AccountDnsBackResolve
     * @request GET:/v2/accounts/{account_id}/dns/backresolve
     */
    accountDnsBackResolve(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<AccountDnsBackResolveData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<AccountDnsBackResolveData, TonApiError>({
            path: `/v2/accounts/${accountId}/dns/backresolve`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<AccountDnsBackResolveData, TonApiError>(req, {
            $ref: '#/components/schemas/DomainNames'
        });
    }

    /**
     * @description Get all Jettons balances by owner address
     *
     * @tags Accounts
     * @name GetAccountJettonsBalances
     * @request GET:/v2/accounts/{account_id}/jettons
     */
    /**
     * @description Get all Jettons balances by owner address
     *
     * @tags Accounts
     * @name GetAccountJettonsBalances
     * @request GET:/v2/accounts/{account_id}/jettons
     */
    getAccountJettonsBalances(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetAccountJettonsBalancesData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountJettonsBalancesData, TonApiError>({
            path: `/v2/accounts/${accountId}/jettons`,
            method: 'GET',
            query: query,
            queryImplode: ['currencies', 'supported_extensions'],
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountJettonsBalancesData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonsBalances'
        });
    }

    /**
     * @description Get Jetton balance by owner address
     *
     * @tags Accounts
     * @name GetAccountJettonBalance
     * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}
     */
    /**
     * @description Get Jetton balance by owner address
     *
     * @tags Accounts
     * @name GetAccountJettonBalance
     * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}
     */
    getAccountJettonBalance(
        accountId_Address: Address | string,
        jettonId_Address: Address | string,
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
    ): TonApiPromise<GetAccountJettonBalanceData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const jettonId = addressToString(jettonId_Address);
        const req = this.http.request<GetAccountJettonBalanceData, TonApiError>({
            path: `/v2/accounts/${accountId}/jettons/${jettonId}`,
            method: 'GET',
            query: query,
            queryImplode: ['currencies', 'supported_extensions'],
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountJettonBalanceData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonBalance'
        });
    }

    /**
     * @description Get the transfer jettons history for account
     *
     * @tags Accounts
     * @name GetAccountJettonsHistory
     * @request GET:/v2/accounts/{account_id}/jettons/history
     */
    /**
     * @description Get the transfer jettons history for account
     *
     * @tags Accounts
     * @name GetAccountJettonsHistory
     * @request GET:/v2/accounts/{account_id}/jettons/history
     */
    getAccountJettonsHistory(
        accountId_Address: Address | string,
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
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountJettonsHistoryData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountJettonsHistoryData, TonApiError>({
            path: `/v2/accounts/${accountId}/jettons/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountJettonsHistoryData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonOperations'
        });
    }

    /**
     * @description Please use `getJettonAccountHistoryByID`` instead
     *
     * @tags Accounts
     * @name GetAccountJettonHistoryById
     * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
     * @deprecated
     */
    /**
     * @description Please use `getJettonAccountHistoryByID`` instead
     *
     * @tags Accounts
     * @name GetAccountJettonHistoryById
     * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
     * @deprecated
     */
    getAccountJettonHistoryById(
        accountId_Address: Address | string,
        jettonId_Address: Address | string,
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
    ): TonApiPromise<GetAccountJettonHistoryByIdData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const jettonId = addressToString(jettonId_Address);
        const req = this.http.request<GetAccountJettonHistoryByIdData, TonApiError>({
            path: `/v2/accounts/${accountId}/jettons/${jettonId}/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountJettonHistoryByIdData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvents'
        });
    }

    /**
     * @description Get all NFT items by owner address
     *
     * @tags Accounts
     * @name GetAccountNftItems
     * @request GET:/v2/accounts/{account_id}/nfts
     */
    /**
     * @description Get all NFT items by owner address
     *
     * @tags Accounts
     * @name GetAccountNftItems
     * @request GET:/v2/accounts/{account_id}/nfts
     */
    getAccountNftItems(
        accountId_Address: Address | string,
        query?: {
            /**
             * nft collection
             * @format address
             * @example "0:06d811f426598591b32b2c49f29f66c821368e4acb1de16762b04e0174532465"
             */
            collection?: Address | string;
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
    ): TonApiPromise<GetAccountNftItemsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountNftItemsData, TonApiError>({
            path: `/v2/accounts/${accountId}/nfts`,
            method: 'GET',
            query: query && {
                ...query,
                collection: addressToString(query.collection)
            },
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountNftItemsData, TonApiError>(req, {
            $ref: '#/components/schemas/NftItems'
        });
    }

    /**
     * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Accounts
     * @name GetAccountEvents
     * @request GET:/v2/accounts/{account_id}/events
     */
    /**
     * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Accounts
     * @name GetAccountEvents
     * @request GET:/v2/accounts/{account_id}/events
     */
    getAccountEvents(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetAccountEventsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountEventsData, TonApiError>({
            path: `/v2/accounts/${accountId}/events`,
            method: 'GET',
            query: query,
            queryImplode: ['initiator'],
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountEventsData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvents'
        });
    }

    /**
     * @description Get event for an account by event_id
     *
     * @tags Accounts
     * @name GetAccountEvent
     * @request GET:/v2/accounts/{account_id}/events/{event_id}
     */
    /**
     * @description Get event for an account by event_id
     *
     * @tags Accounts
     * @name GetAccountEvent
     * @request GET:/v2/accounts/{account_id}/events/{event_id}
     */
    getAccountEvent(
        accountId_Address: Address | string,
        eventId: string,
        query?: {
            /**
             * filter actions where requested account is not real subject (for example sender or receiver jettons)
             * @default false
             */
            subject_only?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountEventData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountEventData, TonApiError>({
            path: `/v2/accounts/${accountId}/events/${eventId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountEventData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvent'
        });
    }

    /**
     * @description Get traces for account
     *
     * @tags Accounts
     * @name GetAccountTraces
     * @request GET:/v2/accounts/{account_id}/traces
     */
    /**
     * @description Get traces for account
     *
     * @tags Accounts
     * @name GetAccountTraces
     * @request GET:/v2/accounts/{account_id}/traces
     */
    getAccountTraces(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetAccountTracesData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountTracesData, TonApiError>({
            path: `/v2/accounts/${accountId}/traces`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountTracesData, TonApiError>(req, {
            $ref: '#/components/schemas/TraceIDs'
        });
    }

    /**
     * @description Get all subscriptions by wallet address
     *
     * @tags Accounts
     * @name GetAccountSubscriptions
     * @request GET:/v2/accounts/{account_id}/subscriptions
     */
    /**
     * @description Get all subscriptions by wallet address
     *
     * @tags Accounts
     * @name GetAccountSubscriptions
     * @request GET:/v2/accounts/{account_id}/subscriptions
     */
    getAccountSubscriptions(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountSubscriptionsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountSubscriptionsData, TonApiError>({
            path: `/v2/accounts/${accountId}/subscriptions`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountSubscriptionsData, TonApiError>(req, {
            $ref: '#/components/schemas/Subscriptions'
        });
    }

    /**
     * @description Update internal cache for a particular account
     *
     * @tags Accounts
     * @name ReindexAccount
     * @request POST:/v2/accounts/{account_id}/reindex
     */
    /**
     * @description Update internal cache for a particular account
     *
     * @tags Accounts
     * @name ReindexAccount
     * @request POST:/v2/accounts/{account_id}/reindex
     */
    reindexAccount(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<ReindexAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<ReindexAccountData, TonApiError>({
            path: `/v2/accounts/${accountId}/reindex`,
            method: 'POST',
            ...params
        });

        return prepareResponse<ReindexAccountData, TonApiError>(req);
    }

    /**
     * @description Search by account domain name
     *
     * @tags Accounts
     * @name SearchAccounts
     * @request GET:/v2/accounts/search
     */
    /**
     * @description Search by account domain name
     *
     * @tags Accounts
     * @name SearchAccounts
     * @request GET:/v2/accounts/search
     */
    searchAccounts(
        query: {
            /**
             * @minLength 3
             * @maxLength 15
             */
            name: string;
        },
        params: RequestParams = {}
    ): TonApiPromise<SearchAccountsData, TonApiError> {
        const req = this.http.request<SearchAccountsData, TonApiError>({
            path: `/v2/accounts/search`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<SearchAccountsData, TonApiError>(req, {
            $ref: '#/components/schemas/FoundAccounts'
        });
    }

    /**
     * @description Get expiring account .ton dns
     *
     * @tags Accounts
     * @name GetAccountDnsExpiring
     * @request GET:/v2/accounts/{account_id}/dns/expiring
     */
    /**
     * @description Get expiring account .ton dns
     *
     * @tags Accounts
     * @name GetAccountDnsExpiring
     * @request GET:/v2/accounts/{account_id}/dns/expiring
     */
    getAccountDnsExpiring(
        accountId_Address: Address | string,
        query?: {
            /**
             * number of days before expiration
             * @min 1
             * @max 3660
             */
            period?: number;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountDnsExpiringData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountDnsExpiringData, TonApiError>({
            path: `/v2/accounts/${accountId}/dns/expiring`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountDnsExpiringData, TonApiError>(req, {
            $ref: '#/components/schemas/DnsExpiring'
        });
    }

    /**
     * @description Get public key by account id
     *
     * @tags Accounts
     * @name GetAccountPublicKey
     * @request GET:/v2/accounts/{account_id}/publickey
     */
    /**
     * @description Get public key by account id
     *
     * @tags Accounts
     * @name GetAccountPublicKey
     * @request GET:/v2/accounts/{account_id}/publickey
     */
    getAccountPublicKey(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountPublicKeyData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountPublicKeyData, TonApiError>({
            path: `/v2/accounts/${accountId}/publickey`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountPublicKeyData, TonApiError>(req, {
            type: 'object',
            required: ['public_key'],
            properties: { public_key: { type: 'string' } }
        });
    }

    /**
     * @description Get account's multisigs
     *
     * @tags Accounts
     * @name GetAccountMultisigs
     * @request GET:/v2/accounts/{account_id}/multisigs
     */
    /**
     * @description Get account's multisigs
     *
     * @tags Accounts
     * @name GetAccountMultisigs
     * @request GET:/v2/accounts/{account_id}/multisigs
     */
    getAccountMultisigs(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountMultisigsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountMultisigsData, TonApiError>({
            path: `/v2/accounts/${accountId}/multisigs`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountMultisigsData, TonApiError>(req, {
            $ref: '#/components/schemas/Multisigs'
        });
    }

    /**
     * @description Get account's balance change
     *
     * @tags Accounts
     * @name GetAccountDiff
     * @request GET:/v2/accounts/{account_id}/diff
     */
    /**
     * @description Get account's balance change
     *
     * @tags Accounts
     * @name GetAccountDiff
     * @request GET:/v2/accounts/{account_id}/diff
     */
    getAccountDiff(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetAccountDiffData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountDiffData, TonApiError>({
            path: `/v2/accounts/${accountId}/diff`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountDiffData, TonApiError>(req, {
            type: 'object',
            required: ['balance_change'],
            properties: { balance_change: { type: 'integer', format: 'int64' } }
        });
    }

    /**
     * @description Get the transfer history of extra currencies for an account.
     *
     * @tags Accounts
     * @name GetAccountExtraCurrencyHistoryById
     * @request GET:/v2/accounts/{account_id}/extra-currency/{id}/history
     */
    /**
     * @description Get the transfer history of extra currencies for an account.
     *
     * @tags Accounts
     * @name GetAccountExtraCurrencyHistoryById
     * @request GET:/v2/accounts/{account_id}/extra-currency/{id}/history
     */
    getAccountExtraCurrencyHistoryById(
        accountId_Address: Address | string,
        id: number,
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
    ): TonApiPromise<GetAccountExtraCurrencyHistoryByIdData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountExtraCurrencyHistoryByIdData, TonApiError>({
            path: `/v2/accounts/${accountId}/extra-currency/${id}/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountExtraCurrencyHistoryByIdData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvents'
        });
    }

    /**
     * @description Get the transfer jetton history for account and jetton
     *
     * @tags Accounts
     * @name GetJettonAccountHistoryById
     * @request GET:/v2/jettons/{jetton_id}/accounts/{account_id}/history
     */
    /**
     * @description Get the transfer jetton history for account and jetton
     *
     * @tags Accounts
     * @name GetJettonAccountHistoryById
     * @request GET:/v2/jettons/{jetton_id}/accounts/{account_id}/history
     */
    getJettonAccountHistoryById(
        accountId_Address: Address | string,
        jettonId_Address: Address | string,
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
    ): TonApiPromise<GetJettonAccountHistoryByIdData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const jettonId = addressToString(jettonId_Address);
        const req = this.http.request<GetJettonAccountHistoryByIdData, TonApiError>({
            path: `/v2/jettons/${jettonId}/accounts/${accountId}/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonAccountHistoryByIdData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonOperations'
        });
    }

    /**
     * @description Get the transfer nft history
     *
     * @tags NFT
     * @name GetAccountNftHistory
     * @request GET:/v2/accounts/{account_id}/nfts/history
     */
    /**
     * @description Get the transfer nft history
     *
     * @tags NFT
     * @name GetAccountNftHistory
     * @request GET:/v2/accounts/{account_id}/nfts/history
     */
    getAccountNftHistory(
        accountId_Address: Address | string,
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
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountNftHistoryData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountNftHistoryData, TonApiError>({
            path: `/v2/accounts/${accountId}/nfts/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountNftHistoryData, TonApiError>(req, {
            $ref: '#/components/schemas/NftOperations'
        });
    }

    /**
     * @description Get NFT collections
     *
     * @tags NFT
     * @name GetNftCollections
     * @request GET:/v2/nfts/collections
     */
    /**
     * @description Get NFT collections
     *
     * @tags NFT
     * @name GetNftCollections
     * @request GET:/v2/nfts/collections
     */
    getNftCollections(
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
    ): TonApiPromise<GetNftCollectionsData, TonApiError> {
        const req = this.http.request<GetNftCollectionsData, TonApiError>({
            path: `/v2/nfts/collections`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetNftCollectionsData, TonApiError>(req, {
            $ref: '#/components/schemas/NftCollections'
        });
    }

    /**
     * @description Get NFT collection by collection address
     *
     * @tags NFT
     * @name GetNftCollection
     * @request GET:/v2/nfts/collections/{account_id}
     */
    /**
     * @description Get NFT collection by collection address
     *
     * @tags NFT
     * @name GetNftCollection
     * @request GET:/v2/nfts/collections/{account_id}
     */
    getNftCollection(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetNftCollectionData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetNftCollectionData, TonApiError>({
            path: `/v2/nfts/collections/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetNftCollectionData, TonApiError>(req, {
            $ref: '#/components/schemas/NftCollection'
        });
    }

    /**
     * @description Get NFT collection items by their addresses
     *
     * @tags NFT
     * @name GetNftCollectionItemsByAddresses
     * @request POST:/v2/nfts/collections/_bulk
     */
    /**
     * @description Get NFT collection items by their addresses
     *
     * @tags NFT
     * @name GetNftCollectionItemsByAddresses
     * @request POST:/v2/nfts/collections/_bulk
     */
    getNftCollectionItemsByAddresses(
        data: {
            accountIds: (Address | string)[];
        },
        params: RequestParams = {}
    ): TonApiPromise<GetNftCollectionItemsByAddressesData, TonApiError> {
        const req = this.http.request<GetNftCollectionItemsByAddressesData, TonApiError>({
            path: `/v2/nfts/collections/_bulk`,
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

        return prepareResponse<GetNftCollectionItemsByAddressesData, TonApiError>(req, {
            $ref: '#/components/schemas/NftCollections'
        });
    }

    /**
     * @description Get NFT items from collection by collection address
     *
     * @tags NFT
     * @name GetItemsFromCollection
     * @request GET:/v2/nfts/collections/{account_id}/items
     */
    /**
     * @description Get NFT items from collection by collection address
     *
     * @tags NFT
     * @name GetItemsFromCollection
     * @request GET:/v2/nfts/collections/{account_id}/items
     */
    getItemsFromCollection(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetItemsFromCollectionData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetItemsFromCollectionData, TonApiError>({
            path: `/v2/nfts/collections/${accountId}/items`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetItemsFromCollectionData, TonApiError>(req, {
            $ref: '#/components/schemas/NftItems'
        });
    }

    /**
     * @description Get NFT items by their addresses
     *
     * @tags NFT
     * @name GetNftItemsByAddresses
     * @request POST:/v2/nfts/_bulk
     */
    /**
     * @description Get NFT items by their addresses
     *
     * @tags NFT
     * @name GetNftItemsByAddresses
     * @request POST:/v2/nfts/_bulk
     */
    getNftItemsByAddresses(
        data: {
            accountIds: (Address | string)[];
        },
        params: RequestParams = {}
    ): TonApiPromise<GetNftItemsByAddressesData, TonApiError> {
        const req = this.http.request<GetNftItemsByAddressesData, TonApiError>({
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

        return prepareResponse<GetNftItemsByAddressesData, TonApiError>(req, {
            $ref: '#/components/schemas/NftItems'
        });
    }

    /**
     * @description Get NFT item by its address
     *
     * @tags NFT
     * @name GetNftItemByAddress
     * @request GET:/v2/nfts/{account_id}
     */
    /**
     * @description Get NFT item by its address
     *
     * @tags NFT
     * @name GetNftItemByAddress
     * @request GET:/v2/nfts/{account_id}
     */
    getNftItemByAddress(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetNftItemByAddressData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetNftItemByAddressData, TonApiError>({
            path: `/v2/nfts/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetNftItemByAddressData, TonApiError>(req, {
            $ref: '#/components/schemas/NftItem'
        });
    }

    /**
     * @description Please use `getAccountNftHistory`` instead
     *
     * @tags NFT
     * @name GetNftHistoryById
     * @request GET:/v2/nfts/{account_id}/history
     * @deprecated
     */
    /**
     * @description Please use `getAccountNftHistory`` instead
     *
     * @tags NFT
     * @name GetNftHistoryById
     * @request GET:/v2/nfts/{account_id}/history
     * @deprecated
     */
    getNftHistoryById(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetNftHistoryByIdData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetNftHistoryByIdData, TonApiError>({
            path: `/v2/nfts/${accountId}/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetNftHistoryByIdData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvents'
        });
    }

    /**
     * @description Get full information about domain name
     *
     * @tags DNS
     * @name GetDnsInfo
     * @request GET:/v2/dns/{domain_name}
     */
    /**
     * @description Get full information about domain name
     *
     * @tags DNS
     * @name GetDnsInfo
     * @request GET:/v2/dns/{domain_name}
     */
    getDnsInfo(
        domainName: string,
        params: RequestParams = {}
    ): TonApiPromise<GetDnsInfoData, TonApiError> {
        const req = this.http.request<GetDnsInfoData, TonApiError>({
            path: `/v2/dns/${domainName}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetDnsInfoData, TonApiError>(req, {
            $ref: '#/components/schemas/DomainInfo'
        });
    }

    /**
     * @description DNS resolve for domain name
     *
     * @tags DNS
     * @name DnsResolve
     * @request GET:/v2/dns/{domain_name}/resolve
     */
    /**
     * @description DNS resolve for domain name
     *
     * @tags DNS
     * @name DnsResolve
     * @request GET:/v2/dns/{domain_name}/resolve
     */
    dnsResolve(
        domainName: string,
        query?: {
            /** @default false */
            filter?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<DnsResolveData, TonApiError> {
        const req = this.http.request<DnsResolveData, TonApiError>({
            path: `/v2/dns/${domainName}/resolve`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<DnsResolveData, TonApiError>(req, {
            $ref: '#/components/schemas/DnsRecord'
        });
    }

    /**
     * @description Get domain bids
     *
     * @tags DNS
     * @name GetDomainBids
     * @request GET:/v2/dns/{domain_name}/bids
     */
    /**
     * @description Get domain bids
     *
     * @tags DNS
     * @name GetDomainBids
     * @request GET:/v2/dns/{domain_name}/bids
     */
    getDomainBids(
        domainName: string,
        params: RequestParams = {}
    ): TonApiPromise<GetDomainBidsData, TonApiError> {
        const req = this.http.request<GetDomainBidsData, TonApiError>({
            path: `/v2/dns/${domainName}/bids`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetDomainBidsData, TonApiError>(req, {
            $ref: '#/components/schemas/DomainBids'
        });
    }

    /**
     * @description Get all auctions
     *
     * @tags DNS
     * @name GetAllAuctions
     * @request GET:/v2/dns/auctions
     */
    /**
     * @description Get all auctions
     *
     * @tags DNS
     * @name GetAllAuctions
     * @request GET:/v2/dns/auctions
     */
    getAllAuctions(
        query?: {
            /**
             * domain filter for current auctions "ton" or "t.me"
             * @example "ton"
             */
            tld?: string;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAllAuctionsData, TonApiError> {
        const req = this.http.request<GetAllAuctionsData, TonApiError>({
            path: `/v2/dns/auctions`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetAllAuctionsData, TonApiError>(req, {
            $ref: '#/components/schemas/Auctions'
        });
    }

    /**
     * @description Get the trace by trace ID or hash of any transaction in trace
     *
     * @tags Traces
     * @name GetTrace
     * @request GET:/v2/traces/{trace_id}
     */
    /**
     * @description Get the trace by trace ID or hash of any transaction in trace
     *
     * @tags Traces
     * @name GetTrace
     * @request GET:/v2/traces/{trace_id}
     */
    getTrace(
        traceId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetTraceData, TonApiError> {
        const req = this.http.request<GetTraceData, TonApiError>({
            path: `/v2/traces/${traceId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetTraceData, TonApiError>(req, {
            $ref: '#/components/schemas/Trace'
        });
    }

    /**
     * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Events
     * @name GetEvent
     * @request GET:/v2/events/{event_id}
     */
    /**
     * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     *
     * @tags Events
     * @name GetEvent
     * @request GET:/v2/events/{event_id}
     */
    getEvent(
        eventId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetEventData, TonApiError> {
        const req = this.http.request<GetEventData, TonApiError>({
            path: `/v2/events/${eventId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetEventData, TonApiError>(req, {
            $ref: '#/components/schemas/Event'
        });
    }

    /**
     * @description Get a list of all indexed jetton masters in the blockchain.
     *
     * @tags Jettons
     * @name GetJettons
     * @request GET:/v2/jettons
     */
    /**
     * @description Get a list of all indexed jetton masters in the blockchain.
     *
     * @tags Jettons
     * @name GetJettons
     * @request GET:/v2/jettons
     */
    getJettons(
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
    ): TonApiPromise<GetJettonsData, TonApiError> {
        const req = this.http.request<GetJettonsData, TonApiError>({
            path: `/v2/jettons`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonsData, TonApiError>(req, {
            $ref: '#/components/schemas/Jettons'
        });
    }

    /**
     * @description Get jetton metadata by jetton master address
     *
     * @tags Jettons
     * @name GetJettonInfo
     * @request GET:/v2/jettons/{account_id}
     */
    /**
     * @description Get jetton metadata by jetton master address
     *
     * @tags Jettons
     * @name GetJettonInfo
     * @request GET:/v2/jettons/{account_id}
     */
    getJettonInfo(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetJettonInfoData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetJettonInfoData, TonApiError>({
            path: `/v2/jettons/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonInfoData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonInfo'
        });
    }

    /**
     * @description Get jetton metadata items by jetton master addresses
     *
     * @tags Jettons
     * @name GetJettonInfosByAddresses
     * @request POST:/v2/jettons/_bulk
     */
    /**
     * @description Get jetton metadata items by jetton master addresses
     *
     * @tags Jettons
     * @name GetJettonInfosByAddresses
     * @request POST:/v2/jettons/_bulk
     */
    getJettonInfosByAddresses(
        data: {
            accountIds: (Address | string)[];
        },
        params: RequestParams = {}
    ): TonApiPromise<GetJettonInfosByAddressesData, TonApiError> {
        const req = this.http.request<GetJettonInfosByAddressesData, TonApiError>({
            path: `/v2/jettons/_bulk`,
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

        return prepareResponse<GetJettonInfosByAddressesData, TonApiError>(req, {
            $ref: '#/components/schemas/Jettons'
        });
    }

    /**
     * @description Get jetton's holders
     *
     * @tags Jettons
     * @name GetJettonHolders
     * @request GET:/v2/jettons/{account_id}/holders
     */
    /**
     * @description Get jetton's holders
     *
     * @tags Jettons
     * @name GetJettonHolders
     * @request GET:/v2/jettons/{account_id}/holders
     */
    getJettonHolders(
        accountId_Address: Address | string,
        query?: {
            /**
             * @min 1
             * @max 1000
             * @default 1000
             */
            limit?: number;
            /**
             * @min 0
             * @max 9000
             * @default 0
             */
            offset?: number;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetJettonHoldersData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetJettonHoldersData, TonApiError>({
            path: `/v2/jettons/${accountId}/holders`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonHoldersData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonHolders'
        });
    }

    /**
     * @description Get jetton's custom payload and state init required for transfer
     *
     * @tags Jettons
     * @name GetJettonTransferPayload
     * @request GET:/v2/jettons/{jetton_id}/transfer/{account_id}/payload
     */
    /**
     * @description Get jetton's custom payload and state init required for transfer
     *
     * @tags Jettons
     * @name GetJettonTransferPayload
     * @request GET:/v2/jettons/{jetton_id}/transfer/{account_id}/payload
     */
    getJettonTransferPayload(
        accountId_Address: Address | string,
        jettonId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetJettonTransferPayloadData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const jettonId = addressToString(jettonId_Address);
        const req = this.http.request<GetJettonTransferPayloadData, TonApiError>({
            path: `/v2/jettons/${jettonId}/transfer/${accountId}/payload`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonTransferPayloadData, TonApiError>(req, {
            $ref: '#/components/schemas/JettonTransferPayload'
        });
    }

    /**
     * @description Get only jetton transfers in the event
     *
     * @tags Jettons
     * @name GetJettonsEvents
     * @request GET:/v2/events/{event_id}/jettons
     */
    /**
     * @description Get only jetton transfers in the event
     *
     * @tags Jettons
     * @name GetJettonsEvents
     * @request GET:/v2/events/{event_id}/jettons
     */
    getJettonsEvents(
        eventId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetJettonsEventsData, TonApiError> {
        const req = this.http.request<GetJettonsEventsData, TonApiError>({
            path: `/v2/events/${eventId}/jettons`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetJettonsEventsData, TonApiError>(req, {
            $ref: '#/components/schemas/Event'
        });
    }

    /**
     * @description Get extra currency info by id
     *
     * @tags ExtraCurrency
     * @name GetExtraCurrencyInfo
     * @request GET:/v2/extra-currency/{id}
     */
    /**
     * @description Get extra currency info by id
     *
     * @tags ExtraCurrency
     * @name GetExtraCurrencyInfo
     * @request GET:/v2/extra-currency/{id}
     */
    getExtraCurrencyInfo(
        id: number,
        params: RequestParams = {}
    ): TonApiPromise<GetExtraCurrencyInfoData, TonApiError> {
        const req = this.http.request<GetExtraCurrencyInfoData, TonApiError>({
            path: `/v2/extra-currency/${id}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetExtraCurrencyInfoData, TonApiError>(req, {
            $ref: '#/components/schemas/EcPreview'
        });
    }

    /**
     * @description All pools where account participates
     *
     * @tags Staking
     * @name GetAccountNominatorsPools
     * @request GET:/v2/staking/nominator/{account_id}/pools
     */
    /**
     * @description All pools where account participates
     *
     * @tags Staking
     * @name GetAccountNominatorsPools
     * @request GET:/v2/staking/nominator/{account_id}/pools
     */
    getAccountNominatorsPools(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountNominatorsPoolsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountNominatorsPoolsData, TonApiError>({
            path: `/v2/staking/nominator/${accountId}/pools`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountNominatorsPoolsData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountStaking'
        });
    }

    /**
     * @description Stacking pool info
     *
     * @tags Staking
     * @name GetStakingPoolInfo
     * @request GET:/v2/staking/pool/{account_id}
     */
    /**
     * @description Stacking pool info
     *
     * @tags Staking
     * @name GetStakingPoolInfo
     * @request GET:/v2/staking/pool/{account_id}
     */
    getStakingPoolInfo(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetStakingPoolInfoData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetStakingPoolInfoData, TonApiError>({
            path: `/v2/staking/pool/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetStakingPoolInfoData, TonApiError>(req, {
            type: 'object',
            required: ['implementation', 'pool'],
            properties: {
                implementation: { $ref: '#/components/schemas/PoolImplementation' },
                pool: { $ref: '#/components/schemas/PoolInfo' }
            }
        });
    }

    /**
     * @description Pool history
     *
     * @tags Staking
     * @name GetStakingPoolHistory
     * @request GET:/v2/staking/pool/{account_id}/history
     */
    /**
     * @description Pool history
     *
     * @tags Staking
     * @name GetStakingPoolHistory
     * @request GET:/v2/staking/pool/{account_id}/history
     */
    getStakingPoolHistory(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetStakingPoolHistoryData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetStakingPoolHistoryData, TonApiError>({
            path: `/v2/staking/pool/${accountId}/history`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetStakingPoolHistoryData, TonApiError>(req, {
            type: 'object',
            required: ['apy'],
            properties: {
                apy: { type: 'array', items: { $ref: '#/components/schemas/ApyHistory' } }
            }
        });
    }

    /**
     * @description All pools available in network
     *
     * @tags Staking
     * @name GetStakingPools
     * @request GET:/v2/staking/pools
     */
    /**
     * @description All pools available in network
     *
     * @tags Staking
     * @name GetStakingPools
     * @request GET:/v2/staking/pools
     */
    getStakingPools(
        query?: {
            /**
             * account ID
             * @format address
             * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
             */
            available_for?: Address | string;
            /**
             * return also pools not from white list - just compatible by interfaces (maybe dangerous!)
             * @example false
             */
            include_unverified?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetStakingPoolsData, TonApiError> {
        const req = this.http.request<GetStakingPoolsData, TonApiError>({
            path: `/v2/staking/pools`,
            method: 'GET',
            query: query && {
                ...query,
                available_for: addressToString(query.available_for)
            },
            format: 'json',
            ...params
        });

        return prepareResponse<GetStakingPoolsData, TonApiError>(req, {
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

    /**
     * @description Get TON storage providers deployed to the blockchain.
     *
     * @tags Storage
     * @name GetStorageProviders
     * @request GET:/v2/storage/providers
     */
    /**
     * @description Get TON storage providers deployed to the blockchain.
     *
     * @tags Storage
     * @name GetStorageProviders
     * @request GET:/v2/storage/providers
     */
    getStorageProviders(
        params: RequestParams = {}
    ): TonApiPromise<GetStorageProvidersData, TonApiError> {
        const req = this.http.request<GetStorageProvidersData, TonApiError>({
            path: `/v2/storage/providers`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetStorageProvidersData, TonApiError>(req, {
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

    /**
     * @description Get the token price in the chosen currency for display only. Don’t use this for financial transactions.
     *
     * @tags Rates
     * @name GetRates
     * @request GET:/v2/rates
     */
    /**
     * @description Get the token price in the chosen currency for display only. Don’t use this for financial transactions.
     *
     * @tags Rates
     * @name GetRates
     * @request GET:/v2/rates
     */
    getRates(
        query: {
            /**
             * accept cryptocurrencies and jetton master addresses, separated by commas
             * @maxItems 100
             * @example ["ton","btc","EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"]
             */
            tokens: (Address | string)[];
            /**
             * accept cryptocurrencies and all possible fiat currencies
             * @maxItems 50
             * @example ["ton","btc","usd","rub"]
             */
            currencies: string[];
        },
        params: RequestParams = {}
    ): TonApiPromise<GetRatesData, TonApiError> {
        const req = this.http.request<GetRatesData, TonApiError>({
            path: `/v2/rates`,
            method: 'GET',
            query: query && {
                ...query,
                tokens: query.tokens.map(item => tokenOrAddressToString(item))
            },
            queryImplode: ['tokens', 'currencies'],
            format: 'json',
            ...params
        });

        return prepareResponse<GetRatesData, TonApiError>(req, {
            type: 'object',
            required: ['rates'],
            properties: {
                rates: {
                    type: 'object',
                    additionalProperties: { $ref: '#/components/schemas/TokenRates' }
                }
            }
        });
    }

    /**
     * @description Get chart by token
     *
     * @tags Rates
     * @name GetChartRates
     * @request GET:/v2/rates/chart
     */
    /**
     * @description Get chart by token
     *
     * @tags Rates
     * @name GetChartRates
     * @request GET:/v2/rates/chart
     */
    getChartRates(
        query: {
            /**
             * accept cryptocurrency or jetton master address
             * @format token-or-address
             * @example [{"value":"ton","description":"cryptocurrency code (ton, btc, etc.)"},{"value":"EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs","description":"jetton master address usdt for example"}]
             */
            token: Address | string;
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
    ): TonApiPromise<GetChartRatesData, TonApiError> {
        const req = this.http.request<GetChartRatesData, TonApiError>({
            path: `/v2/rates/chart`,
            method: 'GET',
            query: query && {
                ...query,
                token: tokenOrAddressToString(query.token)
            },
            format: 'json',
            ...params
        });

        return prepareResponse<GetChartRatesData, TonApiError>(req, {
            type: 'object',
            required: ['points'],
            properties: {
                points: { type: 'array', items: { $ref: '#/components/schemas/ChartPoints' } }
            }
        });
    }

    /**
     * @description Get the TON price from markets
     *
     * @tags Rates
     * @name GetMarketsRates
     * @request GET:/v2/rates/markets
     */
    /**
     * @description Get the TON price from markets
     *
     * @tags Rates
     * @name GetMarketsRates
     * @request GET:/v2/rates/markets
     */
    getMarketsRates(params: RequestParams = {}): TonApiPromise<GetMarketsRatesData, TonApiError> {
        const req = this.http.request<GetMarketsRatesData, TonApiError>({
            path: `/v2/rates/markets`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetMarketsRatesData, TonApiError>(req, {
            type: 'object',
            required: ['markets'],
            properties: {
                markets: { type: 'array', items: { $ref: '#/components/schemas/MarketTonRates' } }
            }
        });
    }

    /**
     * @description Get a payload for further token receipt
     *
     * @tags Connect
     * @name GetTonConnectPayload
     * @request GET:/v2/tonconnect/payload
     */
    /**
     * @description Get a payload for further token receipt
     *
     * @tags Connect
     * @name GetTonConnectPayload
     * @request GET:/v2/tonconnect/payload
     */
    getTonConnectPayload(
        params: RequestParams = {}
    ): TonApiPromise<GetTonConnectPayloadData, TonApiError> {
        const req = this.http.request<GetTonConnectPayloadData, TonApiError>({
            path: `/v2/tonconnect/payload`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetTonConnectPayloadData, TonApiError>(req, {
            type: 'object',
            required: ['payload'],
            properties: { payload: { type: 'string' } }
        });
    }

    /**
     * @description Get account info by state init
     *
     * @tags Connect
     * @name GetAccountInfoByStateInit
     * @request POST:/v2/tonconnect/stateinit
     */
    /**
     * @description Get account info by state init
     *
     * @tags Connect
     * @name GetAccountInfoByStateInit
     * @request POST:/v2/tonconnect/stateinit
     */
    getAccountInfoByStateInit(
        data: {
            /** @format cell-base64 */
            stateInit: Cell | string;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetAccountInfoByStateInitData, TonApiError> {
        const req = this.http.request<GetAccountInfoByStateInitData, TonApiError>({
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

        return prepareResponse<GetAccountInfoByStateInitData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountInfoByStateInit'
        });
    }

    /**
     * @description Account verification and token issuance
     *
     * @tags Wallet
     * @name TonConnectProof
     * @request POST:/v2/wallet/auth/proof
     */
    /**
     * @description Account verification and token issuance
     *
     * @tags Wallet
     * @name TonConnectProof
     * @request POST:/v2/wallet/auth/proof
     */
    tonConnectProof(
        data: {
            /**
             * @format address
             * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
             */
            address: Address | string;
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
                stateInit?: Cell | string;
            };
        },
        params: RequestParams = {}
    ): TonApiPromise<TonConnectProofData, TonApiError> {
        const req = this.http.request<TonConnectProofData, TonApiError>({
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

        return prepareResponse<TonConnectProofData, TonApiError>(req, {
            type: 'object',
            required: ['token'],
            properties: { token: { type: 'string' } }
        });
    }

    /**
     * @description Get account seqno
     *
     * @tags Wallet
     * @name GetAccountSeqno
     * @request GET:/v2/wallet/{account_id}/seqno
     */
    /**
     * @description Get account seqno
     *
     * @tags Wallet
     * @name GetAccountSeqno
     * @request GET:/v2/wallet/{account_id}/seqno
     */
    getAccountSeqno(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetAccountSeqnoData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetAccountSeqnoData, TonApiError>({
            path: `/v2/wallet/${accountId}/seqno`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAccountSeqnoData, TonApiError>(req, {
            $ref: '#/components/schemas/Seqno'
        });
    }

    /**
     * @description Get human-friendly information about a wallet without low-level details.
     *
     * @tags Wallet
     * @name GetWalletInfo
     * @request GET:/v2/wallet/{account_id}
     */
    /**
     * @description Get human-friendly information about a wallet without low-level details.
     *
     * @tags Wallet
     * @name GetWalletInfo
     * @request GET:/v2/wallet/{account_id}
     */
    getWalletInfo(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetWalletInfoData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetWalletInfoData, TonApiError>({
            path: `/v2/wallet/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetWalletInfoData, TonApiError>(req, {
            $ref: '#/components/schemas/Wallet'
        });
    }

    /**
     * @description Get wallets by public key
     *
     * @tags Wallet
     * @name GetWalletsByPublicKey
     * @request GET:/v2/pubkeys/{public_key}/wallets
     */
    /**
     * @description Get wallets by public key
     *
     * @tags Wallet
     * @name GetWalletsByPublicKey
     * @request GET:/v2/pubkeys/{public_key}/wallets
     */
    getWalletsByPublicKey(
        publicKey: string,
        params: RequestParams = {}
    ): TonApiPromise<GetWalletsByPublicKeyData, TonApiError> {
        const req = this.http.request<GetWalletsByPublicKeyData, TonApiError>({
            path: `/v2/pubkeys/${publicKey}/wallets`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetWalletsByPublicKeyData, TonApiError>(req, {
            $ref: '#/components/schemas/Wallets'
        });
    }

    /**
     * @description Returns configuration of gasless transfers
     *
     * @tags Gasless
     * @name GaslessConfig
     * @request GET:/v2/gasless/config
     */
    /**
     * @description Returns configuration of gasless transfers
     *
     * @tags Gasless
     * @name GaslessConfig
     * @request GET:/v2/gasless/config
     */
    gaslessConfig(params: RequestParams = {}): TonApiPromise<GaslessConfigData, TonApiError> {
        const req = this.http.request<GaslessConfigData, TonApiError>({
            path: `/v2/gasless/config`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GaslessConfigData, TonApiError>(req, {
            $ref: '#/components/schemas/GaslessConfig'
        });
    }

    /**
     * @description Estimates the cost of the given messages and returns a payload to sign
     *
     * @tags Gasless
     * @name GaslessEstimate
     * @request POST:/v2/gasless/estimate/{master_id}
     */
    /**
     * @description Estimates the cost of the given messages and returns a payload to sign
     *
     * @tags Gasless
     * @name GaslessEstimate
     * @request POST:/v2/gasless/estimate/{master_id}
     */
    gaslessEstimate(
        masterId_Address: Address | string,
        data: {
            /**
             * TONAPI verifies that the account has enough jettons to pay the commission and make a transfer.
             * @default false
             */
            throwErrorIfNotEnoughJettons?: boolean;
            /** @default false */
            returnEmulation?: boolean;
            /** @format address */
            walletAddress: Address | string;
            walletPublicKey: string;
            messages: {
                /** @format cell */
                boc: Cell | string;
            }[];
        },
        params: RequestParams = {}
    ): TonApiPromise<GaslessEstimateData, TonApiError> {
        const masterId = addressToString(masterId_Address);
        const req = this.http.request<GaslessEstimateData, TonApiError>({
            path: `/v2/gasless/estimate/${masterId}`,
            method: 'POST',
            body: prepareRequestData(data, {
                type: 'object',
                required: ['messages', 'walletAddress', 'walletPublicKey'],
                properties: {
                    throwErrorIfNotEnoughJettons: { type: 'boolean', default: false },
                    returnEmulation: { type: 'boolean', default: false },
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

        return prepareResponse<GaslessEstimateData, TonApiError>(req, {
            $ref: '#/components/schemas/SignRawParams'
        });
    }

    /**
     * @description Submits the signed gasless transaction message to the network
     *
     * @tags Gasless
     * @name GaslessSend
     * @request POST:/v2/gasless/send
     */
    /**
     * @description Submits the signed gasless transaction message to the network
     *
     * @tags Gasless
     * @name GaslessSend
     * @request POST:/v2/gasless/send
     */
    gaslessSend(
        data: {
            /** hex encoded public key */
            walletPublicKey: string;
            /** @format cell */
            boc: Cell | string;
        },
        params: RequestParams = {}
    ): TonApiPromise<GaslessSendData, TonApiError> {
        const req = this.http.request<GaslessSendData, TonApiError>({
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
            format: 'json',
            ...params
        });

        return prepareResponse<GaslessSendData, TonApiError>(req, {
            $ref: '#/components/schemas/GaslessTx'
        });
    }

    /**
     * @description Get raw masterchain info
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfo
     * @request GET:/v2/liteserver/get_masterchain_info
     */
    /**
     * @description Get raw masterchain info
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfo
     * @request GET:/v2/liteserver/get_masterchain_info
     */
    getRawMasterchainInfo(
        params: RequestParams = {}
    ): TonApiPromise<GetRawMasterchainInfoData, TonApiError> {
        const req = this.http.request<GetRawMasterchainInfoData, TonApiError>({
            path: `/v2/liteserver/get_masterchain_info`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawMasterchainInfoData, TonApiError>(req, {
            type: 'object',
            required: ['last', 'state_root_hash', 'init'],
            properties: {
                last: { $ref: '#/components/schemas/BlockRaw' },
                state_root_hash: { type: 'string' },
                init: { $ref: '#/components/schemas/InitStateRaw' }
            }
        });
    }

    /**
     * @description Get raw masterchain info ext
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfoExt
     * @request GET:/v2/liteserver/get_masterchain_info_ext
     */
    /**
     * @description Get raw masterchain info ext
     *
     * @tags Lite Server
     * @name GetRawMasterchainInfoExt
     * @request GET:/v2/liteserver/get_masterchain_info_ext
     */
    getRawMasterchainInfoExt(
        query: {
            /**
             * mode
             * @format int32
             * @example 0
             */
            mode: number;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetRawMasterchainInfoExtData, TonApiError> {
        const req = this.http.request<GetRawMasterchainInfoExtData, TonApiError>({
            path: `/v2/liteserver/get_masterchain_info_ext`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawMasterchainInfoExtData, TonApiError>(req, {
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
    }

    /**
     * @description Get raw time
     *
     * @tags Lite Server
     * @name GetRawTime
     * @request GET:/v2/liteserver/get_time
     */
    /**
     * @description Get raw time
     *
     * @tags Lite Server
     * @name GetRawTime
     * @request GET:/v2/liteserver/get_time
     */
    getRawTime(params: RequestParams = {}): TonApiPromise<GetRawTimeData, TonApiError> {
        const req = this.http.request<GetRawTimeData, TonApiError>({
            path: `/v2/liteserver/get_time`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawTimeData, TonApiError>(req, {
            type: 'object',
            required: ['time'],
            properties: { time: { type: 'integer', format: 'int32' } }
        });
    }

    /**
     * @description Get raw blockchain block
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlock
     * @request GET:/v2/liteserver/get_block/{block_id}
     */
    /**
     * @description Get raw blockchain block
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlock
     * @request GET:/v2/liteserver/get_block/{block_id}
     */
    getRawBlockchainBlock(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetRawBlockchainBlockData, TonApiError> {
        const req = this.http.request<GetRawBlockchainBlockData, TonApiError>({
            path: `/v2/liteserver/get_block/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockchainBlockData, TonApiError>(req, {
            type: 'object',
            required: ['id', 'data'],
            properties: { id: { $ref: '#/components/schemas/BlockRaw' }, data: { type: 'string' } }
        });
    }

    /**
     * @description Get raw blockchain block state
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockState
     * @request GET:/v2/liteserver/get_state/{block_id}
     */
    /**
     * @description Get raw blockchain block state
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockState
     * @request GET:/v2/liteserver/get_state/{block_id}
     */
    getRawBlockchainBlockState(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetRawBlockchainBlockStateData, TonApiError> {
        const req = this.http.request<GetRawBlockchainBlockStateData, TonApiError>({
            path: `/v2/liteserver/get_state/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockchainBlockStateData, TonApiError>(req, {
            type: 'object',
            required: ['id', 'root_hash', 'file_hash', 'data'],
            properties: {
                id: { $ref: '#/components/schemas/BlockRaw' },
                root_hash: { type: 'string' },
                file_hash: { type: 'string' },
                data: { type: 'string' }
            }
        });
    }

    /**
     * @description Get raw blockchain block header
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockHeader
     * @request GET:/v2/liteserver/get_block_header/{block_id}
     */
    /**
     * @description Get raw blockchain block header
     *
     * @tags Lite Server
     * @name GetRawBlockchainBlockHeader
     * @request GET:/v2/liteserver/get_block_header/{block_id}
     */
    getRawBlockchainBlockHeader(
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
    ): TonApiPromise<GetRawBlockchainBlockHeaderData, TonApiError> {
        const req = this.http.request<GetRawBlockchainBlockHeaderData, TonApiError>({
            path: `/v2/liteserver/get_block_header/${blockId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockchainBlockHeaderData, TonApiError>(req, {
            type: 'object',
            required: ['id', 'mode', 'header_proof'],
            properties: {
                id: { $ref: '#/components/schemas/BlockRaw' },
                mode: { type: 'integer', format: 'int32' },
                header_proof: { type: 'string' }
            }
        });
    }

    /**
     * @description Send raw message to blockchain
     *
     * @tags Lite Server
     * @name SendRawMessage
     * @request POST:/v2/liteserver/send_message
     */
    /**
     * @description Send raw message to blockchain
     *
     * @tags Lite Server
     * @name SendRawMessage
     * @request POST:/v2/liteserver/send_message
     */
    sendRawMessage(
        data: {
            /** @format cell-base64 */
            body: Cell | string;
        },
        params: RequestParams = {}
    ): TonApiPromise<SendRawMessageData, TonApiError> {
        const req = this.http.request<SendRawMessageData, TonApiError>({
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

        return prepareResponse<SendRawMessageData, TonApiError>(req, {
            type: 'object',
            required: ['code'],
            properties: { code: { type: 'integer', format: 'int32' } }
        });
    }

    /**
     * @description Get raw account state
     *
     * @tags Lite Server
     * @name GetRawAccountState
     * @request GET:/v2/liteserver/get_account_state/{account_id}
     */
    /**
     * @description Get raw account state
     *
     * @tags Lite Server
     * @name GetRawAccountState
     * @request GET:/v2/liteserver/get_account_state/{account_id}
     */
    getRawAccountState(
        accountId_Address: Address | string,
        query?: {
            /**
             * target block: (workchain,shard,seqno,root_hash,file_hash)
             * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
             */
            target_block?: string;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetRawAccountStateData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetRawAccountStateData, TonApiError>({
            path: `/v2/liteserver/get_account_state/${accountId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawAccountStateData, TonApiError>(req, {
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
    }

    /**
     * @description Get raw shard info
     *
     * @tags Lite Server
     * @name GetRawShardInfo
     * @request GET:/v2/liteserver/get_shard_info/{block_id}
     */
    /**
     * @description Get raw shard info
     *
     * @tags Lite Server
     * @name GetRawShardInfo
     * @request GET:/v2/liteserver/get_shard_info/{block_id}
     */
    getRawShardInfo(
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
    ): TonApiPromise<GetRawShardInfoData, TonApiError> {
        const req = this.http.request<GetRawShardInfoData, TonApiError>({
            path: `/v2/liteserver/get_shard_info/${blockId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawShardInfoData, TonApiError>(req, {
            type: 'object',
            required: ['id', 'shardblk', 'shard_proof', 'shard_descr'],
            properties: {
                id: { $ref: '#/components/schemas/BlockRaw' },
                shardblk: { $ref: '#/components/schemas/BlockRaw' },
                shard_proof: { type: 'string' },
                shard_descr: { type: 'string' }
            }
        });
    }

    /**
     * @description Get all raw shards info
     *
     * @tags Lite Server
     * @name GetAllRawShardsInfo
     * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
     */
    /**
     * @description Get all raw shards info
     *
     * @tags Lite Server
     * @name GetAllRawShardsInfo
     * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
     */
    getAllRawShardsInfo(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetAllRawShardsInfoData, TonApiError> {
        const req = this.http.request<GetAllRawShardsInfoData, TonApiError>({
            path: `/v2/liteserver/get_all_shards_info/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetAllRawShardsInfoData, TonApiError>(req, {
            type: 'object',
            required: ['id', 'proof', 'data'],
            properties: {
                id: { $ref: '#/components/schemas/BlockRaw' },
                proof: { type: 'string' },
                data: { type: 'string' }
            }
        });
    }

    /**
     * @description Get raw transactions
     *
     * @tags Lite Server
     * @name GetRawTransactions
     * @request GET:/v2/liteserver/get_transactions/{account_id}
     */
    /**
     * @description Get raw transactions
     *
     * @tags Lite Server
     * @name GetRawTransactions
     * @request GET:/v2/liteserver/get_transactions/{account_id}
     */
    getRawTransactions(
        accountId_Address: Address | string,
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
    ): TonApiPromise<GetRawTransactionsData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetRawTransactionsData, TonApiError>({
            path: `/v2/liteserver/get_transactions/${accountId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawTransactionsData, TonApiError>(req, {
            type: 'object',
            required: ['ids', 'transactions'],
            properties: {
                ids: { type: 'array', items: { $ref: '#/components/schemas/BlockRaw' } },
                transactions: { type: 'string' }
            }
        });
    }

    /**
     * @description Get raw list block transactions
     *
     * @tags Lite Server
     * @name GetRawListBlockTransactions
     * @request GET:/v2/liteserver/list_block_transactions/{block_id}
     */
    /**
     * @description Get raw list block transactions
     *
     * @tags Lite Server
     * @name GetRawListBlockTransactions
     * @request GET:/v2/liteserver/list_block_transactions/{block_id}
     */
    getRawListBlockTransactions(
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
            account_id?: Address | string;
            /**
             * lt
             * @format int64
             * @example 23814011000000
             */
            lt?: number;
        },
        params: RequestParams = {}
    ): TonApiPromise<GetRawListBlockTransactionsData, TonApiError> {
        const req = this.http.request<GetRawListBlockTransactionsData, TonApiError>({
            path: `/v2/liteserver/list_block_transactions/${blockId}`,
            method: 'GET',
            query: query && {
                ...query,
                account_id: addressToString(query.account_id)
            },
            queryImplode: ['account_id'],
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawListBlockTransactionsData, TonApiError>(req, {
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
    }

    /**
     * @description Get raw block proof
     *
     * @tags Lite Server
     * @name GetRawBlockProof
     * @request GET:/v2/liteserver/get_block_proof
     */
    /**
     * @description Get raw block proof
     *
     * @tags Lite Server
     * @name GetRawBlockProof
     * @request GET:/v2/liteserver/get_block_proof
     */
    getRawBlockProof(
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
    ): TonApiPromise<GetRawBlockProofData, TonApiError> {
        const req = this.http.request<GetRawBlockProofData, TonApiError>({
            path: `/v2/liteserver/get_block_proof`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawBlockProofData, TonApiError>(req, {
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
                        required: ['lite_server_block_link_back', 'lite_server_block_link_forward'],
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
                                            catchain_seqno: { type: 'integer', format: 'int32' },
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
    }

    /**
     * @description Get raw config
     *
     * @tags Lite Server
     * @name GetRawConfig
     * @request GET:/v2/liteserver/get_config_all/{block_id}
     */
    /**
     * @description Get raw config
     *
     * @tags Lite Server
     * @name GetRawConfig
     * @request GET:/v2/liteserver/get_config_all/{block_id}
     */
    getRawConfig(
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
    ): TonApiPromise<GetRawConfigData, TonApiError> {
        const req = this.http.request<GetRawConfigData, TonApiError>({
            path: `/v2/liteserver/get_config_all/${blockId}`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawConfigData, TonApiError>(req, {
            type: 'object',
            required: ['mode', 'id', 'state_proof', 'config_proof'],
            properties: {
                mode: { type: 'integer', format: 'int32' },
                id: { $ref: '#/components/schemas/BlockRaw' },
                state_proof: { type: 'string' },
                config_proof: { type: 'string' }
            }
        });
    }

    /**
     * @description Get raw shard block proof
     *
     * @tags Lite Server
     * @name GetRawShardBlockProof
     * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
     */
    /**
     * @description Get raw shard block proof
     *
     * @tags Lite Server
     * @name GetRawShardBlockProof
     * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
     */
    getRawShardBlockProof(
        blockId: string,
        params: RequestParams = {}
    ): TonApiPromise<GetRawShardBlockProofData, TonApiError> {
        const req = this.http.request<GetRawShardBlockProofData, TonApiError>({
            path: `/v2/liteserver/get_shard_block_proof/${blockId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetRawShardBlockProofData, TonApiError>(req, {
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
    }

    /**
     * @description Get out msg queue sizes
     *
     * @tags Lite Server
     * @name GetOutMsgQueueSizes
     * @request GET:/v2/liteserver/get_out_msg_queue_sizes
     */
    /**
     * @description Get out msg queue sizes
     *
     * @tags Lite Server
     * @name GetOutMsgQueueSizes
     * @request GET:/v2/liteserver/get_out_msg_queue_sizes
     */
    getOutMsgQueueSizes(
        params: RequestParams = {}
    ): TonApiPromise<GetOutMsgQueueSizesData, TonApiError> {
        const req = this.http.request<GetOutMsgQueueSizesData, TonApiError>({
            path: `/v2/liteserver/get_out_msg_queue_sizes`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetOutMsgQueueSizesData, TonApiError>(req, {
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

    /**
     * @description Get multisig account info
     *
     * @tags Multisig
     * @name GetMultisigAccount
     * @request GET:/v2/multisig/{account_id}
     */
    /**
     * @description Get multisig account info
     *
     * @tags Multisig
     * @name GetMultisigAccount
     * @request GET:/v2/multisig/{account_id}
     */
    getMultisigAccount(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetMultisigAccountData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetMultisigAccountData, TonApiError>({
            path: `/v2/multisig/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetMultisigAccountData, TonApiError>(req, {
            $ref: '#/components/schemas/Multisig'
        });
    }

    /**
     * @description Get multisig order
     *
     * @tags Multisig
     * @name GetMultisigOrder
     * @request GET:/v2/multisig/order/{account_id}
     */
    /**
     * @description Get multisig order
     *
     * @tags Multisig
     * @name GetMultisigOrder
     * @request GET:/v2/multisig/order/{account_id}
     */
    getMultisigOrder(
        accountId_Address: Address | string,
        params: RequestParams = {}
    ): TonApiPromise<GetMultisigOrderData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetMultisigOrderData, TonApiError>({
            path: `/v2/multisig/order/${accountId}`,
            method: 'GET',
            format: 'json',
            ...params
        });

        return prepareResponse<GetMultisigOrderData, TonApiError>(req, {
            $ref: '#/components/schemas/MultisigOrder'
        });
    }

    /**
     * @description Decode a given message. Only external incoming messages can be decoded currently.
     *
     * @tags Emulation
     * @name DecodeMessage
     * @request POST:/v2/message/decode
     */
    /**
     * @description Decode a given message. Only external incoming messages can be decoded currently.
     *
     * @tags Emulation
     * @name DecodeMessage
     * @request POST:/v2/message/decode
     */
    decodeMessage(
        data: {
            /** @format cell */
            boc: Cell | string;
        },
        params: RequestParams = {}
    ): TonApiPromise<DecodeMessageData, TonApiError> {
        const req = this.http.request<DecodeMessageData, TonApiError>({
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

        return prepareResponse<DecodeMessageData, TonApiError>(req, {
            $ref: '#/components/schemas/DecodedMessage'
        });
    }

    /**
     * @description Emulate sending message to retrieve general blockchain events
     *
     * @tags Emulation, Events
     * @name EmulateMessageToEvent
     * @request POST:/v2/events/emulate
     */
    /**
     * @description Emulate sending message to retrieve general blockchain events
     *
     * @tags Emulation, Events
     * @name EmulateMessageToEvent
     * @request POST:/v2/events/emulate
     */
    emulateMessageToEvent(
        data: {
            /** @format cell */
            boc: Cell | string;
        },
        query?: {
            ignore_signature_check?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<EmulateMessageToEventData, TonApiError> {
        const req = this.http.request<EmulateMessageToEventData, TonApiError>({
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

        return prepareResponse<EmulateMessageToEventData, TonApiError>(req, {
            $ref: '#/components/schemas/Event'
        });
    }

    /**
     * @description Emulate sending message to retrieve with a detailed execution trace
     *
     * @tags Emulation, Traces
     * @name EmulateMessageToTrace
     * @request POST:/v2/traces/emulate
     */
    /**
     * @description Emulate sending message to retrieve with a detailed execution trace
     *
     * @tags Emulation, Traces
     * @name EmulateMessageToTrace
     * @request POST:/v2/traces/emulate
     */
    emulateMessageToTrace(
        data: {
            /** @format cell */
            boc: Cell | string;
        },
        query?: {
            ignore_signature_check?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<EmulateMessageToTraceData, TonApiError> {
        const req = this.http.request<EmulateMessageToTraceData, TonApiError>({
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

        return prepareResponse<EmulateMessageToTraceData, TonApiError>(req, {
            $ref: '#/components/schemas/Trace'
        });
    }

    /**
     * @description Emulate sending message to retrieve the resulting wallet state
     *
     * @tags Emulation, Wallet
     * @name EmulateMessageToWallet
     * @request POST:/v2/wallet/emulate
     */
    /**
     * @description Emulate sending message to retrieve the resulting wallet state
     *
     * @tags Emulation, Wallet
     * @name EmulateMessageToWallet
     * @request POST:/v2/wallet/emulate
     */
    emulateMessageToWallet(
        data: {
            /** @format cell */
            boc: Cell | string;
            /** additional per account configuration */
            params?: {
                /**
                 * @format address
                 * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
                 */
                address: Address | string;
                /**
                 * @format bigint
                 * @example 10000000000
                 */
                balance?: bigint;
            }[];
        },
        query?: {
            /** @example "usd" */
            currency?: string;
        },
        params: RequestParams = {}
    ): TonApiPromise<EmulateMessageToWalletData, TonApiError> {
        const req = this.http.request<EmulateMessageToWalletData, TonApiError>({
            path: `/v2/wallet/emulate`,
            method: 'POST',
            query: query,
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

        return prepareResponse<EmulateMessageToWalletData, TonApiError>(req, {
            $ref: '#/components/schemas/MessageConsequences'
        });
    }

    /**
     * @description Emulate sending message to retrieve account-specific events
     *
     * @tags Emulation, Accounts
     * @name EmulateMessageToAccountEvent
     * @request POST:/v2/accounts/{account_id}/events/emulate
     */
    /**
     * @description Emulate sending message to retrieve account-specific events
     *
     * @tags Emulation, Accounts
     * @name EmulateMessageToAccountEvent
     * @request POST:/v2/accounts/{account_id}/events/emulate
     */
    emulateMessageToAccountEvent(
        accountId_Address: Address | string,
        data: {
            /** @format cell */
            boc: Cell | string;
        },
        query?: {
            ignore_signature_check?: boolean;
        },
        params: RequestParams = {}
    ): TonApiPromise<EmulateMessageToAccountEventData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<EmulateMessageToAccountEventData, TonApiError>({
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

        return prepareResponse<EmulateMessageToAccountEventData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountEvent'
        });
    }

    /**
     * @description Get history of purchases
     *
     * @tags Purchases
     * @name GetPurchaseHistory
     * @request GET:/v2/purchases/{account_id}/history
     */
    /**
     * @description Get history of purchases
     *
     * @tags Purchases
     * @name GetPurchaseHistory
     * @request GET:/v2/purchases/{account_id}/history
     */
    getPurchaseHistory(
        accountId_Address: Address | string,
        query?: {
            /**
             * omit this parameter to get last invoices
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
    ): TonApiPromise<GetPurchaseHistoryData, TonApiError> {
        const accountId = addressToString(accountId_Address);
        const req = this.http.request<GetPurchaseHistoryData, TonApiError>({
            path: `/v2/purchases/${accountId}/history`,
            method: 'GET',
            query: query,
            format: 'json',
            ...params
        });

        return prepareResponse<GetPurchaseHistoryData, TonApiError>(req, {
            $ref: '#/components/schemas/AccountPurchases'
        });
    }
}

// Default client instance for global methods
let defaultClient: TonApiClient | null = null;

/**
 * Initialize the global API client with configuration.
 * For advanced use cases with global methods.
 *
 * @param apiConfig - Configuration for the API client
 * @param apiConfig.baseUrl - API base URL
 * @param apiConfig.apiKey - API authentication key
 * @param apiConfig.baseApiParams - Additional request parameters
 *
 * @example
 * ```typescript
 * initClient({
 *   baseUrl: 'https://tonapi.io',
 *   apiKey: process.env.TON_API_KEY
 * });
 *
 * const { data, error } = await getAccount(address);
 * if (error) {
 *   console.error('Error:', error.message);
 * } else {
 *   console.log(data);
 * }
 * ```
 */
export function initClient(apiConfig: ApiConfig = {}): void {
    defaultClient = new TonApiClient(apiConfig);
}

/**
 * Get the current default client instance
 * @internal
 */
function getDefaultClient(): TonApiClient {
    if (!defaultClient) {
        throw new Error(
            'TonApiClient is not initialized. Call initClient() before using global methods, ' +
                'or use new TonApiClient() for instance-based approach.'
        );
    }
    return defaultClient;
}

/**
 * @description Get the openapi.json file
 *
 * @tags Utilities
 * @name GetOpenapiJson
 * @request GET:/v2/openapi.json
 */
type GetOpenapiJsonOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getOpenapiJson = async <ThrowOnError extends boolean = false>(
    options?: GetOpenapiJsonOptions<ThrowOnError>
): Promise<MethodResultSync<GetOpenapiJsonData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getOpenapiJson(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetOpenapiJsonData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetOpenapiJsonData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetOpenapiJsonData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the openapi.yml file
 *
 * @tags Utilities
 * @name GetOpenapiYml
 * @request GET:/v2/openapi.yml
 */
type GetOpenapiYmlOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getOpenapiYml = async <ThrowOnError extends boolean = false>(
    options?: GetOpenapiYmlOptions<ThrowOnError>
): Promise<MethodResultSync<GetOpenapiYmlData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getOpenapiYml(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetOpenapiYmlData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetOpenapiYmlData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetOpenapiYmlData,
            ThrowOnError
        >;
    }
};

/**
 * @description Status
 *
 * @tags Utilities
 * @name Status
 * @request GET:/v2/status
 */
type StatusOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const status = async <ThrowOnError extends boolean = false>(
    options?: StatusOptions<ThrowOnError>
): Promise<MethodResultSync<StatusData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.status(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<StatusData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<StatusData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            StatusData,
            ThrowOnError
        >;
    }
};

/**
 * @description parse address and display in all formats
 *
 * @tags Utilities
 * @name AddressParse
 * @request GET:/v2/address/{account_id}/parse
 */
type AddressParseOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const addressParse = async <ThrowOnError extends boolean = false>(
    options: AddressParseOptions<ThrowOnError>
): Promise<MethodResultSync<AddressParseData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.addressParse(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<AddressParseData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<AddressParseData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            AddressParseData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get reduced blockchain blocks data
 *
 * @tags Blockchain
 * @name GetReducedBlockchainBlocks
 * @request GET:/v2/blockchain/reduced/blocks
 */
type GetReducedBlockchainBlocksOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query: {
        /** @format int64 */
        from: number;
        /** @format int64 */
        to: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getReducedBlockchainBlocks = async <ThrowOnError extends boolean = false>(
    options: GetReducedBlockchainBlocksOptions<ThrowOnError>
): Promise<MethodResultSync<GetReducedBlockchainBlocksData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getReducedBlockchainBlocks(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetReducedBlockchainBlocksData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetReducedBlockchainBlocksData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetReducedBlockchainBlocksData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get blockchain block data
 *
 * @tags Blockchain
 * @name GetBlockchainBlock
 * @request GET:/v2/blockchain/blocks/{block_id}
 */
type GetBlockchainBlockOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainBlock = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainBlockOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainBlockData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainBlock(options.path.blockId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainBlockData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainBlockData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainBlockData,
            ThrowOnError
        >;
    }
};

/**
 * @description Download blockchain block BOC
 *
 * @tags Blockchain
 * @name DownloadBlockchainBlockBoc
 * @request GET:/v2/blockchain/blocks/{block_id}/boc
 */
type DownloadBlockchainBlockBocOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const downloadBlockchainBlockBoc = async <ThrowOnError extends boolean = false>(
    options: DownloadBlockchainBlockBocOptions<ThrowOnError>
): Promise<MethodResultSync<DownloadBlockchainBlockBocData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.downloadBlockchainBlockBoc(
            options.path.blockId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<DownloadBlockchainBlockBocData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            DownloadBlockchainBlockBocData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            DownloadBlockchainBlockBocData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get blockchain block shards
 *
 * @tags Blockchain
 * @name GetBlockchainMasterchainShards
 * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
 */
type GetBlockchainMasterchainShardsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterchainSeqno: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainMasterchainShards = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainMasterchainShardsOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainMasterchainShardsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainMasterchainShards(
            options.path.masterchainSeqno,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainMasterchainShardsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainMasterchainShardsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainMasterchainShardsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
 *
 * @tags Blockchain
 * @name GetBlockchainMasterchainBlocks
 * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
 */
type GetBlockchainMasterchainBlocksOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterchainSeqno: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainMasterchainBlocks = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainMasterchainBlocksOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainMasterchainBlocksData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainMasterchainBlocks(
            options.path.masterchainSeqno,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainMasterchainBlocksData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainMasterchainBlocksData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainMasterchainBlocksData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
 *
 * @tags Blockchain
 * @name GetBlockchainMasterchainTransactions
 * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
 */
type GetBlockchainMasterchainTransactionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterchainSeqno: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainMasterchainTransactions = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainMasterchainTransactionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainMasterchainTransactionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainMasterchainTransactions(
            options.path.masterchainSeqno,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<
                GetBlockchainMasterchainTransactionsData,
                ThrowOnError
            >;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainMasterchainTransactionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainMasterchainTransactionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get blockchain config from a specific block, if present.
 *
 * @tags Blockchain
 * @name GetBlockchainConfigFromBlock
 * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
 */
type GetBlockchainConfigFromBlockOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterchainSeqno: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainConfigFromBlock = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainConfigFromBlockOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainConfigFromBlockData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainConfigFromBlock(
            options.path.masterchainSeqno,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainConfigFromBlockData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainConfigFromBlockData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainConfigFromBlockData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw blockchain config from a specific block, if present.
 *
 * @tags Blockchain
 * @name GetRawBlockchainConfigFromBlock
 * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
 */
type GetRawBlockchainConfigFromBlockOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterchainSeqno: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockchainConfigFromBlock = async <ThrowOnError extends boolean = false>(
    options: GetRawBlockchainConfigFromBlockOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockchainConfigFromBlockData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawBlockchainConfigFromBlock(
            options.path.masterchainSeqno,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockchainConfigFromBlockData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockchainConfigFromBlockData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockchainConfigFromBlockData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get transactions from block
 *
 * @tags Blockchain
 * @name GetBlockchainBlockTransactions
 * @request GET:/v2/blockchain/blocks/{block_id}/transactions
 */
type GetBlockchainBlockTransactionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainBlockTransactions = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainBlockTransactionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainBlockTransactionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainBlockTransactions(
            options.path.blockId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainBlockTransactionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainBlockTransactionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainBlockTransactionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get transaction data
 *
 * @tags Blockchain
 * @name GetBlockchainTransaction
 * @request GET:/v2/blockchain/transactions/{transaction_id}
 */
type GetBlockchainTransactionOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        transactionId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainTransaction = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainTransactionOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainTransactionData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainTransaction(
            options.path.transactionId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainTransactionData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainTransactionData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainTransactionData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get transaction data by message hash
 *
 * @tags Blockchain
 * @name GetBlockchainTransactionByMessageHash
 * @request GET:/v2/blockchain/messages/{msg_id}/transaction
 */
type GetBlockchainTransactionByMessageHashOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        msgId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainTransactionByMessageHash = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainTransactionByMessageHashOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainTransactionByMessageHashData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainTransactionByMessageHash(
            options.path.msgId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<
                GetBlockchainTransactionByMessageHashData,
                ThrowOnError
            >;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainTransactionByMessageHashData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainTransactionByMessageHashData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get blockchain validators
 *
 * @tags Blockchain
 * @name GetBlockchainValidators
 * @request GET:/v2/blockchain/validators
 */
type GetBlockchainValidatorsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainValidators = async <ThrowOnError extends boolean = false>(
    options?: GetBlockchainValidatorsOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainValidatorsData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getBlockchainValidators(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainValidatorsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainValidatorsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainValidatorsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get last known masterchain block
 *
 * @tags Blockchain
 * @name GetBlockchainMasterchainHead
 * @request GET:/v2/blockchain/masterchain-head
 */
type GetBlockchainMasterchainHeadOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainMasterchainHead = async <ThrowOnError extends boolean = false>(
    options?: GetBlockchainMasterchainHeadOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainMasterchainHeadData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getBlockchainMasterchainHead(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainMasterchainHeadData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainMasterchainHeadData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainMasterchainHeadData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get low-level information about an account taken directly from the blockchain.
 *
 * @tags Blockchain
 * @name GetBlockchainRawAccount
 * @request GET:/v2/blockchain/accounts/{account_id}
 */
type GetBlockchainRawAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainRawAccount = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainRawAccountOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainRawAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainRawAccount(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainRawAccountData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainRawAccountData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainRawAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account transactions
 *
 * @tags Blockchain
 * @name GetBlockchainAccountTransactions
 * @request GET:/v2/blockchain/accounts/{account_id}/transactions
 */
type GetBlockchainAccountTransactionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainAccountTransactions = async <ThrowOnError extends boolean = false>(
    options: GetBlockchainAccountTransactionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainAccountTransactionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getBlockchainAccountTransactions(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainAccountTransactionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainAccountTransactionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainAccountTransactionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Execute get method for account
 *
 * @tags Blockchain
 * @name ExecGetMethodForBlockchainAccount
 * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
 */
type ExecGetMethodForBlockchainAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        methodName: string;
    };
    query?: {
        /**
         * Array of method arguments in string format. Supported value formats:
         * - "NaN" for Not-a-Number type
         * - "Null" for Null type
         * - Decimal integers for tinyint type (e.g., "100500")
         * - 0x-prefixed hex strings for int257 type (e.g., "0xfa01d78381ae32")
         * - TON blockchain addresses for slice type (e.g., "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e")
         * - Base64-encoded BOC for cell type (e.g., "te6ccgEBAQEAAgAAAA==")
         * - Hex-encoded BOC for slice type (e.g., "b5ee9c72010101010002000000")
         * @example ["0:9a33970f617bcd71acf2cd28357c067aa31859c02820d8f01d74c88063a8f4d8"]
         */
        args?: string[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const execGetMethodForBlockchainAccount = async <ThrowOnError extends boolean = false>(
    options: ExecGetMethodForBlockchainAccountOptions<ThrowOnError>
): Promise<MethodResultSync<ExecGetMethodForBlockchainAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.execGetMethodForBlockchainAccount(
            options.path.accountId,
            options.path.methodName,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<ExecGetMethodForBlockchainAccountData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            ExecGetMethodForBlockchainAccountData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            ExecGetMethodForBlockchainAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Execute get method for account
 *
 * @tags Blockchain
 * @name ExecGetMethodWithBodyForBlockchainAccount
 * @request POST:/v2/blockchain/accounts/{account_id}/methods/{method_name}
 */
type ExecGetMethodWithBodyForBlockchainAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        methodName: string;
    };
    body: {
        args: ExecGetMethodArg[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const execGetMethodWithBodyForBlockchainAccount = async <
    ThrowOnError extends boolean = false
>(
    options: ExecGetMethodWithBodyForBlockchainAccountOptions<ThrowOnError>
): Promise<MethodResultSync<ExecGetMethodWithBodyForBlockchainAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.execGetMethodWithBodyForBlockchainAccount(
            options.path.accountId,
            options.path.methodName,
            options.body,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<
                ExecGetMethodWithBodyForBlockchainAccountData,
                ThrowOnError
            >;
        }

        return { data: result, error: null } as MethodResultSync<
            ExecGetMethodWithBodyForBlockchainAccountData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            ExecGetMethodWithBodyForBlockchainAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Send message to blockchain
 *
 * @tags Blockchain
 * @name SendBlockchainMessage
 * @request POST:/v2/blockchain/message
 */
type SendBlockchainMessageOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell */
        boc?: Cell | string;
        /** @maxItems 5 */
        batch?: (Cell | string)[];
        meta?: Record<string, string>;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const sendBlockchainMessage = async <ThrowOnError extends boolean = false>(
    options: SendBlockchainMessageOptions<ThrowOnError>
): Promise<MethodResultSync<SendBlockchainMessageData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.sendBlockchainMessage(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<SendBlockchainMessageData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            SendBlockchainMessageData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            SendBlockchainMessageData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get blockchain config
 *
 * @tags Blockchain
 * @name GetBlockchainConfig
 * @request GET:/v2/blockchain/config
 */
type GetBlockchainConfigOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getBlockchainConfig = async <ThrowOnError extends boolean = false>(
    options?: GetBlockchainConfigOptions<ThrowOnError>
): Promise<MethodResultSync<GetBlockchainConfigData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getBlockchainConfig(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetBlockchainConfigData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetBlockchainConfigData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetBlockchainConfigData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw blockchain config
 *
 * @tags Blockchain
 * @name GetRawBlockchainConfig
 * @request GET:/v2/blockchain/config/raw
 */
type GetRawBlockchainConfigOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockchainConfig = async <ThrowOnError extends boolean = false>(
    options?: GetRawBlockchainConfigOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockchainConfigData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getRawBlockchainConfig(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockchainConfigData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockchainConfigData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockchainConfigData,
            ThrowOnError
        >;
    }
};

/**
 * @description Blockchain account inspect
 *
 * @tags Blockchain
 * @name BlockchainAccountInspect
 * @request GET:/v2/blockchain/accounts/{account_id}/inspect
 */
type BlockchainAccountInspectOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const blockchainAccountInspect = async <ThrowOnError extends boolean = false>(
    options: BlockchainAccountInspectOptions<ThrowOnError>
): Promise<MethodResultSync<BlockchainAccountInspectData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.blockchainAccountInspect(
            options.path.accountId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<BlockchainAccountInspectData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            BlockchainAccountInspectData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            BlockchainAccountInspectData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get library cell
 *
 * @tags Blockchain
 * @name GetLibraryByHash
 * @request GET:/v2/blockchain/libraries/{hash}
 */
type GetLibraryByHashOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        hash: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getLibraryByHash = async <ThrowOnError extends boolean = false>(
    options: GetLibraryByHashOptions<ThrowOnError>
): Promise<MethodResultSync<GetLibraryByHashData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getLibraryByHash(options.path.hash, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetLibraryByHashData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetLibraryByHashData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetLibraryByHashData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get human-friendly information about several accounts without low-level details.
 *
 * @tags Accounts
 * @name GetAccounts
 * @request POST:/v2/accounts/_bulk
 */
type GetAccountsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        accountIds: (Address | string)[];
    };
    query?: {
        /** @example "usd" */
        currency?: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccounts = async <ThrowOnError extends boolean = false>(
    options: GetAccountsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccounts(options.body, options?.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAccountsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get human-friendly information about an account without low-level details.
 *
 * @tags Accounts
 * @name GetAccount
 * @request GET:/v2/accounts/{account_id}
 */
type GetAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccount = async <ThrowOnError extends boolean = false>(
    options: GetAccountOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccount(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAccountData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account's domains
 *
 * @tags Accounts
 * @name AccountDnsBackResolve
 * @request GET:/v2/accounts/{account_id}/dns/backresolve
 */
type AccountDnsBackResolveOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const accountDnsBackResolve = async <ThrowOnError extends boolean = false>(
    options: AccountDnsBackResolveOptions<ThrowOnError>
): Promise<MethodResultSync<AccountDnsBackResolveData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.accountDnsBackResolve(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<AccountDnsBackResolveData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            AccountDnsBackResolveData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            AccountDnsBackResolveData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all Jettons balances by owner address
 *
 * @tags Accounts
 * @name GetAccountJettonsBalances
 * @request GET:/v2/accounts/{account_id}/jettons
 */
type GetAccountJettonsBalancesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountJettonsBalances = async <ThrowOnError extends boolean = false>(
    options: GetAccountJettonsBalancesOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountJettonsBalancesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountJettonsBalances(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountJettonsBalancesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountJettonsBalancesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountJettonsBalancesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get Jetton balance by owner address
 *
 * @tags Accounts
 * @name GetAccountJettonBalance
 * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}
 */
type GetAccountJettonBalanceOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        jettonId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountJettonBalance = async <ThrowOnError extends boolean = false>(
    options: GetAccountJettonBalanceOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountJettonBalanceData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountJettonBalance(
            options.path.accountId,
            options.path.jettonId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountJettonBalanceData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountJettonBalanceData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountJettonBalanceData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the transfer jettons history for account
 *
 * @tags Accounts
 * @name GetAccountJettonsHistory
 * @request GET:/v2/accounts/{account_id}/jettons/history
 */
type GetAccountJettonsHistoryOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountJettonsHistory = async <ThrowOnError extends boolean = false>(
    options: GetAccountJettonsHistoryOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountJettonsHistoryData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountJettonsHistory(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountJettonsHistoryData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountJettonsHistoryData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountJettonsHistoryData,
            ThrowOnError
        >;
    }
};

/**
 * @description Please use `getJettonAccountHistoryByID`` instead
 *
 * @tags Accounts
 * @name GetAccountJettonHistoryById
 * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
 * @deprecated
 */
type GetAccountJettonHistoryByIdOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        jettonId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountJettonHistoryById = async <ThrowOnError extends boolean = false>(
    options: GetAccountJettonHistoryByIdOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountJettonHistoryByIdData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountJettonHistoryById(
            options.path.accountId,
            options.path.jettonId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountJettonHistoryByIdData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountJettonHistoryByIdData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountJettonHistoryByIdData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all NFT items by owner address
 *
 * @tags Accounts
 * @name GetAccountNftItems
 * @request GET:/v2/accounts/{account_id}/nfts
 */
type GetAccountNftItemsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    query?: {
        /**
         * nft collection
         * @format address
         * @example "0:06d811f426598591b32b2c49f29f66c821368e4acb1de16762b04e0174532465"
         */
        collection?: Address | string;
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountNftItems = async <ThrowOnError extends boolean = false>(
    options: GetAccountNftItemsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountNftItemsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountNftItems(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountNftItemsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountNftItemsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountNftItemsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
 *
 * @tags Accounts
 * @name GetAccountEvents
 * @request GET:/v2/accounts/{account_id}/events
 */
type GetAccountEventsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountEvents = async <ThrowOnError extends boolean = false>(
    options: GetAccountEventsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountEventsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountEvents(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountEventsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountEventsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountEventsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get event for an account by event_id
 *
 * @tags Accounts
 * @name GetAccountEvent
 * @request GET:/v2/accounts/{account_id}/events/{event_id}
 */
type GetAccountEventOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        eventId: string;
    };
    query?: {
        /**
         * filter actions where requested account is not real subject (for example sender or receiver jettons)
         * @default false
         */
        subject_only?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountEvent = async <ThrowOnError extends boolean = false>(
    options: GetAccountEventOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountEventData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountEvent(
            options.path.accountId,
            options.path.eventId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountEventData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAccountEventData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountEventData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get traces for account
 *
 * @tags Accounts
 * @name GetAccountTraces
 * @request GET:/v2/accounts/{account_id}/traces
 */
type GetAccountTracesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountTraces = async <ThrowOnError extends boolean = false>(
    options: GetAccountTracesOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountTracesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountTraces(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountTracesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountTracesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountTracesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all subscriptions by wallet address
 *
 * @tags Accounts
 * @name GetAccountSubscriptions
 * @request GET:/v2/accounts/{account_id}/subscriptions
 */
type GetAccountSubscriptionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountSubscriptions = async <ThrowOnError extends boolean = false>(
    options: GetAccountSubscriptionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountSubscriptionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountSubscriptions(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountSubscriptionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountSubscriptionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountSubscriptionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Update internal cache for a particular account
 *
 * @tags Accounts
 * @name ReindexAccount
 * @request POST:/v2/accounts/{account_id}/reindex
 */
type ReindexAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const reindexAccount = async <ThrowOnError extends boolean = false>(
    options: ReindexAccountOptions<ThrowOnError>
): Promise<MethodResultSync<ReindexAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.reindexAccount(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<ReindexAccountData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<ReindexAccountData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            ReindexAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Search by account domain name
 *
 * @tags Accounts
 * @name SearchAccounts
 * @request GET:/v2/accounts/search
 */
type SearchAccountsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query: {
        /**
         * @minLength 3
         * @maxLength 15
         */
        name: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const searchAccounts = async <ThrowOnError extends boolean = false>(
    options: SearchAccountsOptions<ThrowOnError>
): Promise<MethodResultSync<SearchAccountsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.searchAccounts(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<SearchAccountsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<SearchAccountsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            SearchAccountsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get expiring account .ton dns
 *
 * @tags Accounts
 * @name GetAccountDnsExpiring
 * @request GET:/v2/accounts/{account_id}/dns/expiring
 */
type GetAccountDnsExpiringOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    query?: {
        /**
         * number of days before expiration
         * @min 1
         * @max 3660
         */
        period?: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountDnsExpiring = async <ThrowOnError extends boolean = false>(
    options: GetAccountDnsExpiringOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountDnsExpiringData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountDnsExpiring(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountDnsExpiringData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountDnsExpiringData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountDnsExpiringData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get public key by account id
 *
 * @tags Accounts
 * @name GetAccountPublicKey
 * @request GET:/v2/accounts/{account_id}/publickey
 */
type GetAccountPublicKeyOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountPublicKey = async <ThrowOnError extends boolean = false>(
    options: GetAccountPublicKeyOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountPublicKeyData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountPublicKey(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountPublicKeyData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountPublicKeyData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountPublicKeyData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account's multisigs
 *
 * @tags Accounts
 * @name GetAccountMultisigs
 * @request GET:/v2/accounts/{account_id}/multisigs
 */
type GetAccountMultisigsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountMultisigs = async <ThrowOnError extends boolean = false>(
    options: GetAccountMultisigsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountMultisigsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountMultisigs(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountMultisigsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountMultisigsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountMultisigsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account's balance change
 *
 * @tags Accounts
 * @name GetAccountDiff
 * @request GET:/v2/accounts/{account_id}/diff
 */
type GetAccountDiffOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountDiff = async <ThrowOnError extends boolean = false>(
    options: GetAccountDiffOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountDiffData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountDiff(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountDiffData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAccountDiffData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountDiffData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the transfer history of extra currencies for an account.
 *
 * @tags Accounts
 * @name GetAccountExtraCurrencyHistoryById
 * @request GET:/v2/accounts/{account_id}/extra-currency/{id}/history
 */
type GetAccountExtraCurrencyHistoryByIdOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        id: number;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountExtraCurrencyHistoryById = async <ThrowOnError extends boolean = false>(
    options: GetAccountExtraCurrencyHistoryByIdOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountExtraCurrencyHistoryByIdData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountExtraCurrencyHistoryById(
            options.path.accountId,
            options.path.id,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountExtraCurrencyHistoryByIdData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountExtraCurrencyHistoryByIdData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountExtraCurrencyHistoryByIdData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the transfer jetton history for account and jetton
 *
 * @tags Accounts
 * @name GetJettonAccountHistoryById
 * @request GET:/v2/jettons/{jetton_id}/accounts/{account_id}/history
 */
type GetJettonAccountHistoryByIdOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        jettonId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonAccountHistoryById = async <ThrowOnError extends boolean = false>(
    options: GetJettonAccountHistoryByIdOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonAccountHistoryByIdData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonAccountHistoryById(
            options.path.accountId,
            options.path.jettonId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonAccountHistoryByIdData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetJettonAccountHistoryByIdData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonAccountHistoryByIdData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the transfer nft history
 *
 * @tags NFT
 * @name GetAccountNftHistory
 * @request GET:/v2/accounts/{account_id}/nfts/history
 */
type GetAccountNftHistoryOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountNftHistory = async <ThrowOnError extends boolean = false>(
    options: GetAccountNftHistoryOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountNftHistoryData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountNftHistory(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountNftHistoryData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountNftHistoryData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountNftHistoryData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT collections
 *
 * @tags NFT
 * @name GetNftCollections
 * @request GET:/v2/nfts/collections
 */
type GetNftCollectionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftCollections = async <ThrowOnError extends boolean = false>(
    options?: GetNftCollectionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftCollectionsData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getNftCollections(options?.query, options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftCollectionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftCollectionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftCollectionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT collection by collection address
 *
 * @tags NFT
 * @name GetNftCollection
 * @request GET:/v2/nfts/collections/{account_id}
 */
type GetNftCollectionOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftCollection = async <ThrowOnError extends boolean = false>(
    options: GetNftCollectionOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftCollectionData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getNftCollection(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftCollectionData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftCollectionData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftCollectionData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT collection items by their addresses
 *
 * @tags NFT
 * @name GetNftCollectionItemsByAddresses
 * @request POST:/v2/nfts/collections/_bulk
 */
type GetNftCollectionItemsByAddressesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        accountIds: (Address | string)[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftCollectionItemsByAddresses = async <ThrowOnError extends boolean = false>(
    options: GetNftCollectionItemsByAddressesOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftCollectionItemsByAddressesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getNftCollectionItemsByAddresses(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftCollectionItemsByAddressesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftCollectionItemsByAddressesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftCollectionItemsByAddressesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT items from collection by collection address
 *
 * @tags NFT
 * @name GetItemsFromCollection
 * @request GET:/v2/nfts/collections/{account_id}/items
 */
type GetItemsFromCollectionOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getItemsFromCollection = async <ThrowOnError extends boolean = false>(
    options: GetItemsFromCollectionOptions<ThrowOnError>
): Promise<MethodResultSync<GetItemsFromCollectionData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getItemsFromCollection(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetItemsFromCollectionData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetItemsFromCollectionData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetItemsFromCollectionData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT items by their addresses
 *
 * @tags NFT
 * @name GetNftItemsByAddresses
 * @request POST:/v2/nfts/_bulk
 */
type GetNftItemsByAddressesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        accountIds: (Address | string)[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftItemsByAddresses = async <ThrowOnError extends boolean = false>(
    options: GetNftItemsByAddressesOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftItemsByAddressesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getNftItemsByAddresses(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftItemsByAddressesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftItemsByAddressesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftItemsByAddressesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get NFT item by its address
 *
 * @tags NFT
 * @name GetNftItemByAddress
 * @request GET:/v2/nfts/{account_id}
 */
type GetNftItemByAddressOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftItemByAddress = async <ThrowOnError extends boolean = false>(
    options: GetNftItemByAddressOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftItemByAddressData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getNftItemByAddress(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftItemByAddressData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftItemByAddressData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftItemByAddressData,
            ThrowOnError
        >;
    }
};

/**
 * @description Please use `getAccountNftHistory`` instead
 *
 * @tags NFT
 * @name GetNftHistoryById
 * @request GET:/v2/nfts/{account_id}/history
 * @deprecated
 */
type GetNftHistoryByIdOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getNftHistoryById = async <ThrowOnError extends boolean = false>(
    options: GetNftHistoryByIdOptions<ThrowOnError>
): Promise<MethodResultSync<GetNftHistoryByIdData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getNftHistoryById(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetNftHistoryByIdData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetNftHistoryByIdData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetNftHistoryByIdData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get full information about domain name
 *
 * @tags DNS
 * @name GetDnsInfo
 * @request GET:/v2/dns/{domain_name}
 */
type GetDnsInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        domainName: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getDnsInfo = async <ThrowOnError extends boolean = false>(
    options: GetDnsInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetDnsInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getDnsInfo(options.path.domainName, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetDnsInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetDnsInfoData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetDnsInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description DNS resolve for domain name
 *
 * @tags DNS
 * @name DnsResolve
 * @request GET:/v2/dns/{domain_name}/resolve
 */
type DnsResolveOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        domainName: string;
    };
    query?: {
        /** @default false */
        filter?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const dnsResolve = async <ThrowOnError extends boolean = false>(
    options: DnsResolveOptions<ThrowOnError>
): Promise<MethodResultSync<DnsResolveData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.dnsResolve(
            options.path.domainName,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<DnsResolveData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<DnsResolveData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            DnsResolveData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get domain bids
 *
 * @tags DNS
 * @name GetDomainBids
 * @request GET:/v2/dns/{domain_name}/bids
 */
type GetDomainBidsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        domainName: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getDomainBids = async <ThrowOnError extends boolean = false>(
    options: GetDomainBidsOptions<ThrowOnError>
): Promise<MethodResultSync<GetDomainBidsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getDomainBids(options.path.domainName, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetDomainBidsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetDomainBidsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetDomainBidsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all auctions
 *
 * @tags DNS
 * @name GetAllAuctions
 * @request GET:/v2/dns/auctions
 */
type GetAllAuctionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query?: {
        /**
         * domain filter for current auctions "ton" or "t.me"
         * @example "ton"
         */
        tld?: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAllAuctions = async <ThrowOnError extends boolean = false>(
    options?: GetAllAuctionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAllAuctionsData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getAllAuctions(options?.query, options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAllAuctionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAllAuctionsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAllAuctionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the trace by trace ID or hash of any transaction in trace
 *
 * @tags Traces
 * @name GetTrace
 * @request GET:/v2/traces/{trace_id}
 */
type GetTraceOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        traceId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getTrace = async <ThrowOnError extends boolean = false>(
    options: GetTraceOptions<ThrowOnError>
): Promise<MethodResultSync<GetTraceData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getTrace(options.path.traceId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetTraceData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetTraceData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetTraceData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
 *
 * @tags Events
 * @name GetEvent
 * @request GET:/v2/events/{event_id}
 */
type GetEventOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        eventId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getEvent = async <ThrowOnError extends boolean = false>(
    options: GetEventOptions<ThrowOnError>
): Promise<MethodResultSync<GetEventData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getEvent(options.path.eventId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetEventData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetEventData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetEventData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get a list of all indexed jetton masters in the blockchain.
 *
 * @tags Jettons
 * @name GetJettons
 * @request GET:/v2/jettons
 */
type GetJettonsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettons = async <ThrowOnError extends boolean = false>(
    options?: GetJettonsOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonsData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getJettons(options?.query, options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetJettonsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get jetton metadata by jetton master address
 *
 * @tags Jettons
 * @name GetJettonInfo
 * @request GET:/v2/jettons/{account_id}
 */
type GetJettonInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonInfo = async <ThrowOnError extends boolean = false>(
    options: GetJettonInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonInfo(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetJettonInfoData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get jetton metadata items by jetton master addresses
 *
 * @tags Jettons
 * @name GetJettonInfosByAddresses
 * @request POST:/v2/jettons/_bulk
 */
type GetJettonInfosByAddressesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        accountIds: (Address | string)[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonInfosByAddresses = async <ThrowOnError extends boolean = false>(
    options: GetJettonInfosByAddressesOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonInfosByAddressesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonInfosByAddresses(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonInfosByAddressesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetJettonInfosByAddressesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonInfosByAddressesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get jetton's holders
 *
 * @tags Jettons
 * @name GetJettonHolders
 * @request GET:/v2/jettons/{account_id}/holders
 */
type GetJettonHoldersOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    query?: {
        /**
         * @min 1
         * @max 1000
         * @default 1000
         */
        limit?: number;
        /**
         * @min 0
         * @max 9000
         * @default 0
         */
        offset?: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonHolders = async <ThrowOnError extends boolean = false>(
    options: GetJettonHoldersOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonHoldersData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonHolders(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonHoldersData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetJettonHoldersData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonHoldersData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get jetton's custom payload and state init required for transfer
 *
 * @tags Jettons
 * @name GetJettonTransferPayload
 * @request GET:/v2/jettons/{jetton_id}/transfer/{account_id}/payload
 */
type GetJettonTransferPayloadOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
        jettonId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonTransferPayload = async <ThrowOnError extends boolean = false>(
    options: GetJettonTransferPayloadOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonTransferPayloadData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonTransferPayload(
            options.path.accountId,
            options.path.jettonId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonTransferPayloadData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetJettonTransferPayloadData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonTransferPayloadData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get only jetton transfers in the event
 *
 * @tags Jettons
 * @name GetJettonsEvents
 * @request GET:/v2/events/{event_id}/jettons
 */
type GetJettonsEventsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        eventId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getJettonsEvents = async <ThrowOnError extends boolean = false>(
    options: GetJettonsEventsOptions<ThrowOnError>
): Promise<MethodResultSync<GetJettonsEventsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getJettonsEvents(options.path.eventId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetJettonsEventsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetJettonsEventsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetJettonsEventsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get extra currency info by id
 *
 * @tags ExtraCurrency
 * @name GetExtraCurrencyInfo
 * @request GET:/v2/extra-currency/{id}
 */
type GetExtraCurrencyInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        id: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getExtraCurrencyInfo = async <ThrowOnError extends boolean = false>(
    options: GetExtraCurrencyInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetExtraCurrencyInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getExtraCurrencyInfo(options.path.id, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetExtraCurrencyInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetExtraCurrencyInfoData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetExtraCurrencyInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description All pools where account participates
 *
 * @tags Staking
 * @name GetAccountNominatorsPools
 * @request GET:/v2/staking/nominator/{account_id}/pools
 */
type GetAccountNominatorsPoolsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountNominatorsPools = async <ThrowOnError extends boolean = false>(
    options: GetAccountNominatorsPoolsOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountNominatorsPoolsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountNominatorsPools(
            options.path.accountId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountNominatorsPoolsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountNominatorsPoolsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountNominatorsPoolsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Stacking pool info
 *
 * @tags Staking
 * @name GetStakingPoolInfo
 * @request GET:/v2/staking/pool/{account_id}
 */
type GetStakingPoolInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getStakingPoolInfo = async <ThrowOnError extends boolean = false>(
    options: GetStakingPoolInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetStakingPoolInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getStakingPoolInfo(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetStakingPoolInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetStakingPoolInfoData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetStakingPoolInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Pool history
 *
 * @tags Staking
 * @name GetStakingPoolHistory
 * @request GET:/v2/staking/pool/{account_id}/history
 */
type GetStakingPoolHistoryOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getStakingPoolHistory = async <ThrowOnError extends boolean = false>(
    options: GetStakingPoolHistoryOptions<ThrowOnError>
): Promise<MethodResultSync<GetStakingPoolHistoryData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getStakingPoolHistory(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetStakingPoolHistoryData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetStakingPoolHistoryData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetStakingPoolHistoryData,
            ThrowOnError
        >;
    }
};

/**
 * @description All pools available in network
 *
 * @tags Staking
 * @name GetStakingPools
 * @request GET:/v2/staking/pools
 */
type GetStakingPoolsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query?: {
        /**
         * account ID
         * @format address
         * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
         */
        available_for?: Address | string;
        /**
         * return also pools not from white list - just compatible by interfaces (maybe dangerous!)
         * @example false
         */
        include_unverified?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getStakingPools = async <ThrowOnError extends boolean = false>(
    options?: GetStakingPoolsOptions<ThrowOnError>
): Promise<MethodResultSync<GetStakingPoolsData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getStakingPools(options?.query, options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetStakingPoolsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetStakingPoolsData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetStakingPoolsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get TON storage providers deployed to the blockchain.
 *
 * @tags Storage
 * @name GetStorageProviders
 * @request GET:/v2/storage/providers
 */
type GetStorageProvidersOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getStorageProviders = async <ThrowOnError extends boolean = false>(
    options?: GetStorageProvidersOptions<ThrowOnError>
): Promise<MethodResultSync<GetStorageProvidersData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getStorageProviders(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetStorageProvidersData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetStorageProvidersData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetStorageProvidersData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the token price in the chosen currency for display only. Don’t use this for financial transactions.
 *
 * @tags Rates
 * @name GetRates
 * @request GET:/v2/rates
 */
type GetRatesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query: {
        /**
         * accept cryptocurrencies and jetton master addresses, separated by commas
         * @maxItems 100
         * @example ["ton","btc","EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"]
         */
        tokens: (Address | string)[];
        /**
         * accept cryptocurrencies and all possible fiat currencies
         * @maxItems 50
         * @example ["ton","btc","usd","rub"]
         */
        currencies: string[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRates = async <ThrowOnError extends boolean = false>(
    options: GetRatesOptions<ThrowOnError>
): Promise<MethodResultSync<GetRatesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRates(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRatesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetRatesData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRatesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get chart by token
 *
 * @tags Rates
 * @name GetChartRates
 * @request GET:/v2/rates/chart
 */
type GetChartRatesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query: {
        /**
         * accept cryptocurrency or jetton master address
         * @format token-or-address
         * @example [{"value":"ton","description":"cryptocurrency code (ton, btc, etc.)"},{"value":"EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs","description":"jetton master address usdt for example"}]
         */
        token: Address | string;
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getChartRates = async <ThrowOnError extends boolean = false>(
    options: GetChartRatesOptions<ThrowOnError>
): Promise<MethodResultSync<GetChartRatesData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getChartRates(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetChartRatesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetChartRatesData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetChartRatesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get the TON price from markets
 *
 * @tags Rates
 * @name GetMarketsRates
 * @request GET:/v2/rates/markets
 */
type GetMarketsRatesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getMarketsRates = async <ThrowOnError extends boolean = false>(
    options?: GetMarketsRatesOptions<ThrowOnError>
): Promise<MethodResultSync<GetMarketsRatesData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getMarketsRates(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetMarketsRatesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetMarketsRatesData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetMarketsRatesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get a payload for further token receipt
 *
 * @tags Connect
 * @name GetTonConnectPayload
 * @request GET:/v2/tonconnect/payload
 */
type GetTonConnectPayloadOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getTonConnectPayload = async <ThrowOnError extends boolean = false>(
    options?: GetTonConnectPayloadOptions<ThrowOnError>
): Promise<MethodResultSync<GetTonConnectPayloadData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getTonConnectPayload(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetTonConnectPayloadData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetTonConnectPayloadData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetTonConnectPayloadData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account info by state init
 *
 * @tags Connect
 * @name GetAccountInfoByStateInit
 * @request POST:/v2/tonconnect/stateinit
 */
type GetAccountInfoByStateInitOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell-base64 */
        stateInit: Cell | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountInfoByStateInit = async <ThrowOnError extends boolean = false>(
    options: GetAccountInfoByStateInitOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountInfoByStateInitData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountInfoByStateInit(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountInfoByStateInitData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAccountInfoByStateInitData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountInfoByStateInitData,
            ThrowOnError
        >;
    }
};

/**
 * @description Account verification and token issuance
 *
 * @tags Wallet
 * @name TonConnectProof
 * @request POST:/v2/wallet/auth/proof
 */
type TonConnectProofOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /**
         * @format address
         * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
         */
        address: Address | string;
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
            stateInit?: Cell | string;
        };
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const tonConnectProof = async <ThrowOnError extends boolean = false>(
    options: TonConnectProofOptions<ThrowOnError>
): Promise<MethodResultSync<TonConnectProofData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.tonConnectProof(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<TonConnectProofData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<TonConnectProofData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            TonConnectProofData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get account seqno
 *
 * @tags Wallet
 * @name GetAccountSeqno
 * @request GET:/v2/wallet/{account_id}/seqno
 */
type GetAccountSeqnoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAccountSeqno = async <ThrowOnError extends boolean = false>(
    options: GetAccountSeqnoOptions<ThrowOnError>
): Promise<MethodResultSync<GetAccountSeqnoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAccountSeqno(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAccountSeqnoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetAccountSeqnoData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAccountSeqnoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get human-friendly information about a wallet without low-level details.
 *
 * @tags Wallet
 * @name GetWalletInfo
 * @request GET:/v2/wallet/{account_id}
 */
type GetWalletInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getWalletInfo = async <ThrowOnError extends boolean = false>(
    options: GetWalletInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetWalletInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getWalletInfo(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetWalletInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetWalletInfoData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetWalletInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get wallets by public key
 *
 * @tags Wallet
 * @name GetWalletsByPublicKey
 * @request GET:/v2/pubkeys/{public_key}/wallets
 */
type GetWalletsByPublicKeyOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        publicKey: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getWalletsByPublicKey = async <ThrowOnError extends boolean = false>(
    options: GetWalletsByPublicKeyOptions<ThrowOnError>
): Promise<MethodResultSync<GetWalletsByPublicKeyData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getWalletsByPublicKey(options.path.publicKey, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetWalletsByPublicKeyData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetWalletsByPublicKeyData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetWalletsByPublicKeyData,
            ThrowOnError
        >;
    }
};

/**
 * @description Returns configuration of gasless transfers
 *
 * @tags Gasless
 * @name GaslessConfig
 * @request GET:/v2/gasless/config
 */
type GaslessConfigOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const gaslessConfig = async <ThrowOnError extends boolean = false>(
    options?: GaslessConfigOptions<ThrowOnError>
): Promise<MethodResultSync<GaslessConfigData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.gaslessConfig(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GaslessConfigData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GaslessConfigData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GaslessConfigData,
            ThrowOnError
        >;
    }
};

/**
 * @description Estimates the cost of the given messages and returns a payload to sign
 *
 * @tags Gasless
 * @name GaslessEstimate
 * @request POST:/v2/gasless/estimate/{master_id}
 */
type GaslessEstimateOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        masterId: Address | string;
    };
    body: {
        /**
         * TONAPI verifies that the account has enough jettons to pay the commission and make a transfer.
         * @default false
         */
        throwErrorIfNotEnoughJettons?: boolean;
        /** @default false */
        returnEmulation?: boolean;
        /** @format address */
        walletAddress: Address | string;
        walletPublicKey: string;
        messages: {
            /** @format cell */
            boc: Cell | string;
        }[];
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const gaslessEstimate = async <ThrowOnError extends boolean = false>(
    options: GaslessEstimateOptions<ThrowOnError>
): Promise<MethodResultSync<GaslessEstimateData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.gaslessEstimate(
            options.path.masterId,
            options.body,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GaslessEstimateData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GaslessEstimateData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GaslessEstimateData,
            ThrowOnError
        >;
    }
};

/**
 * @description Submits the signed gasless transaction message to the network
 *
 * @tags Gasless
 * @name GaslessSend
 * @request POST:/v2/gasless/send
 */
type GaslessSendOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** hex encoded public key */
        walletPublicKey: string;
        /** @format cell */
        boc: Cell | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const gaslessSend = async <ThrowOnError extends boolean = false>(
    options: GaslessSendOptions<ThrowOnError>
): Promise<MethodResultSync<GaslessSendData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.gaslessSend(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GaslessSendData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GaslessSendData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GaslessSendData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw masterchain info
 *
 * @tags Lite Server
 * @name GetRawMasterchainInfo
 * @request GET:/v2/liteserver/get_masterchain_info
 */
type GetRawMasterchainInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawMasterchainInfo = async <ThrowOnError extends boolean = false>(
    options?: GetRawMasterchainInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawMasterchainInfoData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getRawMasterchainInfo(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawMasterchainInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawMasterchainInfoData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawMasterchainInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw masterchain info ext
 *
 * @tags Lite Server
 * @name GetRawMasterchainInfoExt
 * @request GET:/v2/liteserver/get_masterchain_info_ext
 */
type GetRawMasterchainInfoExtOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    query: {
        /**
         * mode
         * @format int32
         * @example 0
         */
        mode: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawMasterchainInfoExt = async <ThrowOnError extends boolean = false>(
    options: GetRawMasterchainInfoExtOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawMasterchainInfoExtData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawMasterchainInfoExt(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawMasterchainInfoExtData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawMasterchainInfoExtData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawMasterchainInfoExtData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw time
 *
 * @tags Lite Server
 * @name GetRawTime
 * @request GET:/v2/liteserver/get_time
 */
type GetRawTimeOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawTime = async <ThrowOnError extends boolean = false>(
    options?: GetRawTimeOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawTimeData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getRawTime(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawTimeData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetRawTimeData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawTimeData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw blockchain block
 *
 * @tags Lite Server
 * @name GetRawBlockchainBlock
 * @request GET:/v2/liteserver/get_block/{block_id}
 */
type GetRawBlockchainBlockOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockchainBlock = async <ThrowOnError extends boolean = false>(
    options: GetRawBlockchainBlockOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockchainBlockData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawBlockchainBlock(options.path.blockId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockchainBlockData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockchainBlockData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockchainBlockData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw blockchain block state
 *
 * @tags Lite Server
 * @name GetRawBlockchainBlockState
 * @request GET:/v2/liteserver/get_state/{block_id}
 */
type GetRawBlockchainBlockStateOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockchainBlockState = async <ThrowOnError extends boolean = false>(
    options: GetRawBlockchainBlockStateOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockchainBlockStateData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawBlockchainBlockState(
            options.path.blockId,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockchainBlockStateData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockchainBlockStateData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockchainBlockStateData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw blockchain block header
 *
 * @tags Lite Server
 * @name GetRawBlockchainBlockHeader
 * @request GET:/v2/liteserver/get_block_header/{block_id}
 */
type GetRawBlockchainBlockHeaderOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    query: {
        /**
         * mode
         * @format int32
         * @example 0
         */
        mode: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockchainBlockHeader = async <ThrowOnError extends boolean = false>(
    options: GetRawBlockchainBlockHeaderOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockchainBlockHeaderData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawBlockchainBlockHeader(
            options.path.blockId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockchainBlockHeaderData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockchainBlockHeaderData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockchainBlockHeaderData,
            ThrowOnError
        >;
    }
};

/**
 * @description Send raw message to blockchain
 *
 * @tags Lite Server
 * @name SendRawMessage
 * @request POST:/v2/liteserver/send_message
 */
type SendRawMessageOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell-base64 */
        body: Cell | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const sendRawMessage = async <ThrowOnError extends boolean = false>(
    options: SendRawMessageOptions<ThrowOnError>
): Promise<MethodResultSync<SendRawMessageData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.sendRawMessage(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<SendRawMessageData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<SendRawMessageData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            SendRawMessageData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw account state
 *
 * @tags Lite Server
 * @name GetRawAccountState
 * @request GET:/v2/liteserver/get_account_state/{account_id}
 */
type GetRawAccountStateOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    query?: {
        /**
         * target block: (workchain,shard,seqno,root_hash,file_hash)
         * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
         */
        target_block?: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawAccountState = async <ThrowOnError extends boolean = false>(
    options: GetRawAccountStateOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawAccountStateData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawAccountState(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawAccountStateData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawAccountStateData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawAccountStateData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw shard info
 *
 * @tags Lite Server
 * @name GetRawShardInfo
 * @request GET:/v2/liteserver/get_shard_info/{block_id}
 */
type GetRawShardInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawShardInfo = async <ThrowOnError extends boolean = false>(
    options: GetRawShardInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawShardInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawShardInfo(
            options.path.blockId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawShardInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetRawShardInfoData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawShardInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get all raw shards info
 *
 * @tags Lite Server
 * @name GetAllRawShardsInfo
 * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
 */
type GetAllRawShardsInfoOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getAllRawShardsInfo = async <ThrowOnError extends boolean = false>(
    options: GetAllRawShardsInfoOptions<ThrowOnError>
): Promise<MethodResultSync<GetAllRawShardsInfoData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getAllRawShardsInfo(options.path.blockId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetAllRawShardsInfoData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetAllRawShardsInfoData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetAllRawShardsInfoData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw transactions
 *
 * @tags Lite Server
 * @name GetRawTransactions
 * @request GET:/v2/liteserver/get_transactions/{account_id}
 */
type GetRawTransactionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawTransactions = async <ThrowOnError extends boolean = false>(
    options: GetRawTransactionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawTransactionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawTransactions(
            options.path.accountId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawTransactionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawTransactionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawTransactionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw list block transactions
 *
 * @tags Lite Server
 * @name GetRawListBlockTransactions
 * @request GET:/v2/liteserver/list_block_transactions/{block_id}
 */
type GetRawListBlockTransactionsOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
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
        account_id?: Address | string;
        /**
         * lt
         * @format int64
         * @example 23814011000000
         */
        lt?: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawListBlockTransactions = async <ThrowOnError extends boolean = false>(
    options: GetRawListBlockTransactionsOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawListBlockTransactionsData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawListBlockTransactions(
            options.path.blockId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawListBlockTransactionsData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawListBlockTransactionsData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawListBlockTransactionsData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw block proof
 *
 * @tags Lite Server
 * @name GetRawBlockProof
 * @request GET:/v2/liteserver/get_block_proof
 */
type GetRawBlockProofOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawBlockProof = async <ThrowOnError extends boolean = false>(
    options: GetRawBlockProofOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawBlockProofData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawBlockProof(options.query, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawBlockProofData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawBlockProofData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawBlockProofData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw config
 *
 * @tags Lite Server
 * @name GetRawConfig
 * @request GET:/v2/liteserver/get_config_all/{block_id}
 */
type GetRawConfigOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    query: {
        /**
         * mode
         * @format int32
         * @example 0
         */
        mode: number;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawConfig = async <ThrowOnError extends boolean = false>(
    options: GetRawConfigOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawConfigData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawConfig(
            options.path.blockId,
            options.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawConfigData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<GetRawConfigData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawConfigData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get raw shard block proof
 *
 * @tags Lite Server
 * @name GetRawShardBlockProof
 * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
 */
type GetRawShardBlockProofOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        blockId: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getRawShardBlockProof = async <ThrowOnError extends boolean = false>(
    options: GetRawShardBlockProofOptions<ThrowOnError>
): Promise<MethodResultSync<GetRawShardBlockProofData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getRawShardBlockProof(options.path.blockId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetRawShardBlockProofData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetRawShardBlockProofData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetRawShardBlockProofData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get out msg queue sizes
 *
 * @tags Lite Server
 * @name GetOutMsgQueueSizes
 * @request GET:/v2/liteserver/get_out_msg_queue_sizes
 */
type GetOutMsgQueueSizesOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getOutMsgQueueSizes = async <ThrowOnError extends boolean = false>(
    options?: GetOutMsgQueueSizesOptions<ThrowOnError>
): Promise<MethodResultSync<GetOutMsgQueueSizesData, ThrowOnError>> => {
    try {
        const client = options?.client || getDefaultClient();
        const result = await client.getOutMsgQueueSizes(options?.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetOutMsgQueueSizesData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetOutMsgQueueSizesData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetOutMsgQueueSizesData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get multisig account info
 *
 * @tags Multisig
 * @name GetMultisigAccount
 * @request GET:/v2/multisig/{account_id}
 */
type GetMultisigAccountOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getMultisigAccount = async <ThrowOnError extends boolean = false>(
    options: GetMultisigAccountOptions<ThrowOnError>
): Promise<MethodResultSync<GetMultisigAccountData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getMultisigAccount(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetMultisigAccountData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetMultisigAccountData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetMultisigAccountData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get multisig order
 *
 * @tags Multisig
 * @name GetMultisigOrder
 * @request GET:/v2/multisig/order/{account_id}
 */
type GetMultisigOrderOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getMultisigOrder = async <ThrowOnError extends boolean = false>(
    options: GetMultisigOrderOptions<ThrowOnError>
): Promise<MethodResultSync<GetMultisigOrderData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getMultisigOrder(options.path.accountId, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetMultisigOrderData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetMultisigOrderData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetMultisigOrderData,
            ThrowOnError
        >;
    }
};

/**
 * @description Decode a given message. Only external incoming messages can be decoded currently.
 *
 * @tags Emulation
 * @name DecodeMessage
 * @request POST:/v2/message/decode
 */
type DecodeMessageOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell */
        boc: Cell | string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const decodeMessage = async <ThrowOnError extends boolean = false>(
    options: DecodeMessageOptions<ThrowOnError>
): Promise<MethodResultSync<DecodeMessageData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.decodeMessage(options.body, options.params);

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<DecodeMessageData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<DecodeMessageData, ThrowOnError>;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            DecodeMessageData,
            ThrowOnError
        >;
    }
};

/**
 * @description Emulate sending message to retrieve general blockchain events
 *
 * @tags Emulation, Events
 * @name EmulateMessageToEvent
 * @request POST:/v2/events/emulate
 */
type EmulateMessageToEventOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell */
        boc: Cell | string;
    };
    query?: {
        ignore_signature_check?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const emulateMessageToEvent = async <ThrowOnError extends boolean = false>(
    options: EmulateMessageToEventOptions<ThrowOnError>
): Promise<MethodResultSync<EmulateMessageToEventData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.emulateMessageToEvent(
            options.body,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<EmulateMessageToEventData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            EmulateMessageToEventData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            EmulateMessageToEventData,
            ThrowOnError
        >;
    }
};

/**
 * @description Emulate sending message to retrieve with a detailed execution trace
 *
 * @tags Emulation, Traces
 * @name EmulateMessageToTrace
 * @request POST:/v2/traces/emulate
 */
type EmulateMessageToTraceOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell */
        boc: Cell | string;
    };
    query?: {
        ignore_signature_check?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const emulateMessageToTrace = async <ThrowOnError extends boolean = false>(
    options: EmulateMessageToTraceOptions<ThrowOnError>
): Promise<MethodResultSync<EmulateMessageToTraceData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.emulateMessageToTrace(
            options.body,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<EmulateMessageToTraceData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            EmulateMessageToTraceData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            EmulateMessageToTraceData,
            ThrowOnError
        >;
    }
};

/**
 * @description Emulate sending message to retrieve the resulting wallet state
 *
 * @tags Emulation, Wallet
 * @name EmulateMessageToWallet
 * @request POST:/v2/wallet/emulate
 */
type EmulateMessageToWalletOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    body: {
        /** @format cell */
        boc: Cell | string;
        /** additional per account configuration */
        params?: {
            /**
             * @format address
             * @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b"
             */
            address: Address | string;
            /**
             * @format bigint
             * @example 10000000000
             */
            balance?: bigint;
        }[];
    };
    query?: {
        /** @example "usd" */
        currency?: string;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const emulateMessageToWallet = async <ThrowOnError extends boolean = false>(
    options: EmulateMessageToWalletOptions<ThrowOnError>
): Promise<MethodResultSync<EmulateMessageToWalletData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.emulateMessageToWallet(
            options.body,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<EmulateMessageToWalletData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            EmulateMessageToWalletData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            EmulateMessageToWalletData,
            ThrowOnError
        >;
    }
};

/**
 * @description Emulate sending message to retrieve account-specific events
 *
 * @tags Emulation, Accounts
 * @name EmulateMessageToAccountEvent
 * @request POST:/v2/accounts/{account_id}/events/emulate
 */
type EmulateMessageToAccountEventOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    body: {
        /** @format cell */
        boc: Cell | string;
    };
    query?: {
        ignore_signature_check?: boolean;
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const emulateMessageToAccountEvent = async <ThrowOnError extends boolean = false>(
    options: EmulateMessageToAccountEventOptions<ThrowOnError>
): Promise<MethodResultSync<EmulateMessageToAccountEventData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.emulateMessageToAccountEvent(
            options.path.accountId,
            options.body,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<EmulateMessageToAccountEventData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            EmulateMessageToAccountEventData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            EmulateMessageToAccountEventData,
            ThrowOnError
        >;
    }
};

/**
 * @description Get history of purchases
 *
 * @tags Purchases
 * @name GetPurchaseHistory
 * @request GET:/v2/purchases/{account_id}/history
 */
type GetPurchaseHistoryOptions<ThrowOnError extends boolean = false> = {
    client?: TonApiClient;
    path: {
        accountId: Address | string;
    };
    query?: {
        /**
         * omit this parameter to get last invoices
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
    };
    params?: RequestParams;
    throwOnError?: ThrowOnError;
};
export const getPurchaseHistory = async <ThrowOnError extends boolean = false>(
    options: GetPurchaseHistoryOptions<ThrowOnError>
): Promise<MethodResultSync<GetPurchaseHistoryData, ThrowOnError>> => {
    try {
        const client = options.client || getDefaultClient();
        const result = await client.getPurchaseHistory(
            options.path.accountId,
            options?.query,
            options.params
        );

        // If throwOnError is true, return data directly
        if (options?.throwOnError) {
            return result as MethodResultSync<GetPurchaseHistoryData, ThrowOnError>;
        }

        return { data: result, error: null } as MethodResultSync<
            GetPurchaseHistoryData,
            ThrowOnError
        >;
    } catch (error) {
        // If throwOnError is true, rethrow the error
        if (options?.throwOnError) {
            throw error;
        }
        return { data: null, error: error as TonApiError } as MethodResultSync<
            GetPurchaseHistoryData,
            ThrowOnError
        >;
    }
};
