import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import lerp from 'core/lib/lerp';
import clamp from 'core/lib/clamp';

const scene = new Scene();

interface Options {
  loopOffset?: number
}

class Rectangle extends Entity {
  private loopDuration: number
  private loopProgress: number

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

    this.loopProgress = options.loopOffset || 0;
    this.loopDuration = 3;
  }

  updateLoopProgress(deltaTime: number) {
    const incrementTime = deltaTime / this.loopDuration; // add duration

    this.loopProgress += incrementTime;

    if (this.loopProgress > 1) {
      this.loopProgress = 0;
    }
  }

  update(deltaTime: number) {
    this.updateLoopProgress(deltaTime);

    if (this.loopProgress < 0.25) {
      const pathProgressInPercent = this.loopProgress / 0.25;
      const targetPosition = lerp(100, 400, pathProgressInPercent);

      this.position.x = targetPosition;
      this.position.y = 300;
    }

    else if (this.loopProgress >= 0.25 && this.loopProgress < 0.5) {
      const pathProgressInPercent = (this.loopProgress - 0.25) * 4;
      const targetPosition = lerp(300, 100, pathProgressInPercent);
      this.position.y = targetPosition;
      this.position.x = 400;
    }

    else if (this.loopProgress >= 0.5 && this.loopProgress <= 0.75) {
      const pathProgressInPercent = (this.loopProgress - 0.5) * 4;
      const targetPosition = lerp(400, 100, pathProgressInPercent);

      this.position.x = targetPosition;
      this.position.y = 100;
    }

    else if (this.loopProgress >= 0.75 && this.loopProgress <= 1) {
      const pathProgressInPercent = (this.loopProgress - 0.75) * 4;
      const targetPosition = lerp(100, 300, pathProgressInPercent);

      this.position.y = targetPosition;
      this.position.x = 100;
    }
  }
}

const rectCount = 2;

for(let i = 0; i < rectCount; i++) {
  const loopOffset = i / rectCount;
  const rect = new Rectangle(40, 40, { loopOffset });

  scene.add(rect);
}

export default scene;
