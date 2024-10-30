const checkMoney = (money) => {
    if(money > 1000000) {
        console.log("beli perfume mahal");
    } else {
        console.log("pulang ke rumah");
    }

    console.log("saatnya cari duit yang banyak...");
}


let money = 2000000
checkMoney(money)
money = 100000
checkMoney(money)

const ipk = 2.5

if(ipk > 3.5) {
    console.log("oke gas oke gas beli mobil!");
} else if(ipk < 3.5 && ipk > 3.0) {
    console.log("dibeliin sepeda!");
} else {
    console.log("belajar yang bener!");
}
