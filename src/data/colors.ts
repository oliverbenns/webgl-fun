import color from 'core/lib/color';

const red = color.hexToRgb('#ff0b00');
const blue = color.hexToRgb('#00c4ff');

const green = color.hexToRgb('#01cd74');
const yellow = color.hexToRgb('#fff200');

// Give the colors an alpha channel.
[red, blue, green, yellow].forEach(c => c.push(255));

const colors = [
  ...red,
  ...blue,
  ...red,
  ...green,
  ...yellow,
  ...green,
];

export default new Uint8Array(colors);
