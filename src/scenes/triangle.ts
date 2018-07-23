import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

const scene = new Scene();

const one = new Entity({
  colors: [
    Color.fromHex('#ff0b00'),
    Color.fromHex('#00c4ff'),
    Color.fromHex('#ff0b00'),
  ],
  vertices: [
    new Vector(0, 0),
    new Vector(100, 0),
    new Vector(0, 100),
  ],
})

one.position = new Vector(150, 150);

one.update = function(deltaTime: number) {
  this.rotation += Math.PI * deltaTime;
}

const two = new Entity({
  colors: [
    Color.fromHex('#01cd74'),
    Color.fromHex('#fff200'),
    Color.fromHex('#01cd74'),
  ],
  vertices: [
    new Vector(0, 0),
    new Vector(100, 0),
    new Vector(100, 100),
  ],
})

two.position = new Vector(400, 300);

two.update = function(deltaTime: number) {
  this.rotation += Math.PI * deltaTime;
}

scene.add(two);
scene.add(one);

export default scene
