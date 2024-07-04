import { Address, Cell } from "@ton/core";
import { client } from "./client.test";

test("Cell hex in response test", async () => {
  const addressString =
    "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168";
  const addressObject = Address.parse(addressString);
  const res = await client.blockchain.getBlockchainRawAccount(addressObject);

  expect(res).toBeDefined();
  expect(res.code).toBeDefined();
  expect(res.code).toBeInstanceOf(Cell);
});

test("Cell hex in request body test", async () => {
  const addressString =
    "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168";
  const addressObject = Address.parse(addressString);
  const res = await client.blockchain.getBlockchainRawAccount(addressObject);

  expect(res).toBeDefined();
  expect(res.code).toBeDefined();
  expect(res.code).toBeInstanceOf(Cell);
});

test("Cell base64 in request test", async () => {
  const addressString =
    "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168";
  const addressObject = Address.parse(addressString);
  const res = await client.blockchain.getBlockchainRawAccount(addressObject);

  expect(res).toBeDefined();
  expect(res.code).toBeDefined();
  expect(res.code).toBeInstanceOf(Cell);
});

test("Cell base64 in response test", async () => {
  const addressString =
    "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168";
  const addressObject = Address.parse(addressString);
  const res = await client.blockchain.getBlockchainRawAccount(addressObject);

  expect(res).toBeDefined();
  expect(res.code).toBeDefined();
  expect(res.code).toBeInstanceOf(Cell);
});