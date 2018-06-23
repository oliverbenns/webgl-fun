import { IDENTITY_MATRIX } from 'core/constants';
import Matrix from '.';

const matrices = [
  [
    8, 7, 2,
    1, 4, 3,
    3, 2, 1,
  ],
  [
    5, 5, 4,
    8, 9, 0,
    9, 1, 3,
  ],
]

describe('Matrix', () => {
  describe('constructor', () => {
    it('constructs with elements', () => {
      const a = new Matrix(matrices[0])

      expect(a.elements).toEqual(matrices[0])
    })

    it('constructs identity matrix without elements', () => {
      const a = new Matrix()

      expect(a.elements).toEqual(IDENTITY_MATRIX)
    })

    it('constructs identity matrix with invalid elements', () => {
      const a = new Matrix([1, 2])

      expect(a.elements).toEqual(IDENTITY_MATRIX)
    })
  });

  describe('multiply', () => {
    it('multiplies', () => {
      const a = new Matrix(matrices[0])
      const b = new Matrix(matrices[1])
      const result = a.multiply(b)

      expect(result.elements).toEqual([
        114, 105, 38,
        64, 44, 13,
        40, 34, 15,
      ]);
    })
  });
});
