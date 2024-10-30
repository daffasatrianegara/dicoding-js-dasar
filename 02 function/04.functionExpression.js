const sumNumber = function(number1, number2) {
    return number1 + number2
}

const multiplyNumber = function(number1, number2) {
    return number1 * number2
}

function calculate(operation, number1, number2) {
    return operation(number1, number2)
}

const calculateSum = calculate(sumNumber, 10, 20)
const calculateMultiply = calculate(multiplyNumber, 100, 10)

console.log(calculateSum);
console.log(calculateMultiply);