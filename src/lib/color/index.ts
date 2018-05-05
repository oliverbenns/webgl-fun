type Channel = number
type Hex = string
type Rgb = Channel[]

const hexToRgb = (hex: Hex): Rgb => {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
};

const hexToShaderRgb = (hex: Hex): Rgb => {
  const rbg = hexToRgb(hex);

  return rbg.map(v => {
    const value = (v / 255);

    return Number(value.toFixed(2));
  });
};

export default {
  hexToRgb,
  hexToShaderRgb,
};
