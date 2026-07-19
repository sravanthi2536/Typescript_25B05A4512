function greet(name:string):string{
    return `Hello ${name}`;
}
let greetings=greet('Sravanthi');
console.log(greetings);

function college(col:string="SVECW"):string{
    return `studying in ${col}`;
}
let college_name=college('Vishnu');
console.log(college_name);
console.log(college());

function hobbies(...hobby:string[]):string{
    return `my hobbies are ${hobby}`;
}
let hob=hobbies('playing','writing','singing');
console.log(hob);