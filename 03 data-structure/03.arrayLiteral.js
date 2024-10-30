const car = ['tesla', 'toyota', 'mitsubishi', 'GTR']
const car2 = ['Tesla', 'Toyota', 'Mitsubishi', 'GTR']
const car3 = ['Avanza', 'Inova', 'Aila']
const tesla = car[0]

for(i = 0; i < car.length; i++) {
    car[i] = car2[i]
}

car.push(car3[0])
car.push(car3[1])
car.push(car3[2])

delete car2[0]
car2.splice(0, 4)
// 0 means jumlah indeks array yang akan dihapus, sedangkan 4 means berapa element yang akan dihapus

car3.shift() // index pertama
car3.pop() // index terakhir

const [sportCar, Butut] = car

console.log(car);
console.log(tesla);
console.log(car2);
console.log(car3);
console.log(sportCar, Butut);