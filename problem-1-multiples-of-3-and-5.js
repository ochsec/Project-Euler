const multipleOf3 = (number) => 
  (number + '')
  .split('')
  .reduce((acc, num) => acc + parseInt(num), 0) % 3 === 0;

const multipleOf5 = (number) => number % 5 === 0;

const multiplesOf3and5 = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (multipleOf5(i) || multipleOf3(i)) {
      sum += i;
    }
  }
  return sum;
};

multiplesOf3and5(1000);