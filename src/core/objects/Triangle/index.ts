interface Options {
  colors: number[];
  vertices: number[];
}

class Triangle {
  anchor: Vector;
  colors: number[];
  vertices: number[];

  constructor(options: Options) {
    this.colors = options.colors;
    this.vertices = options.vertices;
  }
}

export default Triangle;
