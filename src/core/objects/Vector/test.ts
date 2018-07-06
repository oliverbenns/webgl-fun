import { IDENTITY_MATRIX } from 'core/constants';
import Vector from '.';

const data = {
  x: 2,
  y: 3,
  length: 3.605551275463989,
}

describe('Vector', () => {
  describe('constructor', () => {
    it('constructs correctly', () => {
      const a = new Vector(data.x, data.y)

      expect(a.x).toEqual(data.x)
      expect(a.y).toEqual(data.y)
    })

    it('constructs without data', () => {
      const a = new Vector()

      expect(a.x).toEqual(0)
      expect(a.y).toEqual(0)
    })
  });

  describe('length', () => {
    it('returns correct length', () => {
      const a = new Vector(data.x, data.y)

      expect(a.length()).toEqual(data.length)
    })
  });
});
