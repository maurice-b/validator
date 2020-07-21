import {test} from "./test-template.ts";

test({
    validator: "isCreditCard",
    valid: [
        "375556917985515",
        "36050234196908",
        "4716461583322103",
        "4716-2210-5188-5662",
        "4929 7226 5379 7141",
        "5398228707871527",
        "6283875070985593",
        "6263892624162870",
        "6234917882863855",
        "6234698580215388",
        "6226050967750613",
        "6246281879460688",
        "2222155765072228",
        "2225855203075256",
        "2720428011723762",
        "2718760626256570",
        "6765780016990268",
        "4716989580001715211",
    ],
    invalid: [
        "foo",
        "foo",
        "5398228707871528",
        "2718760626256571",
        "2721465526338453",
        "2220175103860763",
        "375556917985515999999993",
        "899999996234917882863855",
        "prefix6234917882863855",
        "623491788middle2863855",
        "6234917882863855suffix",
        "4716989580001715213",
    ],
});
