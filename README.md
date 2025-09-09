# color-flip

`color-flip` is a lightweight and dependency-free library for converting between HEX, HSL, and RGB formats.

<p align="center">
  <!-- <a href="https://github.com/textencoder/color-flip/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/textencoder/color-flip/ci.yml" alt="Github Actions">
  </a> -->
  <a href="https://www.npmjs.com/package/color-flip">
    <img src="https://img.shields.io/npm/v/color-flip" alt="Version">
  </a>
  <a href="https://npm-stat.com/charts.html?package=color-flip">
    <img src="https://img.shields.io/npm/dm/color-flip" alt="Download">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/color-flip" alt="MIT License">
  </a>
</p>

## Install

```bash
npm install color-flip
```

## Usage

```js
import { flip } from 'color-flip';

// Convert RGB values to HSL
flip.rgb.toHsl(179, 34, 85);
// { h: 339, s: 68, l: 42 }

// Convert hex code to RGB
flip.hex.toRgb('#6FA3B7');
// { r: 111, g: 163, b: 183 }

// Convert HSL values to hex code
flip.hsl.toHex(86, 54, 92);
// #ecf6e0
```

## API

The `flip` object provides utility methods for converting between **RGB**, **HSL**, and **HEX** color formats.

### **RGB**

#### `flip.rgb.toHsl(r, g, b)`

Converts an RGB color to HSL.

**Parameters:**

- `r` _(number)_: Red value (0–255)
- `g` _(number)_: Green value (0–255)
- `b` _(number)_: Blue value (0–255)

**Returns:**

- `{ h, s, l }` _(object)_:
  - `h` _(number)_: Hue (0–360)
  - `s` _(number)_: Saturation (0–100)
  - `l` _(number)_: Lightness (0–100)

---

#### `flip.rgb.toHex(r, g, b)`

Converts an RGB color to HEX.

**Parameters:**

- `r` _(number)_: Red value (0–255)
- `g` _(number)_: Green value (0–255)
- `b` _(number)_: Blue value (0–255)

**Returns:**

- `string`: HEX color code (e.g., `#ffffff`)

---

### **HSL**

#### `flip.hsl.toRgb(h, s, l)`

Converts an HSL color to RGB.

**Parameters:**

- `h` _(number)_: Hue (0–360)
- `s` _(number)_: Saturation (0–100)
- `l` _(number)_: Lightness (0–100)

**Returns:**

- `{ r, g, b }` _(object)_:
  - `r` _(number)_: Red value (0–255)
  - `g` _(number)_: Green value (0–255)
  - `b` _(number)_: Blue value (0–255)

---

#### `flip.hsl.toHex(h, s, l)`

Converts an HSL color to HEX.

**Parameters:**

- `h` _(number)_: Hue (0–360)
- `s` _(number)_: Saturation (0–100)
- `l` _(number)_: Lightness (0–100)

**Returns:**

- `string`: HEX color code (e.g., `#ffffff`)

---

### **HEX**

#### `flip.hex.toRgb(hex)`

Converts a HEX color code to RGB.

**Parameters:**

- `hex` _(string)_: HEX color code (e.g., `#ffffff`)

**Returns:**

- `{ r, g, b }` _(object)_:
  - `r` _(number)_: Red value (0–255)
  - `g` _(number)_: Green value (0–255)
  - `b` _(number)_: Blue value (0–255)

---

#### `flip.hex.toHsl(hex)`

Converts a HEX color code to HSL.

**Parameters:**

- `hex` _(string)_: HEX color code (e.g., `#ffffff`)

**Returns:**

- `{ h, s, l }` _(object)_:
  - `h` _(number)_: Hue (0–360)
  - `s` _(number)_: Saturation (0–100)
  - `l` _(number)_: Lightness (0–100)

## License

MIT © [textencoder](https://github.com/textencoder)
