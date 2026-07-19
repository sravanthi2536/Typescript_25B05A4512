"use strict";
class Student_Details {
    // Properties
    name;
    roll_no;
    percentage;
    // Constructor
    constructor(s_name, s_roll_no, s_percentage) {
        this.name = s_name;
        this.roll_no = s_roll_no;
        this.percentage = s_percentage;
    }
    // Method
    marks(sem1, sem2) {
        return sem1 + sem2;
    }
    // Display details
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.roll_no);
        console.log("Percentage:", this.percentage);
    }
}
// Create object
let student1 = new Student_Details("Sravanthi", "25B05A4512", 92);
// Call methods
student1.display();
let total = student1.marks(450, 470);
console.log("Total Marks:", total);
