const price = 250000
const isMember = true
const discount = isMember === true ? 0.25 : 0

console.log(`Diskon yang anda dapatkan adalah ${ price * discount }, jadi harganya menjadi ${ price - (price * discount) }`);