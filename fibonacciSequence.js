const fibonacciSequence = (numebr) => {
  if (number < 0 || number === undefined) return "Please enter a positive integer";
  if (number === 0) return [0];
  const fibonacciArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }

  return fibonacciArray;
};
