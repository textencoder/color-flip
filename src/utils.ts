import hexToRgb from './hex/hex.js';
import hslToRgb from './hsl/hsl.js';
import { rgbToHex, rgbToHsl } from './rgb/rgb.js';

export const flip = {
  hex: {
    toHsl: (hex: string) => {
      const rgbValues = hexToRgb(hex);
      return rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
    },
    toRgb: (hex: string) => {
      return hexToRgb(hex);
    },
  },
  hsl: {
    toHex: (h: number, s: number, l: number) => {
      const rgbValues = hslToRgb(h, s, l);
      return rgbToHex(rgbValues.r!, rgbValues.g!, rgbValues.b!);
    },
    toRgb: (h: number, s: number, l: number) => {
      return hslToRgb(h, s, l);
    },
  },
  rgb: {
    toHex: (r: number, g: number, b: number) => {
      return rgbToHex(r, g, b);
    },
    toHsl: (r: number, g: number, b: number) => {
      return rgbToHsl(r, g, b);
    },
  },
};
