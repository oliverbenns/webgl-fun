import color from 'core/lib/color';

const red = color.hexToRgb('#ff0b00');
const blue = color.hexToRgb('#00c4ff');

const green = color.hexToRgb('#01cd74');
const yellow = color.hexToRgb('#fff200');

const data = [
  {
    colors: [
      ...red, 255,
      ...blue, 255,
      ...red, 255,
    ],
    vertices: [
      0, 0,
      100, 0,
      0, 100,
    ],
  },
  {
    colors: [
      ...green, 255,
      ...yellow, 255,
      ...green, 255,
    ],
    vertices: [
      0, 0,
      100, 0,
      100, 100,
    ],
  }
]

export default data;
