# color-flip

`color-flip` is a lightweight and dependency-free library for converting between HEX, HSL, and RGB formats.

## Install

```bash
npm install color-flip
```

## Usage

```js
import { flip } from "color-flip"

// Convert RGB values to HSL 
flip.rgb.toHsl(179, 34, 85)
// { h: 339, s: 68, l: 42 }

// Convert hex code to RGB
flip.hex.toRgb("#6FA3B7")
// { r: 111, g: 163, b: 183 }

// Convert HSL values to hex code
flip.hsl.toHex(86, 54, 92)
// #ecf6e0
```

## API
