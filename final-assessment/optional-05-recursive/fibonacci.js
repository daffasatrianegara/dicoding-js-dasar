function fibonacci(n) {
  const arrResult = [];

  function calculateFibonacci(x) {
    if (x <= 1) return x;
    return calculateFibonacci(x - 1) + calculateFibonacci(x - 2);
  }

  for (let i = 0; i <= n; i++) {
    arrResult.push(calculateFibonacci(i));
  }

  return arrResult;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
