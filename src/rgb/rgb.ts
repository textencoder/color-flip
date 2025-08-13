export default function rgbToHex(r: number, g: number, b: number) {
  const rgbValues: number[] = [r, g, b];
  return `#${rgbValues
    .map((value) => {
      if (value.toString(16).length === 1) {
        return value.toString(16).padStart(2, '0');
      } else {
        return value.toString(16);
      }
    })
    .join('')}`;
}

function rgbToHsl(r: number, g: number, b: number) {
  if (r < 0 || r > 255) {
    throw new Error('Invalid red value: value must be between 0 and 255');
  } else if (g < 0 || g > 255) {
    throw new Error('Invalid green value: value must be between 0 and 255');
  } else if (b < 0 || b > 255) {
    throw new Error('Invalid blue value: value must be between 0 and 255');
  }

  const rgbValues: number[] = [r, g, b];

  const normalizedValues = rgbValues.map((value) => {
    return value / 255;
  });

  //console.log(color)
  const maxValue = Math.max(...normalizedValues);
  const minValue = Math.min(...normalizedValues);
  const delta = maxValue - minValue;
  //console.log("delta: ", delta)
  let lightnessValue = (maxValue + minValue) / 2;
  let saturationValue;
  if (delta === 0) {
    saturationValue = 0;
  } else if (lightnessValue < 0.5) {
    saturationValue = delta / (maxValue + minValue);
  } else {
    saturationValue = delta / (2 - maxValue - minValue);
  }
  //console.log(lightnessValue, saturationValue)
  const maxColor = normalizedValues.indexOf(maxValue);
  //console.log("max color: ", maxColor)
  let hueValue;
  if (delta === 0) {
    hueValue = 0;
  } else if (maxColor === 0) {
    hueValue = (normalizedValues[1] - normalizedValues[2]) / delta;
    if (normalizedValues[1] < normalizedValues[2]) {
      hueValue += 6;
    }
  } else if (maxColor === 1) {
    hueValue = (normalizedValues[2] - normalizedValues[0]) / delta + 2;
  } else {
    hueValue = (normalizedValues[0] - normalizedValues[1]) / delta + 4;
  }
  hueValue *= 60;
  saturationValue *= 100;
  lightnessValue *= 100;
  if (hueValue < 0) {
    hueValue += 360;
  }

  hueValue = Math.round(hueValue);

  saturationValue = Math.round(saturationValue * 10) / 10;
  if (saturationValue.toString().includes('.')) {
    saturationValue += '0';
  }
  if (!saturationValue.toString().includes('.')) {
    saturationValue += '.00';
  }

  lightnessValue = Math.round(lightnessValue * 10) / 10;
  if (lightnessValue.toString().includes('.')) {
    lightnessValue += '0';
  }
  if (!lightnessValue.toString().includes('.')) {
    lightnessValue += '.00';
  }

  //console.log(`hsl(${hueValue}, ${saturationValue}, ${lightnessValue})`);
  return { h: hueValue, s: saturationValue, l: lightnessValue };
}

//module.exports = rgbToHsl;
