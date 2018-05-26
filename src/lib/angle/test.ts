import angle from '.';

const angles = [
  { degrees: 45, radians: Math.PI / 4 },
  { degrees: 180, radians: Math.PI },
  { degrees: -90, radians: -(Math.PI / 2) },
  { degrees: 0, radians: 0 },
]

describe('angle', () => {
  describe('degreesToRadians', () => {
    angles.forEach(a => {
      it(`converts ${a.degrees}°`, () => {
        const result = angle.degreesToRadians(a.degrees);

        expect(result).toEqual(a.radians);
      })
    })
  })
});
