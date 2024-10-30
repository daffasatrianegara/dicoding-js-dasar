const price = 100;
const paid = 80;

// if (paid < price) {
//   throw new Error("Pembayaran kurang");
// }

try {
  console.log("Ini try block");

  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
