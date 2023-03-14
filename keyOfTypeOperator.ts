type Point = {x: number, y: number};
type P = keyof Point // 'x' | 'y'

type Arrayish = {[n: number]: any}
type P2 = keyof Arrayish // number

type Mapish = {[k: string]: any}
type P3 = keyof Mapish // string|number
