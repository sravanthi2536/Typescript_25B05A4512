class Student {
    constructor(
        public name: string,
        public age: number
    ) {}

    display() {
        console.log(this.name, this.age);
    }
}
let s = new Student("John", 20);
s.display();