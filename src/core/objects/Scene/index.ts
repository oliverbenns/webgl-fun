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

  remove(entity: Entity) {
    const i = this.entities.indexOf(entity);

    if (i > -1) {
      this.entities.splice(i, 1);
    }
  }

  preUpdate(deltaTime: number) {
    this.entities.forEach(e => e.preUpdate(deltaTime));
  }

  update(deltaTime: number) {
    this.entities.forEach(e => e.update(deltaTime));
  }
}

export default Scene;
