import hslToRgb from "./hsl.js";
import {test,expect,describe} from "vitest"

describe("hslToRgb", () => {
    test("converts 0, 0.00, 50.20", () => {
        expect(hslToRgb(0, 0.00, 50.20)).toStrictEqual({r: 128, g: 128, b: 128})
    });
    test("converts 0, 0.00, 39.60", () => {
        expect(hslToRgb(0, 0.00, 39.60)).toStrictEqual({r: 101, g: 101, b: 101})
    });
    test("converts 0, 0.00, 31.40", () => {
        expect(hslToRgb(0, 0.00, 31.40)).toStrictEqual({r: 80, g: 80, b: 80})
    });
    test("converts 0, 0.00, 20.80", () => {
        expect(hslToRgb(0, 0.00, 20.80)).toStrictEqual({r: 53, g: 53, b: 53})
    });
    test("converts 56, 100.00, 76.70", () => {
        expect(hslToRgb(56, 100.00, 76.70)).toStrictEqual({r: 255, g: 248, b: 136})
    });
    test("converts 26, 71.20, 53.70", () => {
        expect(hslToRgb(26, 71.20, 53.70)).toStrictEqual({r: 221, g: 126, b: 53})
    });
    test("converts 74, 64.30, 59.40", () => {
        expect(hslToRgb(74, 64.30, 59.40)).toStrictEqual({r: 186, g: 218, b: 85})
    });
    test("converts 99, 30.80, 74.50", () => {
        expect(hslToRgb(99, 30.80, 74.50)).toStrictEqual({r: 184, g: 210, b: 170})
    });
})