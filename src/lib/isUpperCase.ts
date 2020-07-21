import assertString from "./util/assertString.ts";

export default function isUpperCase(str: string): boolean {
    assertString(str);
    return str === str.toUpperCase();
}
