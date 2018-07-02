import Matrix from 'core/objects/Matrix';

interface Options {
  colors: number[];
  vertices: number[];
}

class RenderObject {
  public anchor: number[];
  public rotation: number;
  public scale: number[];
  public velocity: number[];

  public colors: number[];
  public vertices: number[];

  constructor(options: Options) {
    this.colors = options.colors
    this.vertices = options.vertices

    this.anchor = [0, 0];
    this.rotation = 0;
    this.scale = [1, 1];
    this.velocity = [0, 0];
  }

  // transformMatrix() {
  //   const translationMatrix = Matrix.fromTranslation.apply(null, this.velocity);
  //   const rotationMatrix = Matrix.fromRotation.apply(null, this.rotation);

  //   return translationMatrix.multiply(rotationMatrix)
  // }
}

export default RenderObject;
