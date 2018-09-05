import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import lerp from 'core/lib/lerp';
import clamp from 'core/lib/clamp';

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

  // @TODO: Need some sort of setup method to determine start point.

  update(deltaTime: number) {
    const newTime = Date.now();
    const duration = 1.5;

    const timeSinceLoopStart = newTime - this.startTime
    const loopProgress = timeSinceLoopStart / duration // ms
    const progressInPercent = loopProgress / 1000

    if (progressInPercent < 0.25) {
      const pathProgressInPercent = progressInPercent / 0.25;
      const targetPosition = lerp(100, 400, pathProgressInPercent);

      this.position.x = clamp(targetPosition, 100, 400);
    }

    else if (progressInPercent >= 0.25 && progressInPercent < 0.5) {
      const pathProgressInPercent = (progressInPercent - 0.25) * 4;
      const targetPosition = lerp(300, 100, pathProgressInPercent);
      this.position.y = clamp(targetPosition, 300, 100);
    }

    else if (progressInPercent >= 0.5 && progressInPercent <= 0.75) {
      const pathProgressInPercent = (progressInPercent - 0.5) * 4;
      const targetPosition = lerp(400, 100, pathProgressInPercent);

      this.position.x = clamp(targetPosition, 400, 100);
    }

    else if (progressInPercent >= 0.75 && progressInPercent <= 1) {
      const pathProgressInPercent = (progressInPercent - 0.75) * 4;
      const targetPosition = lerp(100, 300, pathProgressInPercent);

      this.position.y= clamp(targetPosition, 100, 300);
    }

    if (progressInPercent >= 1) {
      this.startTime = Date.now()
    }
  }
}

const one = new Rectangle(100, 100);
scene.add(one);
one.position.y = 300

const two = new Rectangle(100, 100);
scene.add(two);

export default scene;
