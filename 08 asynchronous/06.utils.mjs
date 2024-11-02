export function promiseExecutor() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random()

        setTimeout(() => {
            if(randomNumber > 0.8) {
                resolve("You did it!")
            } else {
                reject("You failed...")
            }
        }, 2000)
    })
}