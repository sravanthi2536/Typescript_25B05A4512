interface Length {
    length: number;
}

function printLength<T extends Length>(value: T): void {
    console.log("Length =", value.length);
}

printLength("Hello");
printLength([10, 20, 30, 40]);