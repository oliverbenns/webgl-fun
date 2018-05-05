import color from 'lib/color';

const red = [...color.hexToShaderRgb('ff0b00'), 1];
const blue = [...color.hexToShaderRgb('00c4ff'), 1];

const colors = [
  ...red,
  ...blue,
  ...red,
];

export default new Float32Array(colors);
