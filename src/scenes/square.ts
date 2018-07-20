import { EntityOptions } from 'core/objects/Entity';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

import data from 'data';

const scene = new Scene();

const options = {
  colors: data[0].colors,
  vertices: data[0].vertices,
}
const entity = new Entity(options);
entity.update = data[0].update;

scene.add(entity)

export default scene
