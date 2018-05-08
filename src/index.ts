import Renderer from 'renderer';
import vertexShaderSource from 'shaders/vertex.vert'
import fragmentShaderSource from 'shaders/fragment.frag'
import createShader from 'create-shader';
import createProgram from 'create-program';
import initBuffer from 'init-buffer';
import vertices from 'data/vertices';
import colors from 'data/colors';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const { gl } = renderer;

var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
var program = createProgram(gl, vertexShader, fragmentShader);

var positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
var colorAttributeLocation = gl.getAttribLocation(program, 'a_color');
var translationLocation = gl.getUniformLocation(program, 'u_translation');

console.log('positionAttributeLocation', positionAttributeLocation);
console.log('colorAttributeLocation', colorAttributeLocation);
console.log('translationLocation', translationLocation);

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// ==========
// POSITIONS
//

initBuffer(gl, vertices);

gl.enableVertexAttribArray(positionAttributeLocation);

var size = 2;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // don't normalize the data
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

// ==========
// COLORS
//

initBuffer(gl, colors);

gl.enableVertexAttribArray(colorAttributeLocation);

var _size = 4;          // 4 components per iteration
var _type = gl.UNSIGNED_BYTE;   // the data is 32bit floats
var _normalize = true; // don't normalize the data
var _stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var _offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(colorAttributeLocation, _size, _type, _normalize, _stride, _offset)

// Tell WebGL that our clip space maps to the size of the canvas
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Clear the canvas
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// Tell it to use our program (pair of shaders)
gl.useProgram(program);

// ==========
// TRANSLATION
//

gl.uniform2f(translationLocation, -1.0, 1.0);

// gl.uniform2f(translationLocation, 0.4, 0.4);
// gl.uniform4f(modifierLocation, 5.0, 5.0, 5.0, 5.0);
// const foo = gl.getUniform(program, modifierLocation)
// console.log('foo', foo);

// Bind the attribute/buffer set we want.
gl.bindVertexArray(vao);

var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 6;
gl.drawArrays(primitiveType, offset, count);
