let arr = [1, 2, 3, 5];
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = arr.reduce((a, b) => a + b, 0);
console.log(total - sum);