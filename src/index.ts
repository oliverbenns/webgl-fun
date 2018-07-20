import Scene from 'core/objects/Scene';
import Renderer from 'core/objects/Renderer';
import scenes from 'scenes'

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
    // @TODO: Why don't I need to buff these?
    // renderer.bufferVertices(activeScene);
    // renderer.bufferColors(activeScene);
    console.log('activeScene', activeScene);
  })
};

Array
  .from(buttonList)
  .forEach(addClickHandler);

(function tick() {
  activeScene.preUpdate(1);
  activeScene.update(1);

  renderer.render(activeScene);
  requestAnimationFrame(tick);
})()
