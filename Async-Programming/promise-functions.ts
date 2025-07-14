
// What is a settled Promise ?  --> A promise that is either resolved or rejected is called a settled promise

// What is a fulfilled Promise ?   --> A promise that is resolved is called fulfilled promise

// What is a rejected Promise ?   --> A promise that is rejected is called a rejected Promise

// Promise.all, Promise.allSettled, Promise.any, Promise.race


function delayTask(taskName: string, delay: number, status: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(status)  
        resolve(`${taskName} is done`);
      else {
        reject(`${taskName} is rejected`)
      }
    }, delay);
  });
}

const p1 = delayTask("Adding Tea Powder", 8000, false)
const p2 = delayTask("Adding Sugar", 5000, false)
const p3 = delayTask("Boiling the milk", 6000, false)

Promise.all([p1,p2,p3]).then((result) => {
    console.log(result)
 }
).catch((data) => {
    console.log(data)
})

Promise.any([p1,p2,p3]).then((result) => {
    console.log(result)
 }
).catch((data) => {
    console.log(data)
})

Promise.race([p1,p2,p3]).then((result) => {
    console.log(result)
 }
).catch((data) => {
    console.log(data)
})


Promise.allSettled([p1,p2,p3]).then((results) => {
    console.log(results)
 }
)
