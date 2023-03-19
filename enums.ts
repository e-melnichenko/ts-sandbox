// numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum UserResponse {
  No,
  Yes
}

function respond(recipient: string, message: UserResponse): void {

}

respond('Princess Caroline', UserResponse.Yes);

// string enums
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// enums at a compile time
enum LogLevel {
  SUCCESS,
  WARN,
  ERROR,
}

type LogLevelStrings = keyof typeof LogLevel; // equivalent type LogLevelStrings = 'SUCCESS' | 'WARN' | 'ERROR'

// reverse mapping
enum E {
  A
}

let a = E.A;
const nameOfA = E[a]; // 'A'

// const enums ( cannot have computed members)
const enum Enum {
  A = 1,
  B = A * 2,
}
