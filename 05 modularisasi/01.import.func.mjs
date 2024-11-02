import sayHello from "./02.export.func.mjs";
import { sayHai as hai } from "./02.export.func.mjs"
import * as variables from "./02.export.func.mjs"

sayHello("Satria")
hai()

const setName = variables.name
const setAge = variables.age
const setHobby = variables.hobby

console.log(setName, setAge, setHobby);