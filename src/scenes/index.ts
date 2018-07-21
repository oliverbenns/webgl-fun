import Scene from 'core/objects/Scene';
import circle from './circle';
import square from './square';
import triangle from './triangle';

type Scenes = { [key: string]: Scene }

const scenes: Scenes = {
   circle,
  square,
  triangle
}

export default scenes
