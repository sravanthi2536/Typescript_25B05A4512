class Student {
    readonly id: number;
    constructor(id: number, public name: string) {
        this.id = id;
    }
    display() {
        console.log(this.id, this.name);
    }
}
let s = new Student(101, "Anu");
s.display();
