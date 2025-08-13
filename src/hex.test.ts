import hexToRgb from "./hex.js"
import {test, expect, describe} from "vitest"

describe('hexToRgb', () => {
    test('converts #ff5c00', () => {
        expect(hexToRgb("#ff5c00")).toStrictEqual({r: 255, g: 92, b: 0})
    });

    test('converts #1a1c1e', () => {
        expect(hexToRgb("#1a1c1e")).toStrictEqual({r: 26, g: 28, b: 30})
    });

    test('converts #2b353f', () => {
        expect(hexToRgb("#2b353f")).toStrictEqual({r: 43, g: 53, b: 63})
    });

    test('converts #93a1b0', () => {
        expect(hexToRgb("#93a1b0")).toStrictEqual({r: 147, g: 161, b: 176})
    });
})