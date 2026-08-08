//arrow function consise
const total = (English_marks: number,Math_marks:number): number => {
    return English_marks+Math_marks;
}
console.log(total(80,89));

//shorthand arrow function
const welcome=(name:string):string=>`welcome to ${name}'s Home`;
console.log(welcome("sravanthi"));
