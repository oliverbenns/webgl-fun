type Matrix = number[]

/**
 * Creates a 2D projection matrix
 * @param {number} width width in pixels
 * @param {number} height height in pixels
 * @return {module:webgl-2d-math.Matrix3} a projection matrix that converts from pixels to clipspace with Y = 0 at the top.
 * @memberOf module:webgl-2d-math
 */
const projection = (width: number, height: number): Matrix => {
  // Note: This matrix flips the Y axis so 0 is at the top.
  return [
    2 / width, 0, 0,
    0, -2 / height, 0,
    -1, 1, 1,
  ];
}


export default {
  projection,
};
