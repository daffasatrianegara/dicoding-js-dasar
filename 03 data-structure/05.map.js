const userData = new Map([
    ['first name', 'daffa'],
    ['last name', 'satria'],
    ['gender', 'male'],
    ['age', 20]
])

userData.set('hobby', 'playing game')
userData.set(1, 'Muhammad Daffa')
userData.delete(1)

console.log(userData);
console.log("nama lengkap : " + userData.get('first name') + " " + userData.get('last name'));