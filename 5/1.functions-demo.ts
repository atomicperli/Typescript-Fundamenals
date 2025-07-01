// function-parameters-demo.ts

// 1. Basic Function with Signature
function add(a: number, b: number): number {
  return a + b;
}

console.log("Add(2, 3):", add(2, 3)); // 5

// 2. Optional Parameter
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}
console.log("Greet with title:", greet("Riya", "Dr."));
console.log("Greet without title:", greet("Riya"));

// 3. Default Parameter
function greetWithDefault(name: string, greeting: string = "Hi"): string {
  return `${greeting}, ${name}`;
}
console.log("With custom greeting:", greetWithDefault("Riya", "Welcome"));
console.log("With default greeting:", greetWithDefault("Riya"));


function printfruits(fruits: string[]) {
    for(let fruit of fruits) {
        console.log(fruit)
    }
}

printfruits(['Oranbge', 'Banana', "PineApple"])
