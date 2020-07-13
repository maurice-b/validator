import {test} from "./test-template.ts";


test({
    validator: "isISBN",
    args: [10],
    valid: [
        "3836221195",
        "3-8362-2119-5",
        "3 8362 2119 5",
        "1617290858",
        "1-61729-085-8",
        "1 61729 085-8",
        "0007269706",
        "0-00-726970-6",
        "0 00 726970 6",
        "3423214120",
        "3-423-21412-0",
        "3 423 21412 0",
        "340101319X",
        "3-401-01319-X",
        "3 401 01319 X",
    ],
    invalid: [
        "3423214121",
        "3-423-21412-1",
        "3 423 21412 1",
        "978-3836221191",
        "9783836221191",
        "123456789a",
        "foo",
        "",
    ],
});

test({
    validator: "isISBN",
    args: [13],
    valid: [
        "9783836221191",
        "978-3-8362-2119-1",
        "978 3 8362 2119 1",
        "9783401013190",
        "978-3401013190",
        "978 3401013190",
        "9784873113685",
        "978-4-87311-368-5",
        "978 4 87311 368 5",
    ],
    invalid: [
        "9783836221190",
        "978-3-8362-2119-0",
        "978 3 8362 2119 0",
        "3836221195",
        "3-8362-2119-5",
        "3 8362 2119 5",
        "01234567890ab",
        "foo",
        "",
    ],
});

test({
    validator: "isISBN",
    valid: [
        "340101319X",
        "9784873113685",
    ],
    invalid: [
        "3423214121",
        "9783836221190",
    ],
});

test({
    validator: "isISBN",
    args: ["foo"],
    invalid: [
        "340101319X",
        "9784873113685",
    ],
});
