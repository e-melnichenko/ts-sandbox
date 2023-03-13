// readonly props

interface SomeType {
    readonly prop: string
}

function doSomething1(obj: SomeType) {
    console.log(obj.prop);
    obj.prop = 's';
}

interface Home {
    readonly resident: {name: string, age: number}
}

function visitForBirthday(home: Home) {
    home.resident.age++;
    home.resident = {name: 'name', age: 1};
}

interface Person {
    name: string,
    age: number,
}

interface ReadonlyPerson {
    readonly name: string,
    readonly age: number,
}

let writablePerson: Person = {
    name: 'name',
    age: 12,
}

let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age) // 12
writablePerson.age++
console.log(readonlyPerson.age) // 13

// index signature

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ['d', 'r']

interface NumberDictionary1 {
    [index: string]: number;
    length: number;
    name: string // not a number!
}

interface NumberDictionary2 {
    [index: string]: number | string;
    length: number;
    name: string // ok
}

interface ReadonlyStringArray {
    readonly [index: number]: string,
}

let myArray2: ReadonlyStringArray = ['d'];
myArray2[1] = 'a'; // readonly

// extending types

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

// intersection types

interface Colorful {
    color: string;
}

interface Circle {
    radius: number
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {

}

draw({color: 'red', radius: 2});

// generic object types
interface Box<Type> {
    contents: Type
}

let box1: Box<string> = {contents: 'hi'}
let box2: Box<number> = {contents: 1}

// readonly array

function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    values.push('hi');
}

function doStuff2(values: readonly string[]) {}

let x1: readonly string[] = [];
let y1: string[] = [];

x1 = y1;
x1[0] = 'hi'; // work
y1 = x1; // can't assign

