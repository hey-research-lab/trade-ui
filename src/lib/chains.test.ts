/**
 * Explorer links per chain.
 * Run: `npm test` (or `node --test src/lib/chains.test.ts`) from trade-ui/.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { explorerAccountUrl, explorerTxUrl, explorerUrl } from "./chains.ts";

const ADDRESS = "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"; // WETH on Robinhood Chain
const TX = "0x60f2d8e8ca8d64da9d3ded83a759a123ea28aca9f51a8f9b62cf34835b770cf9";

test("Robinhood Chain links open its Blockscout explorer", () => {
  assert.equal(explorerAccountUrl(ADDRESS, "robinhood"), `https://robinhoodchain.blockscout.com/address/${ADDRESS}`);
  assert.equal(explorerTxUrl(TX, "robinhood"), `https://robinhoodchain.blockscout.com/tx/${TX}`);
  assert.equal(explorerUrl("token", ADDRESS, "robinhood"), `https://robinhoodchain.blockscout.com/token/${ADDRESS}`);
});
