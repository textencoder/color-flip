export default function hslToRgb(
  hue: number,
  saturation: number,
  lightness: number,
) {
  if (hue < 0 || hue > 360) {
    throw new Error('Invalid hue: value must be between 0 and 360');
  } else if (saturation < 0 || saturation > 100) {
    throw new Error('Invalid saturation: value must be between 0 and 100');
  } else if (lightness < 0 || lightness > 100) {
    throw new Error('Invalid lightness: value must be between 0 and 100');
  }
  const hsl: number[] = [hue, saturation, lightness];
  const normalizedValues: number[] = hsl.map((value, index) => {
    if (index === 0) {
      return value;
    } else {
      return value / 100;
    }
  });
  //brightest & darkest values
  let q: number, p: number;
  let hueValue = normalizedValues[0];
  const saturationValue = normalizedValues[1];
  const lightnessValue = normalizedValues[2];

  if (hueValue === undefined) {
    throw new Error('Error normalizing hue value');
  } else if (saturationValue === undefined) {
    throw new Error('Error normalizing saturation value');
  } else if (lightnessValue === undefined) {
    throw new Error('Error normalizing lightness value');
  }

  //return early if saturation equals zero - this means the color is gray
  if (saturationValue === 0) {
    let grayscaleArr = [];
    for (let i = 0; i < 3; i++) {
      grayscaleArr.push(Math.round(lightnessValue * 255));
    }
    return { r: grayscaleArr[0], g: grayscaleArr[1], b: grayscaleArr[2] };
  }
  //compute intermediate values
  if (lightnessValue < 0.5) {
    q = lightnessValue * (1 + saturationValue);
  } else {
    q = lightnessValue + saturationValue - lightnessValue * saturationValue;
  }
  p = 2 * lightnessValue - q;
  //convert hue into 0-1 range
  hueValue /= 360;
  //temp r,g,b values
  let redValue = hueValue + 1 / 3;
  let greenValue = hueValue;
  let blueValue = hueValue - 1 / 3;
  //temp value array
  const tempValues: number[] = [redValue, greenValue, blueValue];
  //map array to check for value greater than one or less than zero
  const wrapAround = tempValues.map((value) => {
    if (value < 0) {
      return value + 1;
    } else if (value > 1) {
      return value - 1;
    } else {
      return value;
    }
  });
  //console.log("q: ", q)
  //console.log("p: ", p)
  //console.log("wrapAround values: ", wrapAround)
  const interpolation = wrapAround.map((hueOffset) => {
    if (hueOffset < 1 / 6) {
      return p + (q - p) * 6 * hueOffset;
    } else if (hueOffset < 1 / 2) {
      return q;
    } else if (hueOffset < 2 / 3) {
      return p + (q - p) * (4 - 6 * hueOffset);
    } else {
      return p;
    }
  });
  //console.log(interpolation)
  const rgbValues = interpolation.map((value) => {
    return Math.round(value * 255);
  });
  return { r: rgbValues[0], g: rgbValues[1], b: rgbValues[2] };
}
