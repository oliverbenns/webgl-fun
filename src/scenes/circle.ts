import { EntityOptions } from 'core/objects/Entity';
import Color from 'core/objects/Color';
import Entity from 'core/objects/Entity';
import Scene from 'core/objects/Scene';
import Vector from 'core/objects/Vector';
import _angle from 'core/lib/angle';
import _color from 'core/lib/color';

const scene = new Scene();

class Circle extends Entity {
  constructor(radius: number, polyCount: number) {
    const vertices: Vector[] = [];
    const colors: Color[] = [];

    const rotateVector = (v: Vector, angle: number) => new Vector(
      v.x * Math.cos(angle) - v.y * Math.sin(angle),
      v.x * Math.sin(angle) + v.y * Math.cos(angle),
    );

    const polyAngle = 360 / polyCount;

    const baseTriangle = [
      new Vector(0, 0),
      new Vector(0, radius),
      rotateVector(new Vector(0, radius), _angle.degreesToRadians(polyAngle)),
    ];

    const bitsPerPoly = (255 * 6) / polyCount;

    let r = 255;
    let g = 0;
    let b = 0;

    for (let i = 0; i < polyCount; i++) {
      const angle = _angle.degreesToRadians(polyAngle * i);

      vertices.push(rotateVector(baseTriangle[0], angle));
      vertices.push(rotateVector(baseTriangle[1], angle));
      vertices.push(rotateVector(baseTriangle[2], angle));

      const color = new Color(r, g, b);

      colors.push(color);
      colors.push(color);
      colors.push(color);

      if (r === 255 && g < 255 && b === 0) {
        g = _color.clampRgb(g + bitsPerPoly);
      } else if (r <= 255 && r > 0 && g === 255) {
        r = _color.clampRgb(r - bitsPerPoly);
      } else if (g === 255 && b < 255) {
        b = _color.clampRgb(b + bitsPerPoly);
      } else if (g <= 255 && g > 0 && b === 255) {
        g = _color.clampRgb(g - bitsPerPoly);
      } else if (b === 255 && r < 255) {
        r = _color.clampRgb(r + bitsPerPoly);
      } else {
        b = _color.clampRgb(b - bitsPerPoly);
      }
    }

    super({ colors, vertices });
  }


  update(deltaTime: number) {
    const centralAnchor = new Vector(300, 200);
    this.scale.x += 0.005;
    this.scale.y += 0.005;
    this.rotation += 0.05;
  }
}

const radius = 30
const polyCount = 100

const one = new Circle(radius, polyCount);
one.position.x = 320;
one.position.y = 240;

// one.anchor = new Vector(300, 300)

scene.add(one);


export default scene;
