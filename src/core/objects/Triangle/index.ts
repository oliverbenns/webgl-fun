interface Options {
  colors: number[];
  velocity?: number[];
  vertices: number[];
}

class Triangle {
  anchor: Vector;
  colors: number[];
  velocity: number[];
  vertices: number[];

  constructor(options: Options) {
    this.colors = options.colors;
    this.vertices = options.vertices;

    if (options.vertices && options.vertices.length > 1) {
      this.velocity = options.vertices.slice(0, 2)
    } else {
      this.velocity = [0, 0]
    }
  }
}

export default Triangle;
