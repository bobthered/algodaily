const sumAllPrimes = n => {
  // isPrime function
  const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // numbers less than 2 should be 0
  if (n < 2) return 0;

  // set sum
  let sum = 2;

  // loop through numbers
  for (let i = 3; i <= n; i = i + 2) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};

module.exports = sumAllPrimes;
