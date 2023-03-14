const myArray = [
  {name: 'hi', age: 1},
  {name: 'hi1', age: 2}
]

type Person = typeof myArray[number];
type Age = typeof myArray[number]['age'];
type Name = typeof myArray[number]['name'];

const key = 'age'
type Age2 = typeof myArray[number][key];

type key2 = 'age';
type Age3 = typeof myArray[number][key2];
