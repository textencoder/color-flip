import hslToRgb from './hsl.js';
import { test, expect, describe } from 'vitest';

describe('hslToRgb', () => {
  test('converts 0, 0, 50', () => {
    expect(hslToRgb(0, 0, 50)).toStrictEqual({ r: 128, g: 128, b: 128 });
  });
  test('converts 0, 0, 39', () => {
    expect(hslToRgb(0, 0, 39)).toStrictEqual({ r: 99, g: 99, b: 99 });
  });
  test('converts 0, 0, 31', () => {
    expect(hslToRgb(0, 0, 31)).toStrictEqual({ r: 79, g: 79, b: 79 });
  });
  test('converts 0, 0, 20', () => {
    expect(hslToRgb(0, 0, 20)).toStrictEqual({ r: 51, g: 51, b: 51 });
  });
  test('converts 56, 100, 76', () => {
    expect(hslToRgb(56, 100, 76)).toStrictEqual({ r: 255, g: 247, b: 133 });
  });
  test('converts 26, 71, 53', () => {
    expect(hslToRgb(26, 71, 53)).toStrictEqual({ r: 220, g: 124, b: 50 });
  });
  test('converts 74, 64, 59', () => {
    expect(hslToRgb(74, 64, 59)).toStrictEqual({ r: 186, g: 217, b: 84 });
  });
  test('converts 99, 30, 74', () => {
    expect(hslToRgb(99, 30, 74)).toStrictEqual({ r: 183, g: 209, b: 169 });
  });
});
