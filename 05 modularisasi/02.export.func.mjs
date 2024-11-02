export default function sayHello(username = "daffa") {
    console.log(`Hello ${username}`);
}

export function sayHai(username = "daffa") {
    console.log(`Hai ${username}`);
}

const name = "daffa"
const age = 20
const hobby = "coding"

export { name, age, hobby }