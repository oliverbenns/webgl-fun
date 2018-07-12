import { EntityOptions } from 'core/objects/Entity';
import Triangle from 'core/objects/Triangle';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

import data from 'data';

const scene = new Scene();

class _Triangle extends Triangle {
  constructor(options: EntityOptions) {
    super(options)
    this.velocity.x += 1;
    this.velocity.y += 1;
  }
  update(deltaTime: number) {
    this.rotation += 0.015 * deltaTime;
    this.scale.x += 0.1 * deltaTime;
    this.scale.y += 0.1 * deltaTime;
  }
}

data
  .map((options: any) => new _Triangle(options))
  .forEach(o => scene.add(o));

export default scene
