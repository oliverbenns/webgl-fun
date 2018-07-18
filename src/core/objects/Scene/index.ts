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
    this.entities.forEach(e => e.preUpdate(deltaTime));
  }

  update(deltaTime: number) {
    this.entities.forEach(e => e.update(deltaTime));
  }
}

export default Scene;
