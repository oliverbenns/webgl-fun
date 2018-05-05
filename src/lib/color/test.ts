import color from '.';

// https://openglcolor.mpeters.me/
// https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
const colors = [
  {
    name: 'Maastricht Blue', hex: '011627',
    rgb: [1, 22, 39], shader: [0.0, 0.09, 0.15],
  },
  {
    name: 'Baby Powder', hex: 'FDFFFC',
    rgb: [253, 255, 252], shader: [0.99, 1.0, 0.99],
  },
  {
    name: 'Maximum Blue Green', hex: '2EC4B6',
    rgb: [46, 196, 182], shader: [0.18, 0.77, 0.71],
  },
  {
    name: 'Rose Madder', hex: 'E71D36',
    rgb: [231, 29, 54], shader: [0.91, 0.11, 0.21],
  },
  {
    name: 'Bright Yellow (Crayola)', hex: 'FF9F1C',
    rgb: [255, 159, 28], shader: [1.0, 0.62, 0.11],
  },
]

describe('color', () => {
  describe('hexToRgb', () => {
    colors.forEach(c => {
      it(c.name, () => {
        const result = color.hexToRgb(c.hex);

        expect(result).toEqual(c.rgb);
      })
    })
  });

  describe('hexToShaderRgb', () => {
    colors.forEach(c => {
      it(c.name, () => {
        const result = color.hexToShaderRgb(c.hex);

        expect(result).toEqual(c.shader);
      })
    })
  });
});
