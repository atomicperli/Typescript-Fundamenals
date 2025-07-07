function getValue2<K> (key: K): any {
    if(typeof key === "string") {
        return "true"
    } else if (typeof key === "boolean") {
        return true
    }
}

console.log(getValue2<string>("Yash"))
console.log(getValue2<boolean>(false))





function getValue<K,V>(key: K, value1: V, value2: V): V {
    if(typeof key === "string") {
        return value1
    } else {
        return value2
    }
}

console.log(getValue<string,number>("Yash", 30, 22))
console.log(getValue<boolean,number>(true, 30, 22))