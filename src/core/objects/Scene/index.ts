import RenderObject from 'core/objects/RenderObject';
import Vector from 'core/objects/Vector';

// @TODO: Use generic type here.
const flatten = (a: any[], b: any) => a.concat(b)

class Scene {
  public renderObjects: RenderObject[]

  constructor() {
    this.renderObjects = []
  }

  add(renderObject: RenderObject) {
    this.renderObjects.push(renderObject);
  }

  // @NOTE: This is not currently rendering. Just a quick grab method
  render() {
    const colors = this.renderObjects[0].geometry.colors.concat(this.renderObjects[1].geometry.colors);
    const vertices = this.renderObjects[0].geometry.vertices.concat(this.renderObjects[1].geometry.vertices)

    const colorData = colors.reduce(flatten, [])
    const vertexData = vertices.map((v: Vector) => v.toArray()).reduce(flatten, [])

    return {
      colors: new Uint8Array(colorData),
      vertices: new Float32Array(vertexData),
    };
  }
}

export default Scene;
