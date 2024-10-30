let num1, num2
num1 = 10
num2 = 20

const pertambahan = num1 + num2
const pengurangan = num1 - num2
const perkalian = num1 * num2
const pembagian = num1 / num2
const modulus = num1 % num2

console.log(pertambahan, pengurangan, perkalian, pembagian, modulus);

// condition
const check1 = pertambahan != pengurangan
const check2 = num1 == modulus
const check3 = num1 === modulus.toString()

// AND/OR
const check4 = pertambahan === 30 && pengurangan === -10
const check5 = pertambahan === "30" || pengurangan === -10

console.log(check1);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);