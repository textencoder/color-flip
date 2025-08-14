import { rgbToHex, rgbToHsl } from './rgb.js';
import { test, expect, describe } from 'vitest';

describe('rgbToHex', () => {
  test('converts 255, 92, 0', () => {
    expect(rgbToHex(255, 92, 0)).toStrictEqual('#ff5c00');
  });
  test('converts 26, 28, 30', () => {
    expect(rgbToHex(26, 28, 30)).toStrictEqual('#1a1c1e');
  });
  test('converts 43, 53, 63', () => {
    expect(rgbToHex(43, 53, 63)).toStrictEqual('#2b353f');
  });
  test('converts 147, 161, 176', () => {
    expect(rgbToHex(147, 161, 176)).toStrictEqual('#93a1b0');
  });
});

describe('rgbToHsl', () => {
  test('converts 128, 128, 128', () => {
    expect(rgbToHsl(128, 128, 128)).toStrictEqual({ h: 0, s: 0, l: 50 });
  });
  test('converts 99, 99, 99', () => {
    expect(rgbToHsl(99, 99, 99)).toStrictEqual({ h: 0, s: 0, l: 39 });
  });
  test('converts 79, 79, 79', () => {
    expect(rgbToHsl(79, 79, 79)).toStrictEqual({ h: 0, s: 0, l: 31 });
  });
  test('converts 51, 51, 51', () => {
    expect(rgbToHsl(51, 51, 51)).toStrictEqual({ h: 0, s: 0, l: 20 });
  });
  test('converts 255, 247, 133', () => {
    expect(rgbToHsl(255, 247, 133)).toStrictEqual({ h: 56, s: 100, l: 76 });
  });
  test('converts 220, 124, 50', () => {
    expect(rgbToHsl(220, 124, 50)).toStrictEqual({ h: 26, s: 71, l: 53 });
  });
  test('converts 186, 217, 84', () => {
    expect(rgbToHsl(186, 217, 84)).toStrictEqual({ h: 74, s: 64, l: 59 });
  });
  test('converts 183, 209, 169', () => {
    expect(rgbToHsl(183, 209, 169)).toStrictEqual({ h: 99, s: 30, l: 74 });
  });
});
