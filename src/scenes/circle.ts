import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

const scene = new Scene();

class Circle extends Entity {
  constructor(radius: number) {
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
        new Vector(radius, 0),
        new Vector(0, radius),
        new Vector(0, radius),
        new Vector(radius, 0),
        new Vector(radius, radius),
      ],
    })
  }
}

const one = new Circle(100);

scene.add(one);

export default scene
