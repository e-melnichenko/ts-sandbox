// predicates
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet() {
  return Math.random() > 0.5 ? {swim(){}} : {fly(){}}
}

const pet = getSmallPet()

if(isFish(pet)) {
  pet.swim()
} else {
  pet.fly();
}

// discriminated unions

interface Circle {
  kind: 'circle',
  radius: number,
}

interface Square {
  kind: 'square',
  sideLength: number,
}

type Shape = Circle | Square

function getArea(shape: Shape) {
  if(shape.kind === 'circle') {
    return Math.PI ** shape.radius
  } else {
    return shape.sideLength ** 2
  }
}

// exhaustiveness checking

interface Triangle {
  kind: 'triangle',
  sideLength: number,
}

type Shape2 = Square | Circle | Triangle;

function getArea2(shape: Shape2) {
  switch(shape.kind) {
    case 'square':
      return shape.sideLength ** 2
    case 'circle':
      return Math.PI * shape.radius ** 2
    default:
      const _exhaustiveCheck: never = shape;
      return shape;
  }
}
