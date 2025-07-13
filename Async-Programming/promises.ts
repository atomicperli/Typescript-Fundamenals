// Promise - ‘I can’t give you the value right now, but I’ll give it to you later. Here’s a placeholder 


// Our Task for Today is Making Tea
// 1. Boil Milk
// 2. Put some Sugar and Tea powder in the glass
// 3. Once the Milk is Boiled pour the milk in the glass, If the Milk is not Boiled Don't pour it, just say I can't make tea today

// Sync Operations - Putting sugar, putting Tea powder
// Async Operations - Boiling Milk because this needs delay 
// There is another opeation that is based on the output of this async operation

// Promise is something that gets executed
// There are 3 states for a promise
// 1. Fulfilled or resolved
// 2. Rejected
// 3. Pending


// Why are we using a promise - We are using a promise to handle the data returned by a async code block do any subsequent operations on the retrieved data

export {}

function makeTea(): Promise<boolean> {

    console.log("Putting sugar in the glass")
    console.log("Putting Tea Powder in the glass")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isMilkBoiled: boolean = true
            if(isMilkBoiled) {
                resolve(true)
            } else {
                reject(false)
            }
        }, 10000)
    })

}

// let status = makeTea()
// console.log(status)

makeTea().then((data) => {
    if(data === true) {
                setTimeout(() => {
                console.log("Taking a bath")
            }, 2000)
    }
}).then((data) => {
    console.log("Pour Milk into the glass", data)
})
.catch((data) => {
    console.log("Not puring milk in the glass because status of milk boiled is " + data)
})




