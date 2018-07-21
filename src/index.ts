import Scene from 'core/objects/Scene';
import Renderer from 'core/objects/Renderer';
import scenes from 'scenes';
import time from 'core/lib/time';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);

let activeScene = scenes.circle

renderer.bufferVertices(activeScene);
renderer.bufferColors(activeScene);

renderer.setVerticesAttributePointer();
renderer.setColorsAttributePointer();

const buttonList = document.querySelectorAll('button');

const addClickHandler = (b: HTMLButtonElement) => {
  b.addEventListener('click', (e: MouseEvent) => {
    const { value } = (<HTMLInputElement>e.target);
    activeScene = scenes[value];
    renderer.bufferVertices(activeScene);
    renderer.bufferColors(activeScene);
  })
};

Array
  .from(buttonList)
  .forEach(addClickHandler);

(function tick() {
  const deltaTime = time.tick()

  activeScene.preUpdate(deltaTime);
  activeScene.update(deltaTime);

  renderer.render(activeScene);
  requestAnimationFrame(tick);
})()
