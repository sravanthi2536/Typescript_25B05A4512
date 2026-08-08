namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

// Using the namespace
console.log("Addition:", Calculator.add(12, 5));
console.log("Subtraction:", Calculator.subtract(10, 4));
console.log("Multiplication:", Calculator.multiply(40, 5));
console.log("Division:", Calculator.divide(10, 5));
