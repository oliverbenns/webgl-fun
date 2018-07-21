import Color from 'core/objects/Color';
import Vector from 'core/objects/Vector';

const data = [
  {
    colors: [
      Color.fromHex('#ff0b00'),
      Color.fromHex('#00c4ff'),
      Color.fromHex('#ff0b00'),
    ],
    vertices: [
      new Vector(0, 0),
      new Vector(100, 0),
      new Vector(0, 100),
    ],
    update: function(deltaTime: number) {
      this.rotation += 0.015 * deltaTime;
      this.scale.x += 0.005 * deltaTime;
      this.scale.y += 0.005 * deltaTime;
    }
  },
  {
    colors: [
      Color.fromHex('#01cd74'),
      Color.fromHex('#fff200'),
      Color.fromHex('#01cd74'),
    ],
    vertices: [
      new Vector(0, 0),
      new Vector(100, 0),
      new Vector(100, 100),
    ],
    update: function() {
      // @TODO: We do not need to set this on every frame.
      // Find a way to provide this in constructor or a setup method.
      this.velocity.x = 0.5
      this.velocity.y = 0.5
    }
  },
]

export default data;
