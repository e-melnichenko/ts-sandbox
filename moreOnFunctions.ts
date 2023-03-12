// Function Type Expressions
function greeter(fn: (a: string) => void) {
  fn('hi');
}

function print(str: string) {
  console.log(str);
}

greeter(print);

type GreeterFunction = (a: string) => void
function greeter2(fn: GreeterFunction) {
  fn('hi');
}

// call signatures

type DescribableFunction = {
  description: string,
  (arg: number): boolean,
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description)
  fn(3);
}

// construct signatures

type SomeConstructor = {
  new(s: string): SomeObject,
}

function fn(ctor: SomeConstructor) {
  return new ctor('hi');
}

// generic functions

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

// string
firstElement(['hi']);
// number
firstElement([1]);
//undefined
firstElement([]);

function map<Input, Output>(arr: Input[], fn: (item: Input) => Output): Output[] {
  return arr.map(fn);
}

// Input string, Output number
map(["1"], (item) => parseInt(item));

function longest<Type extends {length: number}>(a: Type, b: Type) {
  return a.length > b.length;
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

combine([1,2], ["1"]);
combine<number | string>([1,2], ['1']);

// optional parameters
function f(n?: number) {

}

f();
f(1);

// function overloads

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if(d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

// rest parameters and arguments

function multiply(n: number, ...m: number[]) {
  return m.map(x => n* x);
}

const args1 = [1, 2];
const angle = Math.atan2(...args1);

const args2 = [1, 2] as const;
const angle2 = Math.atan2(...args2);

// parameter destructuring

function f2({a, b, c}: {a: number, b: number, c: number}) {}
