import Geometry from 'core/objects/Geometry';
import Matrix from 'core/objects/Matrix';
import Vector from 'core/objects/Vector';

export interface EntityOptions {
  colors: number[];
  vertices: Vector[];
}

class Entity {
  public anchor: Vector;
  public rotation: number;
  public scale: Vector;
  public velocity: Vector;
  public geometry: Geometry;
  public position: Vector

  constructor(options: EntityOptions) {
    this.geometry = new Geometry(options.vertices, options.colors)

    this.anchor = new Vector();
    this.rotation = 0;
    this.scale = new Vector(1, 1);
    this.velocity = new Vector();
    this.position = new Vector();
  }

  preUpdate(deltaTime: number) {
    this.position.x += this.velocity.x * deltaTime
    this.position.y += this.velocity.y * deltaTime
  }

  update(deltaTime: number) {
    // noop
  }

  postUpdate() {
    // create the transform matrix
    // Maybe this isn't even done here but instead in the renderer?
  }

  // transformMatrix() {
  //   const translationMatrix = Matrix.fromTranslation.apply(null, this.velocity);
  //   const rotationMatrix = Matrix.fromRotation.apply(null, this.rotation);

  //   return translationMatrix.multiply(rotationMatrix)
  // }
}

export default Entity;
