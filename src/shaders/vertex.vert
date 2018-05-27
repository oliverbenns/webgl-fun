#version 300 es

in vec2 a_position;
in vec4 a_color;
uniform vec2 u_translation;
uniform vec2 u_rotation;

out vec4 v_color;

void main() {


  vec2 foo = vec2(
    a_position.x * u_rotation.y + a_position.y * u_rotation.x,
    a_position.y * u_rotation.y - a_position.x * u_rotation.x);


  // vec2 foo = a_position + u_translation;
  gl_Position = vec4(foo, 1.0, 1.0);

  v_color = a_color;
}
