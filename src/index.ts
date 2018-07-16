import Renderer from 'core/objects/Renderer';
import vertexShaderSource from 'shaders/vertex.vert';
import fragmentShaderSource from 'shaders/fragment.frag';
import shader from 'core/lib/shader';
import program from 'core/lib/program';
import angle from 'core/lib/angle';
import Matrix from 'core/objects/Matrix';
import scene from 'scene';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const { gl } = renderer;

var vertexShader = shader.create(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = shader.create(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
var prog = program.create(gl, vertexShader, fragmentShader);

const uniforms = {
  transform: gl.getUniformLocation(prog, 'u_transform'),
  resolution: gl.getUniformLocation(prog, 'u_resolution'),
}

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);

renderer.bufferVertices(scene);
renderer.bufferColors(scene);

renderer.setVerticesAttributePointer(prog);
renderer.setColorsAttributePointer(prog);

// Tell WebGL that our clip space maps to the size of the canvas
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Tell it to use our prog (pair of shaders)
gl.useProgram(prog);

gl.uniform2f(uniforms.resolution, gl.canvas.width, gl.canvas.height);

function tick() {
  scene.preUpdate(1)
  scene.update(1)

  renderer.render(scene, vao, uniforms.transform);
  requestAnimationFrame(tick);
}

tick()
