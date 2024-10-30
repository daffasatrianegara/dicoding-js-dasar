// parse to string
const usernamw = "daffa"
const number = 123
const bool = true

const parseToString1 = String(number)
const parseToString2 = number.toString()

console.log(parseToString1)
console.log(parseToString2)

console.log('\t');

// parse to number
const luas = "12"
const lebar = "50"
const luas2 = "12cm"
const lebar2 = "50px"

const parseToInt1 = Number(luas)
const parseToInt2 = Number(lebar)
const parseToInt3 = parseInt(luas2)
const parseToInt4 = parseInt(lebar2)


console.log(parseToInt1);
console.log(parseToInt2);
console.log(parseToInt3);
console.log(parseToInt4);

console.log('\t');

// parse to float
const cm = "20.21cm"
const px = "233.12px"
const num = "123"

const parseToFloat1 = parseFloat(cm)
const parseToFloat2 = parseFloat(px)
const parseToFloat3 = parseFloat(num)

console.log(parseToFloat1);
console.log(parseToFloat2);
console.log(parseToFloat3);

console.log('\t');

// parse to boolean
const num1 = 123
const num2 = null || 0
const string = "123"

const boolFromNumber1 = Boolean(num1)
const boolFromNumber2 = Boolean(num2)
const boolFromString = Boolean(string)

console.log(boolFromNumber1);
console.log(boolFromNumber2);
console.log(boolFromString);