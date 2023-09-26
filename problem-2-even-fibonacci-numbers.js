function fiboEvenSum(n) {
  let fibs = [1, 2];
  let i = 0;
  let j = 1;
  let k = 0;
  let sum = 0;

  while (k < n) {
    k = fibs[i] + fibs[j];
    fibs.push(k);
    i++;
    j++;
  }

  for (let l = 0; l < fibs.length; l++) {
    if (fibs[l] % 2 == 0) {
      sum += fibs[l];
    }
  }

  return sum;
}