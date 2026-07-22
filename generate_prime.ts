let start:number = 1;
let end:number = 20;
console.log("The prime numbers from 1 to 20 are:")
for (let num = start; num <= end; num++) {
    let prime = true;
    if (num <= 1)
        prime = false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log(num);
}