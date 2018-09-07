import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import lerp from 'core/lib/lerp';
import clamp from 'core/lib/clamp';

const scene = new Scene();

interface Options {
  progressInPercent?: number
}

class Rectangle extends Entity {
  private loopDuration: number
  private progressInPercent: number
  private timeSinceLoopStart: number


  constructor(width: number, height: number, options: Options = {}) {
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

    this.progressInPercent = options.progressInPercent || 0;
    this.loopDuration = 4;
    this.timeSinceLoopStart = 0
  }

  updateLoopProgress(deltaTime: number) {
    this.timeSinceLoopStart += deltaTime;
    // @TODO: do not run first time or somehow make use of initial progressInPercent.

    const loopProgress = this.timeSinceLoopStart / this.loopDuration;
    const isFirstLoop = loopProgress < this.progressInPercent;

    // The time should already be halfway through. Not at the start.

    if (isFirstLoop) {
      this.progressInPercent += loopProgress;
    }
    else {
      this.progressInPercent = loopProgress;
    }
  }

  update(deltaTime: number) {
    this.updateLoopProgress(deltaTime);

    if (this.progressInPercent < 0.25) {
      const pathProgressInPercent = this.progressInPercent / 0.25;
      const targetPosition = lerp(100, 400, pathProgressInPercent);

      this.position.x = clamp(targetPosition, 100, 400);
    }

    else if (this.progressInPercent >= 0.25 && this.progressInPercent < 0.5) {
      const pathProgressInPercent = (this.progressInPercent - 0.25) * 4;
      const targetPosition = lerp(300, 100, pathProgressInPercent);
      this.position.y = clamp(targetPosition, 300, 100);
    }

    else if (this.progressInPercent >= 0.5 && this.progressInPercent <= 0.75) {
      const pathProgressInPercent = (this.progressInPercent - 0.5) * 4;
      const targetPosition = lerp(400, 100, pathProgressInPercent);

      this.position.x = clamp(targetPosition, 400, 100);
    }

    else if (this.progressInPercent >= 0.75 && this.progressInPercent <= 1) {
      const pathProgressInPercent = (this.progressInPercent - 0.75) * 4;
      const targetPosition = lerp(100, 300, pathProgressInPercent);

      this.position.y= clamp(targetPosition, 100, 300);
    }

    if (this.progressInPercent >= 1) {
      this.progressInPercent = 0;
      this.timeSinceLoopStart = 0;
    }
  }
}

// const one = new Rectangle(100, 100);
// scene.add(one);

const two = new Rectangle(100, 100, { progressInPercent: 0.5 });
scene.add(two);

export default scene;
