import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

const scene = new Scene();

const one = new Entity({
  colors: [
    Color.fromHex('#3498db'),
    Color.fromHex('#a569bd'),
    Color.fromHex('#3498db'),
  ],
  vertices: [
    new Vector(200, 200),
    new Vector(300, 200),
    new Vector(200, 300),
  ],
});

one.velocity.x = 0.25;
one.velocity.y = 0.25;

scene.add(one);

export default scene
