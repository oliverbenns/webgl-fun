import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

const scene = new Scene();

class Triangle extends Entity {
  constructor() {
    const colors = [
      Color.fromHex('#00c4ff'),
      Color.fromHex('#ff0b00'),
      Color.fromHex('#ff0b00'),
    ];

    const vertices = [
      new Vector(0, 0),
      new Vector(100, 0),
      new Vector(0, 100),
    ];

    super({ colors, vertices })
  }

  update(deltaTime: number) {
    this.rotation += Math.PI * deltaTime;
  }
}

const canvasWidth = 640;
const canvasHeight = 480;

const one = new Triangle();
one.position = new Vector(canvasWidth / 2, canvasHeight / 2);

const two = new Triangle();
two.position = new Vector(canvasWidth / 2, canvasHeight / 2);
two.rotation = Math.PI;

scene.add(one);
scene.add(two);

export default scene
