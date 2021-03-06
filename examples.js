function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x*2)
        }, 2000)
    })
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10)
    const b = await doubleAfter2Seconds(20)
    const c = await doubleAfter2Seconds(30)
    return x + a + b + c
}

const test = addAsync(10)
console.log(test)
console.log("Hello")