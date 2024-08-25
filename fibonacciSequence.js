 const fibonacciSequence = (n) => {
     if (n < 0 || n === undefined) return "Please enter a positive integer"
     if (n === 0) return [0];
     const fibonacciArray = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
    
    return fibonacciArray;
     
}