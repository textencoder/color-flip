export default function hexToRgb(hexCode: string) {
  if (typeof hexCode !== 'string' || !/^#[0-9A-Fa-f]{6}$/.test(hexCode)) {
    throw new Error('Invalid hex color code');
  }
  const red = hexCode.substring(1, 3);
  const green = hexCode.substring(3, 5);
  const blue = hexCode.substring(5, 7);
  return {
    r: parseInt(red, 16),
    g: parseInt(green, 16),
    b: parseInt(blue, 16),
  };
}
