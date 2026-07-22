let num:number = 147;
let temp:number = num;
let sum:number = 0;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}
if (sum == num)
    console.log("Armstrong");
else
    console.log("Not Armstrong");