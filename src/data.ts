import color from 'core/lib/color';
import Vector from 'core/objects/Vector';

const red = color.hexToRgb('#ff0b00');
const blue = color.hexToRgb('#00c4ff');

const green = color.hexToRgb('#01cd74');
const yellow = color.hexToRgb('#fff200');

// entity data
const data = [
  {
    colors: [
      [...red, 255],
      [...blue, 255],
      [...red, 255],
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
      [...green, 255],
      [...yellow, 255],
      [...green, 255],
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
