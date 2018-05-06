type Channel = number
type Hex = string
type Rgb = Channel[]

const hexToRgb = (hex: Hex): Rgb => {
  const num = parseInt(hex, 16);
  const r = num >> 16;
  const g = (num >> 8) & 255;
  const b = num & 255;

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
