import RenderObject from 'core/objects/RenderObject';
import Scene from 'core/objects/Scene';

class Renderer {
  gl: WebGL2RenderingContext; // @TODO: make private

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;

    if (!gl) {
      throw new Error('WebGL is not supported.');
    }

    this.gl = gl;
  }


  render(scene: Scene) {

    console.log('scene', scene);

  }
}

export default Renderer;
