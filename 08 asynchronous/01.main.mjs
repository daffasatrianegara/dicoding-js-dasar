import { makeCoffe, sendCoffe } from "./02.makeCoffe.mjs";

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffe(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    console.error(makeCoffeeError);
    return;
  }

  sendCoffe(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});