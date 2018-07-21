import Color from 'core/objects/Color';
import Vector from 'core/objects/Vector';

// @NOTE: This is not the most performant way of doing Geometry.
// A better way would be to use a typed buffer array.

class Geometry {
  colors: Color[];
  vertices: Vector[];

  constructor(vertices: Vector[] = [], colors: Color[] = []) {
    this.colors = colors;
    this.vertices = vertices;
  }

}

export default Geometry;
