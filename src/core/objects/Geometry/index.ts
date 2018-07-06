// @NOTE: This is not the most performant way of doing Geometry.
// A better way would be to use a typed buffer array.

class Geometry {
  colors: Vector[];
  vertices: Vector[];

  constructor(vertices: Vector[] = [], colors: Vector[] = []) {
    this.colors = colors;
    this.vertices = vertices;
  }


}

export default Geometry;
