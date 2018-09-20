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

  equals(a: Vector) {
    return this.x === a.x && this.y === a.y;
  }

  update(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

export default Vector
