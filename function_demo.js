"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello ${name}`;
}
let greetings = greet('Sravanthi');
console.log(greetings);
function college(col = "SVECW") {
    return `studying in ${col}`;
}
let college_name = college('Vishnu');
console.log(college_name);
console.log(college());
function hobbies(...hobby) {
    return `my hobbies are ${hobby}`;
}
let hob = hobbies('playing', 'writing', 'singing');
console.log(hob);
//# sourceMappingURL=function_demo.js.map