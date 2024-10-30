// for loop
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arrNum.length; i++) {
  console.log(`angka index ke-${i} adalah ${arrNum[i]}`);
}

// for in
const data = {
  nama: "daffa",
  email: "daffa@gmail.com",
  jk: "Pria",
};

for (const user in data) {
  console.log(data[user]);
}

// for of
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}

// while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// do while
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 15);
