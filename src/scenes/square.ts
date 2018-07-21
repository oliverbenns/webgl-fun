import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

const scene = new Scene();

class Rectangle extends Entity {
  constructor(width: number, height: number) {
    super({
      colors: [
        Color.fromHex('#3498db'), // a
        Color.fromHex('#a569bd'), // b
        Color.fromHex('#808000'), // c
        Color.fromHex('#808000'), // c
        Color.fromHex('#a569bd'), // b
        Color.fromHex('#ff9e00'), // d
      ],
      vertices: [
        new Vector(0, 0),
        new Vector(width, 0),
        new Vector(0, height),
        new Vector(0, height),
        new Vector(width, 0),
        new Vector(width, height),
      ],
    })
  }
}

const one = new Rectangle(100, 100);
one.velocity.y = 10;
one.position.x = 150;
one.position.y = 150;
scene.add(one);

const two = new Rectangle(100, 100);
two.position.x = 400;
two.position.y = 300;
two.velocity.y = -10;
scene.add(two);

export default scene;
