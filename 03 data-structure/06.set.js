const setNum = new Set()

for(i = 1; i <= 20; i++) {
    const randomNum = Math.floor((Math.random() * 10) + 1)
    setNum.add(randomNum)
}

for (const number of setNum) {
    console.log(number);
}

setNum.forEach((value) => setNum.delete(value))
setNum.forEach((value) => console.log(value))

if(setNum.length == null) {
    console.log("set kosong...");
}