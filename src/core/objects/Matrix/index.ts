import { IDENTITY_MATRIX } from 'core/constants';

class Matrix {
  data: number[];

  constructor(data?: number[]) {

    if (!data) {
      this.data = IDENTITY_MATRIX;
    } else if (data.length !== 9) {
      console.error('Invalid matrix data supplied');
      this.data = IDENTITY_MATRIX;
    } else {
      this.data = data;
    }
  }

  public multiply(matrix: Matrix) {
    // const mappedIndexes = [0, 3, 6, 1, 4, 7, 2, 5, 8]


    // console.log('this.data', this.data);
    // console.log('matrix.data', matrix.data);
    // const data = mappedIndexes.map((index, loopIndex) => this.data[loopIndex] * matrix.data[index])

    const foo = this.data[0] * matrix.data[0]

    const data = [
      // 0, 1, 2
      this.data[0] * matrix.data[0] + this.data[1] * matrix.data[3] + this.data[2] * matrix.data[6],
      this.data[0] * matrix.data[1] + this.data[1] * matrix.data[4] + this.data[2] * matrix.data[7],
      this.data[0] * matrix.data[2] + this.data[1] * matrix.data[5] + this.data[2] * matrix.data[8],

      // 3, 4, 5
      this.data[3] * matrix.data[0] + this.data[4] * matrix.data[3] + this.data[5] * matrix.data[6],
      this.data[3] * matrix.data[1] + this.data[4] * matrix.data[4] + this.data[5] * matrix.data[7],
      this.data[3] * matrix.data[2] + this.data[4] * matrix.data[5] + this.data[5] * matrix.data[8],

      // 6, 7, 8
      this.data[6] * matrix.data[0] + this.data[7] * matrix.data[3] + this.data[8] * matrix.data[6],
      this.data[6] * matrix.data[1] + this.data[7] * matrix.data[4] + this.data[8] * matrix.data[7],
      this.data[6] * matrix.data[2] + this.data[7] * matrix.data[5] + this.data[8] * matrix.data[8],
    ]


    return new Matrix(data)
  }

  // public translate() {}
  // public rotate() {}
  // public scale() {}
}


export default Matrix;


