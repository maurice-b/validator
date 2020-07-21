import assertString from "./util/assertString.ts";

export default function isLowerCase(str: string): boolean {
    assertString(str);
    return str === str.toLowerCase();
}
