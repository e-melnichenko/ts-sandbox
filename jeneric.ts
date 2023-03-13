// generic constraints

interface Lengthwise {
    length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

// Using Type Parameters in Generic Constraints

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x1 = {a: 1, b: 2};

getProperty(x1, 'a');
getProperty(x1, 'w');
