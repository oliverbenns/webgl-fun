import Renderer from 'core/objects/Renderer';
import vertexShaderSource from 'shaders/vertex.vert';
import fragmentShaderSource from 'shaders/fragment.frag';
import shader from 'core/lib/shader';
import program from 'core/lib/program';
import initBuffer from 'init-buffer';
import angle from 'core/lib/angle';
import Matrix from 'core/objects/Matrix';
import scene from 'scene';
console.log('scene', scene);

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const { gl } = renderer;

var vertexShader = shader.create(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = shader.create(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
var prog = program.create(gl, vertexShader, fragmentShader);

const attributes = {
  position: gl.getAttribLocation(prog, 'a_position'),
  color: gl.getAttribLocation(prog, 'a_color'),
}

const uniforms = {
  transform: gl.getUniformLocation(prog, 'u_transform'),
  resolution: gl.getUniformLocation(prog, 'u_resolution'),
}

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

const data = scene.render();

// ==========
// POSITIONS
//
initBuffer(gl, data.vertices);

gl.enableVertexAttribArray(attributes.position);

var size = 2;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // don't normalize the data
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(attributes.position, size, type, normalize, stride, offset)

// ==========
// COLORS
//
initBuffer(gl, data.colors);

gl.enableVertexAttribArray(attributes.color);

var _size = 4;          // 4 components per iteration
var _type = gl.UNSIGNED_BYTE;   // the data is 32bit floats
var _normalize = true; // don't normalize the data
var _stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var _offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(attributes.color, _size, _type, _normalize, _stride, _offset)

// Tell WebGL that our clip space maps to the size of the canvas
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Tell it to use our prog (pair of shaders)
gl.useProgram(prog);

// ========
// RESOLUTION
//
gl.uniform2f(uniforms.resolution, gl.canvas.width, gl.canvas.height);

// ========
// TRANSFORM
//

// Compute the matrices
const ang = angle.degreesToRadians(20);
const rotationMatrix = Matrix.fromRotation(ang);
const translationMatrix = Matrix.fromTranslation(300, 100);
// const scalingMatrix = Matrix.fromScaling(1, 1)

rotationMatrix.print()
translationMatrix.print()

const matrix = translationMatrix.multiply(rotationMatrix);
matrix.print()

const identity = new Matrix()

gl.uniformMatrix3fv(uniforms.transform, false, identity.elements);


// Clear the canvas
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// Bind the attribute/buffer set we want.
gl.bindVertexArray(vao);

var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 6;
gl.drawArrays(primitiveType, offset, count);
