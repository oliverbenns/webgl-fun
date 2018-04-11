const add = (a: Vector, b: Vector): Vector => ({
  x: a.x + b.x,
  y: a.y + b.y,
})

const a = { x: 1, y: 1 };
const b = { x: 2, y: 2 };

const c = add(a, b);

console.log('c', c);
