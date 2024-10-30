function multipler(x) {
    return function(num) {
        return x * num
    }
}

const double = multipler(2)
const triple = multipler(3)

console.log(double(10));
console.log(triple(100));