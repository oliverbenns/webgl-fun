import { IDENTITY_MATRIX } from 'core/constants';
import padLeft from 'core/lib/pad-left';

class Matrix {
  elements: number[];

  constructor(elements?: number[]) {

    if (!elements) {
      this.elements = IDENTITY_MATRIX;
    } else if (elements.length !== 9) {
      console.error('Invalid matrix elements supplied');
      this.elements = IDENTITY_MATRIX;
    } else {
      this.elements = elements;
    }
  }

  multiply(matrix: Matrix) {
    const elements = [
      // 0, 1, 2
      this.elements[0] * matrix.elements[0] + this.elements[1] * matrix.elements[3] + this.elements[2] * matrix.elements[6],
      this.elements[0] * matrix.elements[1] + this.elements[1] * matrix.elements[4] + this.elements[2] * matrix.elements[7],
      this.elements[0] * matrix.elements[2] + this.elements[1] * matrix.elements[5] + this.elements[2] * matrix.elements[8],

      // 3, 4, 5
      this.elements[3] * matrix.elements[0] + this.elements[4] * matrix.elements[3] + this.elements[5] * matrix.elements[6],
      this.elements[3] * matrix.elements[1] + this.elements[4] * matrix.elements[4] + this.elements[5] * matrix.elements[7],
      this.elements[3] * matrix.elements[2] + this.elements[4] * matrix.elements[5] + this.elements[5] * matrix.elements[8],

      // 6, 7, 8
      this.elements[6] * matrix.elements[0] + this.elements[7] * matrix.elements[3] + this.elements[8] * matrix.elements[6],
      this.elements[6] * matrix.elements[1] + this.elements[7] * matrix.elements[4] + this.elements[8] * matrix.elements[7],
      this.elements[6] * matrix.elements[2] + this.elements[7] * matrix.elements[5] + this.elements[8] * matrix.elements[8],
    ]


    return new Matrix(elements)
  }

  print() {
    const strings = this.elements.map(String);
    const maxLen = strings.reduce((max, str) => str.length > max ? str.length : max, 0);

    const out = strings.map((str, i) => {
      const eol = (i + 1) % 3 === 0;
      const postfix = eol ? '\n' : ' ';

      return padLeft(str, maxLen) + postfix;
    }).join('');

    console.info(out);
  }

  translate(x: number, y: number) {
    const matrix = Matrix.fromTranslation(x, y);
    return this.multiply(matrix);
  }

  scale(x: number, y: number) {
    const matrix = Matrix.fromScaling(x, y);
    return this.multiply(matrix);
  }

  rotate(angleInRadians: number) {
    const matrix = Matrix.fromRotation(angleInRadians);
    return this.multiply(matrix);
  }

  static fromTranslation(x: number, y: number) {
    return new Matrix([
      1, 0, 0,
      0, 1, 0,
      x, y, 1,
    ]);
  };

  static fromRotation(angleInRadians: number) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);

    return new Matrix([
      c,-s, 0,
      s, c, 0,
      0, 0, 1,
    ]);
  };

  static fromScaling(x: number, y: number) {
    return new Matrix([
      x, 0, 0,
      0, y, 0,
      0, 0, 1,
    ]);
  }
}


export default Matrix;


