#version 300 es

in vec2 a_position;
in vec4 a_color;
// uniform vec2 u_rotation;
uniform vec2 u_resolution;

uniform mat3 u_transform;

out vec4 v_color;

void main() {
  vec2 position = (u_transform * vec3(a_position, 1)).xy;

  // vec2 rotatedPosition = vec2(
  //    a_position.x * u_rotation.y + a_position.y * u_rotation.x,
  //    a_position.y * u_rotation.y - a_position.x * u_rotation.x);

  // vec2 position = u_translation + rotatedPosition;


  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne = position / u_resolution;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = vec2(zeroToTwo.x - 1.0, 1.0 - zeroToTwo.y);


  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);


  // vec2 foo = a_position + u_translation;
  // gl_Position = vec4(foo, 1.0, 1.0);

  v_color = a_color;
}
