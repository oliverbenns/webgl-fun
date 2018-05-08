#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec2 a_position;
in vec4 a_color;
uniform vec2 u_translation;

out vec4 v_color;

// all shaders have a main function
void main() {

  // gl_Position is a special variable a vertex shader
  // is responsible for setting

  vec2 foo = a_position * u_translation;
  gl_Position = vec4(foo, 1.0, 1.0);

  v_color = a_color;
}
