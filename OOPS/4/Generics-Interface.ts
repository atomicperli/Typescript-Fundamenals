export {}

interface Item <T> {
    productName: T,
}

let item1: Item<number> = {
    productName: 0
}

console.log(item1)

let item2: Item<string> = {
    productName: "Pen"
}

console.log(item2)

let item3: Item<boolean> = {
    productName: false
}

console.log(item3)