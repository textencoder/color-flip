import { flip } from './utils.js';
import { test, expect, describe } from 'vitest';

describe('converts hex color code to equivalent rgb values', () => {
  test('converts #ff5c00', () => {
    expect(flip.hex.toRgb('#ff5c00')).toStrictEqual({ r: 255, g: 92, b: 0 });
  });

  test('converts #1a1c1e', () => {
    expect(flip.hex.toRgb('#1a1c1e')).toStrictEqual({ r: 26, g: 28, b: 30 });
  });

  test('converts #2b353f', () => {
    expect(flip.hex.toRgb('#2b353f')).toStrictEqual({ r: 43, g: 53, b: 63 });
  });

  test('converts #93a1b0', () => {
    expect(flip.hex.toRgb('#93a1b0')).toStrictEqual({ r: 147, g: 161, b: 176 });
  });
});

describe('converts hsl values to equivalent rgb values', () => {
  test('converts 0, 0, 50', () => {
    expect(flip.hsl.toRgb(0, 0, 50)).toStrictEqual({ r: 128, g: 128, b: 128 });
  });
  test('converts 0, 0, 39', () => {
    expect(flip.hsl.toRgb(0, 0, 39)).toStrictEqual({ r: 99, g: 99, b: 99 });
  });
  test('converts 0, 0, 31', () => {
    expect(flip.hsl.toRgb(0, 0, 31)).toStrictEqual({ r: 79, g: 79, b: 79 });
  });
  test('converts 0, 0, 20', () => {
    expect(flip.hsl.toRgb(0, 0, 20)).toStrictEqual({ r: 51, g: 51, b: 51 });
  });
  test('converts 56, 100, 76', () => {
    expect(flip.hsl.toRgb(56, 100, 76)).toStrictEqual({
      r: 255,
      g: 247,
      b: 133,
    });
  });
  test('converts 26, 71, 53', () => {
    expect(flip.hsl.toRgb(26, 71, 53)).toStrictEqual({ r: 220, g: 124, b: 50 });
  });
  test('converts 74, 64, 59', () => {
    expect(flip.hsl.toRgb(74, 64, 59)).toStrictEqual({ r: 186, g: 217, b: 84 });
  });
  test('converts 99, 30, 74', () => {
    expect(flip.hsl.toRgb(99, 30, 74)).toStrictEqual({
      r: 183,
      g: 209,
      b: 169,
    });
  });
});

describe('converts rgb values to equivalent hex color code', () => {
  test('converts 255, 92, 0', () => {
    expect(flip.rgb.toHex(255, 92, 0)).toStrictEqual('#ff5c00');
  });
  test('converts 26, 28, 30', () => {
    expect(flip.rgb.toHex(26, 28, 30)).toStrictEqual('#1a1c1e');
  });
  test('converts 43, 53, 63', () => {
    expect(flip.rgb.toHex(43, 53, 63)).toStrictEqual('#2b353f');
  });
  test('converts 147, 161, 176', () => {
    expect(flip.rgb.toHex(147, 161, 176)).toStrictEqual('#93a1b0');
  });
});

describe('converts rgb values to equivalent hsl values', () => {
  test('converts 128, 128, 128', () => {
    expect(flip.rgb.toHsl(128, 128, 128)).toStrictEqual({ h: 0, s: 0, l: 50 });
  });
  test('converts 99, 99, 99', () => {
    expect(flip.rgb.toHsl(99, 99, 99)).toStrictEqual({ h: 0, s: 0, l: 39 });
  });
  test('converts 79, 79, 79', () => {
    expect(flip.rgb.toHsl(79, 79, 79)).toStrictEqual({ h: 0, s: 0, l: 31 });
  });
  test('converts 51, 51, 51', () => {
    expect(flip.rgb.toHsl(51, 51, 51)).toStrictEqual({ h: 0, s: 0, l: 20 });
  });
  test('converts 255, 247, 133', () => {
    expect(flip.rgb.toHsl(255, 247, 133)).toStrictEqual({
      h: 56,
      s: 100,
      l: 76,
    });
  });
  test('converts 220, 124, 50', () => {
    expect(flip.rgb.toHsl(220, 124, 50)).toStrictEqual({ h: 26, s: 71, l: 53 });
  });
  test('converts 186, 217, 84', () => {
    expect(flip.rgb.toHsl(186, 217, 84)).toStrictEqual({ h: 74, s: 64, l: 59 });
  });
  test('converts 183, 209, 169', () => {
    expect(flip.rgb.toHsl(183, 209, 169)).toStrictEqual({
      h: 99,
      s: 30,
      l: 74,
    });
  });
});
