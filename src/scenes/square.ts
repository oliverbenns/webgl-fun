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
        Color.fromHex('#11998e'), // a
        Color.fromHex('#38ef7d'), // b
        Color.fromHex('#11998e'), // c
        Color.fromHex('#11998e'), // c
        Color.fromHex('#38ef7d'), // b
        Color.fromHex('#38ef7d'), // d
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

    this.timer = new Timer(5, options.loopOffset);
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

      const start = 0;
      const end = (Math.PI * 0.5);
      this.rotation = lerp(start, end, pathProgressInPercent);
      this.position.x = targetPosition;
      this.position.y = 300;
    }

    else if (this.timer.progress >= 0.25 && this.timer.progress < 0.5) {
      const pathProgressInPercent = (this.timer.progress - 0.25) * 4;
      const targetPosition = lerp(300, 100, pathProgressInPercent);

      const start = Math.PI * 0.5;
      const end = Math.PI;
      this.rotation = lerp(start, end, pathProgressInPercent);
      this.position.x = 400;
      this.position.y = targetPosition;
    }

    else if (this.timer.progress >= 0.5 && this.timer.progress <= 0.75) {
      const pathProgressInPercent = (this.timer.progress - 0.5) * 4;
      const targetPosition = lerp(400, 100, pathProgressInPercent);

      const start = Math.PI;
      const end = Math.PI * 1.5;
      this.rotation = lerp(start, end, pathProgressInPercent);
      this.position.x = targetPosition;
      this.position.y = 100;
    }

    else if (this.timer.progress >= 0.75 && this.timer.progress <= 1) {
      const pathProgressInPercent = (this.timer.progress - 0.75) * 4;
      const targetPosition = lerp(100, 300, pathProgressInPercent);

      const start = Math.PI * 1.5;
      const end = Math.PI * 2;
      this.rotation = lerp(start, end, pathProgressInPercent);
      this.position.x = 100;
      this.position.y = targetPosition;
    }
  }
}

const rectCount = 4;

for(let i = 0; i < rectCount; i++) {
  const loopOffset = i / rectCount;
  const rect = new Rectangle(50, 50, { loopOffset });

  scene.add(rect);
}

export default scene;
