import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import Timer from 'core/objects/Timer';
import lerp from 'core/lib/lerp';
import clamp from 'core/lib/clamp';

const scene = new Scene();

interface Options {
  loopOffset?: number
}

class Rectangle extends Entity {
  private timer: Timer

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

    this.timer = new Timer(10, options.loopOffset);
    this.anchor.x = -(width / 2);
    this.anchor.y = -(height / 2);
  }

  preUpdate(deltaTime: number) {
    this.timer.update(deltaTime);
  }

  update(deltaTime: number) {
    if (this.timer.progress < 0.25) {
      const pathProgressInPercent = this.timer.progress / 0.25;
      const targetPosition = lerp(100, 400, pathProgressInPercent);

      this.rotation = lerp(0, Math.PI * 0.5, pathProgressInPercent);
      this.position.x = targetPosition;
      this.position.y = 300;
    }

    else if (this.timer.progress >= 0.25 && this.timer.progress < 0.5) {
      const pathProgressInPercent = (this.timer.progress - 0.25) * 4;
      const targetPosition = lerp(300, 100, pathProgressInPercent);

      this.rotation = lerp(Math.PI * 0.5, Math.PI, pathProgressInPercent);
      this.position.x = 400;
      this.position.y = targetPosition;
    }

    else if (this.timer.progress >= 0.5 && this.timer.progress <= 0.75) {
      const pathProgressInPercent = (this.timer.progress - 0.5) * 4;
      const targetPosition = lerp(400, 100, pathProgressInPercent);

      this.rotation = lerp(Math.PI, Math.PI * 1.5, pathProgressInPercent);
      this.position.x = targetPosition;
      this.position.y = 100;
    }

    else if (this.timer.progress >= 0.75 && this.timer.progress <= 1) {
      const pathProgressInPercent = (this.timer.progress - 0.75) * 4;
      const targetPosition = lerp(100, 300, pathProgressInPercent);

      this.rotation = lerp(Math.PI * 1.5, 0, pathProgressInPercent);
      this.position.x = 100;
      this.position.y = targetPosition;
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
