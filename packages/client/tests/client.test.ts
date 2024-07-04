import { HttpClient, Api, ApiConfig } from "../src/client";
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

test("Client test", async () => {
  const res = await client.blockchain.status();
  expect(res).toBeDefined();
});