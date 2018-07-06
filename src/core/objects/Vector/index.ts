class Vector {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.y = y;
    this.x = x;
  }

  toArray() {
    return [this.x, this.y];
  }

  length() {
    const x = Math.pow(this.x, 2);
    const y = Math.pow(this.y, 2);

    return Math.sqrt(x + y);
  }
}

export default Vector
