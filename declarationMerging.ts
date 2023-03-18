// interface merging

interface Box  {
  width: number,
  height: number,
}

interface Box {
  scale: number,
}

const box: Box = {width: 1, height: 1, scale: 1};

type Animal = {name: string}
type Sheep = {name: string}

interface Cloner {
  clone(animal: Animal): Animal
}

interface Cloner {
  clone(animal: Sheep): Sheep // overload
}

const a: Cloner = {
  clone(sheep: Sheep) {return sheep}
}

const a1: Cloner = {
  clone(animal: Animal) {return animal}
}
