import RenderObject from 'core/objects/RenderObject';

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
    const colors = this.renderObjects[0].colors.concat(this.renderObjects[1].colors);
    const vertices = this.renderObjects[0].vertices.concat(this.renderObjects[1].vertices);

    return {
      colors: new Uint8Array(colors),
      vertices: new Float32Array(vertices),
    };
  }
}

export default Scene;
