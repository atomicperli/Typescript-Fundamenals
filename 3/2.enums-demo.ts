// enums-demo.ts

// Numeric Enum
// enum Direction {
//   North,
//   East,
//   South,
//   West
// }

// console.log("Numeric Enum:");
// let dir: Direction = Direction.West;
// console.log("Direction:", dir); // 1
// console.log("Direction name:", Direction[dir]); // East

// String Enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

console.log("String Enum:");
let currentStatus: Status = Status.Success;
console.log("Status:", Status);

enum Gender {
  M = "MALE",
  F = "FEMALE",
  T = "TRANS"
}

enum Subjects {
  M = "MATHS",
  S = "SOCIAL"
}


console.log("Gender: ", Gender.F)