import { doSomething } from "./04.utils.mjs";

function onFulfilled(doSomethingData) {
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);