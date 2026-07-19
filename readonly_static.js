"use strict";
class Student {
    static college = "SVECW";
    rollNo;
    name;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.college);
    }
}
let s1 = new Student("Sravanthi", 4512);
s1.display();
// Access static property
console.log("College Name:", Student.college);
// The following statements will give errors:
// s1.rollNo = 102;          // Error: Cannot assign to 'rollNo' because it is readonly.
// Student.college = "XYZ";  // This is allowed because it is static but NOT readonly.
