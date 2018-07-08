import Geometry from 'core/objects/Geometry';
import Matrix from 'core/objects/Matrix';
import Vector from 'core/objects/Vector';

interface Options {
  colors: number[];
  vertices: Vector[];
}

class RenderObject {
  public anchor: Vector;
  public rotation: number;
  public scale: Vector;
  public velocity: Vector;
  public geometry: Geometry;

  constructor(options: Options) {
    // @TODO use instead of colors and vertices.
    this.geometry = new Geometry(options.vertices, options.colors)

    this.anchor = new Vector();
    this.rotation = 0;
    this.scale = new Vector(1, 1);
    this.velocity = new Vector();
  }

  // transformMatrix() {
  //   const translationMatrix = Matrix.fromTranslation.apply(null, this.velocity);
  //   const rotationMatrix = Matrix.fromRotation.apply(null, this.rotation);

  //   return translationMatrix.multiply(rotationMatrix)
  // }
}

export default RenderObject;
