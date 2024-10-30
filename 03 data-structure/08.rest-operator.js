function manyParams(...params) {
    console.log(params.length);
    console.log(params);
}

function numerOnePartyAnthem(number, ...params) {
    console.log("number", number);
    console.log(params);
}

const countNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [first,second, third, ...rest] = countNumber

manyParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
numerOnePartyAnthem(1, "party anthem", "party anthem", "party anthem", "party anthem");
console.log(rest);