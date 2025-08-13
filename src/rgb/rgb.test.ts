import rgbToHex from './rgb.js';
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
