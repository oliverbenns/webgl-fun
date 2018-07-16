import Entity from 'core/objects/Entity';
import Vector from 'core/objects/Vector';
import Scene from 'core/objects/Scene';
import Matrix from 'core/objects/Matrix';

// @TODO: Use generic type here.
const flatten = (a: any[], b: any) => a.concat(b)

class Renderer {
  gl: WebGL2RenderingContext; // @TODO: make private
  colorsBuffer: WebGLBuffer;
  verticesBuffer: WebGLBuffer;

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;

    if (!gl) {
      throw new Error('WebGL is not supported.');
    }

    this.gl = gl;
    this.colorsBuffer = gl.createBuffer();
    this.verticesBuffer = gl.createBuffer();
  }

  setVerticesAttributePointer(program: WebGLProgram) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.verticesBuffer);
    const positionAttribute = this.gl.getAttribLocation(program, 'a_position');
    this.gl.enableVertexAttribArray(positionAttribute);

    // @TODO: It seems if we normalise these values, the data
    // remains unchanged - why? Due to float?
    this.gl.vertexAttribPointer(positionAttribute, 2, this.gl.FLOAT, false, 0, 0);
  }

  setColorsAttributePointer(program: WebGLProgram) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorsBuffer);
    const colorAttribute = this.gl.getAttribLocation(program, 'a_color');

    this.gl.enableVertexAttribArray(colorAttribute);
    this.gl.vertexAttribPointer(colorAttribute, 4, this.gl.UNSIGNED_BYTE, true, 0, 0);
  }

  bufferColors(scene: Scene) {
    const colors = scene.entities
      .map(e => e.geometry.colors) // @TODO: use pick fn
      .reduce(flatten, [])
      .reduce(flatten, []); // @TODO flatten deep?

    const data = new Uint8Array(colors);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorsBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  bufferVertices(scene: Scene) {
    const vertices = scene.entities
      .map(e => e.geometry.vertices) // @TODO: use pick fn
      .reduce(flatten, [])
      .map(v => v.toArray())
      .reduce(flatten, []);

    const data = new Float32Array(vertices);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.verticesBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  render(scene: Scene, vao: WebGLVertexArrayObject, transformUniform: WebGLUniformLocation) {
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    // Bind the attribute/buffer set we want. - in setup?
    this.gl.bindVertexArray(vao);

    scene.entities.forEach((e, i) => {
      const { rotation, scale, position } = e

      // @TODO: Not sure if this should be in here or in the game code.
      const matrix = new Matrix()
        .scale(scale.x, scale.y)
        .rotate(rotation)
        .translate(position.x, position.y)

      this.gl.uniformMatrix3fv(transformUniform, false, matrix.elements);

      const primitiveType = this.gl.TRIANGLES;
      const offset = i * 3;
      const count = 3; // @TODO: entitiy vert length?
      this.gl.drawArrays(primitiveType, offset, count);

    })

    // const primitiveType = this.gl.TRIANGLES;
    // const offset = 0;
    // const count = 3;
    // this.gl.drawArrays(primitiveType, offset, count);

    // const _primitiveType = this.gl.TRIANGLES;
    // const _offset = 3;
    // const _count = 3;
    // this.gl.drawArrays(_primitiveType, _offset, _count);
  }
}

export default Renderer;
