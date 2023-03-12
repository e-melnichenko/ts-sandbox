// type aliases
type Point = {
  x: number,
  y: number,
}

function printCoords(pt: Point) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoords({x: 1, y: 2})

type ID = number | string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return str;
}

let userInput = sanitizeInput('asdf');
userInput = 'asdfgg';

// interfaces

interface Point1 {
  x: number,
  y: number,
}

function printCoords1(pt: Point1) {
  console.log(pt.x);
  console.log(pt.y);
}

printCoords1({x: 1, y: 2});

// type assertions

const myCanvas = document.getElementById('my-canvas') as HTMLCanvasElement;

let a = ('asdf' as any) as number;

// literal types

let x : 'hello' = "hello";
x = "hello";
x = 'howdy';

function printText(s: string, align: 'right' | 'center' | 'left') {

}

printText('str', 'flex-start');

// literal inference

const obj = {counter: 0};
obj.counter++;

const req1 = {url: 'url', method: 'get'}
function handleRequest(url: string, method: 'get' | 'post') {

}

handleRequest(req1.url, req1.method)

const req2 = {url: 'url', method: 'get' as 'get'}
handleRequest(req2.url, req2.method)

handleRequest(req1.url, req1.method as 'get');

const req3 = {url: 'url', method: 'get'} as const;
handleRequest(req3.url, req3.method);

