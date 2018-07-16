import { EntityOptions } from 'core/objects/Entity';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

import data from 'data';

const scene = new Scene();

data
  .map((options: any, i) => {
    const entity = new Entity(options);

    if (options.update) {
      entity.update = options.update;
    }

    return entity;
  })
  .forEach(o => scene.add(o));

export default scene
