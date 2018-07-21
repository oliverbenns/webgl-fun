import color from 'core/lib/color';

class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r = 255, g = 255, b = 255, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toArray() {
    return [this.r, this.g, this.b, this.a];
  }

  static fromHex(hex: string) {
    const rgbArray = color.hexToRgb(hex);
    return new Color(rgbArray[0], rgbArray[1], rgbArray[2]);
  }
}

export default Color;
