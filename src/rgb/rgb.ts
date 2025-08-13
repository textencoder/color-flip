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
