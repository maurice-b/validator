// supports Bech32 addresses
import assertString from "./util/assertString.ts";

const btc: RegExp = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

export default function isBtcAddress(str: string): boolean {
  assertString(str);
  return btc.test(str);
}
