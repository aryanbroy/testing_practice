import capitalize from "./capital";
import reverseString from "./reverseString";    
import { add, sub, divide, multiply } from "./calculator";
import cipher from "./cesarCipher";
import analyzeArr from "./analyzeArray";

test("capitalize the first letter", () => {
    expect(capitalize("aryan")).toMatch("Aryan");
})

test("reverse a string", () => {
    expect(reverseString("abcd")).toMatch("dcba")
})

test("calculator", (() => {
        expect(add(1,2)).toBe(3);
    },
    () => {
        expect(sub(1,2)).toBe(-1);
    },
    () => {
        expect(divide(4,2)).toBe(2);
    },
    () => {
        expect(multiply(3,2)).toBe(6);
    }
))

test("Caesar Cipher", () => {
    expect(cipher("attack at dawn", 19)).toMatch("tmmtvd tm wtpg");
})

test("Analyze Array", () => {
    expect(analyzeArr([1, 8, 3, 4, 2, 6]).average).toBe(4);
},
    () => {
        expect(analyzeArr([1, 8, 3, 4, 2, 6]).min).toBe(1);
    },
    () => {
        expect(analyzeArr([1, 8, 3, 4, 2, 6]).max).toBe(8);
    },
    () => {
        expect(analyzeArr([1, 8, 3, 4, 2, 6]).length).toBe(6)
    }

)

