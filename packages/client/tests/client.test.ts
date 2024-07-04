import { HttpClient, Api, ApiConfig } from "../src/client";
import { Address, Cell, Tuple, TupleItem } from "@ton/core";
import fetchMock from "jest-fetch-mock";
import JSONBigWrapper from "json-bigint";

export const JSONBig = JSONBigWrapper({ useNativeBigInt: true });

const config: ApiConfig = {
  baseUrl: "https://tonapi.io",
  baseApiParams: {
    headers: {
      "Content-type": "application/json",
    },
  },
};

const http = new HttpClient(config);
export const client = new Api(http);

test("BigInt parse data test", async () => {
  fetchMock.enableMocks();

  const mockResponseString = JSONBig.stringify({
    accounts: [
      {
        address:
          "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168",
        balance: 471698230471698230471698230471698230n,
        last_activity: 1717957542,
        status: "active",
        interfaces: ["wallet_v4r2"],
        name: "moiseev.ton",
        is_scam: false,
        memo_required: false,
        get_methods: ["get_public_key", "seqno"],
        is_wallet: true,
      },
      {
        address:
          "0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40",
        balance: 47602800,
        last_activity: 1715684124,
        status: "active",
        interfaces: ["nft_item"],
        get_methods: ["get_nft_data"],
        is_wallet: false,
      },
    ],
  });
  fetchMock.mockResponseOnce(mockResponseString);

  const addressStrings = [
    "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168",
    "0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40",
  ];
  const accountIds = addressStrings.map((value) => Address.parse(value));
  const res = await client.accounts.getAccounts({ accountIds });
  const { accounts } = res;

  expect(res).toBeDefined();
  expect(accounts).toHaveLength(2);
  expect(accounts[0].balance).toBe(471698230471698230471698230471698230n);
  expect(typeof accounts[0].balance).toBe("bigint");
  expect(accounts[1].balance).toBe(47602800n);
  expect(typeof accounts[1].balance).toBe("bigint");

  fetchMock.disableMocks();
});

function guardTuple(item: TupleItem): item is Tuple {
  return item.type === "tuple";
}

test("Tuple test", async () => {
  fetchMock.enableMocks();
  const mockResponseString = JSONBig.stringify({
    success: true,
    exit_code: 0,
    stack: [
      {
        type: "tuple",
        tuple: [
          {
            type: "tuple",
            tuple: [
              {
                type: "num",
                num: "0xd2d023d8639a286efe8fb2e25ffe18ef5a22039294e49159d8be807febea9aef",
              },
              { type: "num", num: "0x1286caa66b139" },
              { type: "num", num: "0x0" },
              { type: "num", num: "0x0" },
            ],
          },
          {
            type: "tuple",
            tuple: [
              {
                type: "num",
                num: "0x633615bb4c1afc3946c9aefa1854f731d2b446b4b2bcf3d1886e91e382cb71f7",
              },
              { type: "num", num: "0x10888114e382" },
              { type: "num", num: "0x0" },
              { type: "num", num: "0x0" },
            ],
          },
          {
            type: "tuple",
            tuple: [
              {
                type: "num",
                num: "0x2fcb15f983f1afca77cd97f5d5411799debb2d2b96ccd8e62ef67beb7a7d5246",
              },
              { type: "num", num: "0xb6452253f41" },
              { type: "num", num: "0x0" },
              { type: "num", num: "0x0" },
            ],
          },
        ],
      },
    ],
    decoded: {
      nominators: [
        {
          address:
            "d2d023d8639a286efe8fb2e25ffe18ef5a22039294e49159d8be807febea9aef",
          amount: 325922157146425,
          pending_deposit_amount: 0,
          withdraw_requested: false,
        },
        {
          address:
            "633615bb4c1afc3946c9aefa1854f731d2b446b4b2bcf3d1886e91e382cb71f7",
          amount: 18178467226498,
          pending_deposit_amount: 0,
          withdraw_requested: false,
        },
        {
          address:
            "2fcb15f983f1afca77cd97f5d5411799debb2d2b96ccd8e62ef67beb7a7d5246",
          amount: 12525502807873,
          pending_deposit_amount: 0,
          withdraw_requested: false,
        },
      ],
    },
  });
  fetchMock.mockResponseOnce(mockResponseString);

  const addressString = "Ef_X4pRKtgXOXYMOXNgXNRdlhkNKJ9bTKMfqvj6HDIiQG98F";
  const addressObject = Address.parse(addressString);
  const res = await client.blockchain.execGetMethodForBlockchainAccount(
    addressObject,
    "list_nominators"
  );
  const highLevelTuple = res.stack[0];

  expect(res).toBeDefined();
  expect(res.success).toBeDefined();
  expect(highLevelTuple).toBeDefined();
  expect(highLevelTuple.type).toBeDefined();
  expect(highLevelTuple.type).toBe("tuple");

  if (guardTuple(highLevelTuple)) {
    expect(highLevelTuple.items).toBeDefined();

    const secondLevelTupleFirst = highLevelTuple.items[0];
    expect(secondLevelTupleFirst).toBeDefined();
    expect(secondLevelTupleFirst.type).toBeDefined();
    expect(secondLevelTupleFirst.type).toBe("tuple");

    if (guardTuple(secondLevelTupleFirst)) {
      expect(secondLevelTupleFirst.items).toBeDefined();
    } else {
      throw new Error("Second Tuple guard failed");
    }

  } else {
    throw new Error("First Tuple guard failed");
  }

  fetchMock.disableMocks();
});
