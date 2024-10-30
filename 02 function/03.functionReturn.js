function sumNumber(num1 = 12, num2 = 50) {
    return num1 + num2
} 

const sumWithValue = sumNumber(50, 58)
const sumWithoutValue = sumNumber()

console.log(sumWithValue);
console.log(sumWithoutValue);