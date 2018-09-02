import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import lerp from 'core/lib/lerp';

const foo = lerp(100, 400, 0.5) ;
console.log('foo', foo); //250

const scene = new Scene();

const startDestination = 100
const endDestination = 400

class Rectangle extends Entity {
  private startTime: number

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

    this.startTime = Date.now();
  }
}

const one = new Rectangle(100, 100);
scene.add(one);

one.update = function(deltaTime: number) {
  const newTime = Date.now();
  const duration = 2;

  const progress = (newTime - this.startTime) / duration / 1000; // percent
  console.log('progress * 1000', progress * 1000);
  console.log('progress', progress);

  this.position.x = lerp(100, 400, progress)

  if (progress >= 1) {
    this.startTime = Date.now()
  }
}

one.update()

const two = new Rectangle(100, 100);
two.position.x = 400;
two.position.y = 300;
two.velocity.y = -10;
scene.add(two);

export default scene;
