function f() {
  return {x: 10, y: 3}
}

type F = ReturnType<typeof f>
const a: F = {x: 23, y:3};
