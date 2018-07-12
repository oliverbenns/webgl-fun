import Entity from 'core/objects/Entity';
import Vector from 'core/objects/Vector';
import Scene from 'core/objects/Scene';

// @TODO: Use generic type here.
const flatten = (a: any[], b: any) => a.concat(b)

class Renderer {
  gl: WebGL2RenderingContext; // @TODO: make private

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;

    if (!gl) {
      throw new Error('WebGL is not supported.');
    }

    this.gl = gl;
  }

  initScene(scene: Scene) {
    const colors = scene.entities
      .map(e => e.geometry.colors) // @TODO: use pick fn
      .reduce(flatten, [])
      .reduce(flatten, []) // @TODO flatten deep?

    const vertices = scene.entities
      .map(e => e.geometry.vertices) // @TODO: use pick fn
      .reduce(flatten, [])
      .map(v => v.toArray())
      .reduce(flatten, [])

    return {
      colors: new Uint8Array(colors),
      vertices: new Float32Array(vertices),
    };

    // @TODO add directly to buffers here?
  }


  render(scene: Scene) {

    console.log('scene', scene);

  }
}

export default Renderer;
