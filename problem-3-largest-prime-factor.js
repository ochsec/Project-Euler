function largestPrimeFactor (number, div = 2) {
  if (number === 1) return number;
  if (number === 2) return number;

  if (number / div === 1) return number;

  while (number > div && number % div === 0) {
    number = number / div;
  }

  return largestPrimeFactor(number, div + 1)
}

console.log(largestPrimeFactor(8));