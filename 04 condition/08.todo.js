function categorizeNumber(input) {
  /**
   * TODO:
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   */
  let result;
  let isPrime;
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }



  if (input === 0) {
    result = "Nol";
    return result;
  } else if (input < 0) {
    result = "Negatif";
    return result;
  }

  if (input < 2) {
    isPrime = false;
  }

  for (let i = 2; i <= Math.sqrt(input); i++) {
    input % i === 0 ? (isPrime = false) : (isPrime = true);
  }

  if (isPrime === true) {
    result = "Prima";
    return result;
  }

  if (input % 2 === 0) {
    result = "Genap"
    return result
  } else {
    result = "Ganjil"
    return result
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
