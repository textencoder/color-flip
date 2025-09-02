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

The `flip` object provides utility methods for converting between **RGB**, **HSL**, and **HEX** color formats.

### **RGB**
#### `flip.rgb.toHsl(r, g, b)`
Converts an RGB color to HSL.

**Parameters:**
- `r` *(number)*: Red value (0–255)
- `g` *(number)*: Green value (0–255)
- `b` *(number)*: Blue value (0–255)

**Returns:**
- `{ h, s, l }` *(object)*:  
  - `h` *(number)*: Hue (0–360)  
  - `s` *(number)*: Saturation (0–100)  
  - `l` *(number)*: Lightness (0–100)

---

#### `flip.rgb.toHex(r, g, b)`
Converts an RGB color to HEX.

**Parameters:**
- `r` *(number)*: Red value (0–255)
- `g` *(number)*: Green value (0–255)
- `b` *(number)*: Blue value (0–255)

**Returns:**
- `string`: HEX color code (e.g., `#ffffff`)

---

### **HSL**
#### `flip.hsl.toRgb(h, s, l)`
Converts an HSL color to RGB.

**Parameters:**
- `h` *(number)*: Hue (0–360)
- `s` *(number)*: Saturation (0–100)
- `l` *(number)*: Lightness (0–100)

**Returns:**
- `{ r, g, b }` *(object)*:  
  - `r` *(number)*: Red value (0–255)  
  - `g` *(number)*: Green value (0–255)  
  - `b` *(number)*: Blue value (0–255)

---

#### `flip.hsl.toHex(h, s, l)`
Converts an HSL color to HEX.

**Parameters:**
- `h` *(number)*: Hue (0–360)
- `s` *(number)*: Saturation (0–100)
- `l` *(number)*: Lightness (0–100)

**Returns:**
- `string`: HEX color code (e.g., `#ffffff`)

---

### **HEX**
#### `flip.hex.toRgb(hex)`
Converts a HEX color code to RGB.

**Parameters:**
- `hex` *(string)*: HEX color code (e.g., `#ffffff`)

**Returns:**
- `{ r, g, b }` *(object)*:  
  - `r` *(number)*: Red value (0–255)  
  - `g` *(number)*: Green value (0–255)  
  - `b` *(number)*: Blue value (0–255)

---

#### `flip.hex.toHsl(hex)`
Converts a HEX color code to HSL.

**Parameters:**
- `hex` *(string)*: HEX color code (e.g., `#ffffff`)

**Returns:**
- `{ h, s, l }` *(object)*:  
  - `h` *(number)*: Hue (0–360)  
  - `s` *(number)*: Saturation (0–100)  
  - `l` *(number)*: Lightness (0–100)
