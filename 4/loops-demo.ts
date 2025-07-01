// loops-demo.ts



// for loop
// while loop
// do while lopp
// for ... in loop - for each loop in java.

// for(let number = 100 ; number >= 1; number = number - 2 ) {
//   if(number === 50) {
//     break
//   }
//   console.log(number)
// }


// console.log("For Loop:");
// for (let i = 1; i <= 5; i++) {
//   console.log("i:", i);
// }

// console.log("While Loop:");
// let j = 100;
// while (j > 0) {
//   if(j === 50) {
//     continue
//   }
//   console.log(j);
//   j--;
// }

console.log("Do-While Loop:");
// let k = 6;
// do {
//   console.log("k:", k);
//   k++;
// } while (k <= 5);

console.log("For...of Loop:");
let colors = ["Red", "Green", "Blue"];
// 0
// number of elements in a array - 1 {3 - 1 = 2}

for(let i = 0; i < colors.length ; i++)  {
  if(i == 0) {
    console.log(colors[i], "0th color");
  }
  else {
  console.log("Color:", colors[i]);
  }
}


for (let color of colors) {
  console.log("Color:", color);
}




