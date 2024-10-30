const user = {
    name : "daffa",
    email : "daffa@gmail.com",
    password : "123",
    gender : "Pria",
    age : 20,
    money : 1000000,
    credit_card : "BCA"
}

const name = user.name
const email = user['email']
let { money, credit_card, password = "12345" } = user

const newName = user.name = "Muhammad Daffa Satria Negara"
const newMoney = money = 2500000

delete user.credit_card

console.log(user);