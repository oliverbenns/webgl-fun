import RenderObject from 'core/objects/RenderObject';
import Scene from 'core/objects/Scene';

import data from 'data';

const scene = new Scene();

data
  .map(d => new RenderObject(d))
  .forEach(o => scene.add(o));

export default scene
