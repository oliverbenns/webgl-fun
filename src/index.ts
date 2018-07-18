import Renderer from 'core/objects/Renderer';
import scene from 'scene';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);

renderer.bufferVertices(scene);
renderer.bufferColors(scene);

renderer.setVerticesAttributePointer();
renderer.setColorsAttributePointer();

(function tick() {
  scene.preUpdate(1);
  scene.update(1);

  renderer.render(scene);
  requestAnimationFrame(tick);
})()
