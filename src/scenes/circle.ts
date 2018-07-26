import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import _angle from 'core/lib/angle';

const scene = new Scene();

class Circle extends Entity {
  constructor(radius: number, polyCount: number) {
    const vertices: Vector[] = [];
    const colors: Color[] = [];

    const rotateVector = (v: Vector, angle: number) => new Vector(
      v.x * Math.cos(angle) - v.y * Math.sin(angle),
      v.x * Math.sin(angle) + v.y * Math.cos(angle),
    );

    const iterationAngle = 360 / polyCount;

    const baseTriangle = [
      new Vector(0, 0),
      new Vector(0, radius),
      rotateVector(new Vector(0, radius), _angle.degreesToRadians(-iterationAngle)),
    ];

    for (let i = 0; i < polyCount; i++) {

      const angle = _angle.degreesToRadians(iterationAngle * i);

      vertices.push(rotateVector(baseTriangle[0], angle));
      vertices.push(rotateVector(baseTriangle[1], angle));
      vertices.push(rotateVector(baseTriangle[2], angle));

      colors.push(Color.fromHex('#dddddd'));
      colors.push(Color.fromHex('#3498db'));
      colors.push(Color.fromHex('#3498db'));
    }

    super({ colors, vertices });
  }
}

const one = new Circle(100, 100);
one.position.x = 320;
one.position.y = 250;

scene.add(one);


export default scene
