// Awaited
type A = Awaited<Promise<string>>
type A1 = Awaited<string | number>

// Partial
interface Todo {
  title: string,
  description: string,
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    fieldsToUpdate
  }
}

// Required
interface Props {
  a?: number,
  b?: number,
}

const obj: Props = {a: 2}
const obj2: Required<Props> = {a: 2};

// Readonly
interface Todo2 {
  title: string
}

const todo: Readonly<Todo2> = {title: 'TITLE'}
todo.title = 'hi';

// Record
interface CatInfo {
  age: number,
  breed: string,
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: {age: 1, breed: 'breed1'},
  boris: {age: 4, breed: 'asdf'},
  mordred: {age: 10, breed: 'hi'},
}

// Pick
interface Todo3 {
  title: string,
  description: string,
  completed: boolean
}

type TodoPreview = Pick<Todo3, 'title' | 'description'>

const todoPreview: TodoPreview = {title: 'title', description: 'desc'};

// Omit
type TodoPreview2 = Omit<Todo3, 'completed'>
const todoPreview2: TodoPreview2 = {title: '', description: ''};

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // b | c

// Extract
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // a

// NonNullable
type T2 = NonNullable<string | null | undefined> // string

// Parameters<Type>
type T3 = Parameters<() => void> // []
type T4 = Parameters<(s: string) => void>; // [string]
declare function f1(arg: {a: number, b: string});
type T5 = Parameters<typeof f1>; // [{a: number, b: string}]

// ConstructorParameters<Type>
type T6 = ConstructorParameters<ErrorConstructor> // [message?: string]
type T7 = ConstructorParameters<RegExpConstructor> // [(RegExp | string)]

// ReturnType
type T8 = ReturnType<() => string> // string
declare function f2(): {a: number}
type T9 = ReturnType<typeof f2> // {a: number}

