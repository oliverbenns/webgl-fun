import Entity from 'core/objects/Entity';
import Vector from 'core/objects/Vector';

class Scene {
  public entities: Entity[]

  constructor() {
    this.entities = []
  }

  add(entity: Entity) {
    this.entities.push(entity);
  }

  preUpdate(deltaTime: number) {
    this.entities.forEach(o => o.preUpdate(1))
  }

  update(deltaTime: number) {
    this.entities.forEach(o => o.update(1))
  }
}

export default Scene;
