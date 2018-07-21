import Scene from 'core/objects/Scene';
import Renderer from 'core/objects/Renderer';
import scenes from 'scenes';
import time from 'core/lib/time';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);

const scene = scenes.triangle

renderer.bufferVertices(scene);
renderer.bufferColors(scene);

renderer.setVerticesAttributePointer();
renderer.setColorsAttributePointer();


const buttonList = document.querySelectorAll('button');

let activeScene = scenes.triangle

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
