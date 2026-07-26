let arr = [1, 2, 2, 3, 1, 4];
let count: any = {};
for (let item of arr) {
    if (count[item])
        count[item]++;
    else
        count[item] = 1;
}
console.log(count);