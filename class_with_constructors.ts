class Student_Details {
    // Properties
    public name: string;
    public roll_no: string;
    public percentage: number;

    // Constructor
    constructor(s_name: string, s_roll_no: string, s_percentage: number) {
        this.name = s_name;
        this.roll_no = s_roll_no;
        this.percentage = s_percentage;
    }

    // Method
    marks(sem1: number, sem2: number): number {
        return sem1 + sem2;
    }

    // Display details
    display(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.roll_no);
        console.log("Percentage:", this.percentage);
    }
}

// Create object
let student1 = new Student_Details("Sravanthi", "4512", 92);

// Call methods
student1.display();

let total = student1.marks(450, 470);
console.log("Total Marks:", total);