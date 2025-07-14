// Our Task for Today is Making Tea
// 1. Boil Milk
// 2. Put some Sugar and Tea powder in the glass
// 3. Once the Milk is Boiled pour the milk in the glass, If the Milk is not Boiled Don't pour it, just say I can't make tea today


// Why to use async and await - async is a keyword that you give to a function telling that this function contains statements that are async in nature

// await - is a keyword that is used to halt the execution until the promise is is resolved.

async function makeTea() {
    console.log("Adding sugar to the glass")
    console.log("Adding tea powder to the glass")
    try {
        let isMilkBoiled: boolean = await boilingMilk()
        if(isMilkBoiled) {
            await doBatH()
            console.log("Pour Milk into the glass")
        } else {
            console.log("Milk Boiling Failed")
        }
    } catch(e) {
        console.log("Error is. ", e)
    }
    //console.log("Hey Hello How are you doing")
    
}

function boilingMilk() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        let isMilkBoiled: boolean = false;
        if (isMilkBoiled) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 5000);
    });
}

function doBatH()
 {
     return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("Bath Completed")
        resolve()
      }, 5000);
    });
 } 
// boilingMilk().then(() => {
//     console.log("Hey Hello how are you doing")
// }).catch()


makeTea()