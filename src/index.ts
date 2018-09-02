import Scene from 'core/objects/Scene';
import Renderer from 'core/objects/Renderer';
import TimeTicker from 'core/objects/TimeTicker';
import scenes from 'scenes';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const timeTicker = new TimeTicker()

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
  timeTicker.tick()

  activeScene.preUpdate(timeTicker.deltaTime);
  activeScene.update(timeTicker.deltaTime);

  renderer.render(activeScene);
  requestAnimationFrame(tick);
})()
