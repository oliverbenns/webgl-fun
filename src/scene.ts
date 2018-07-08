import RenderObject from 'core/objects/RenderObject';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';

import data from 'data';

const scene = new Scene();

data
  .map((options: any) => new RenderObject(options))
  .forEach(o => scene.add(o));

export default scene
