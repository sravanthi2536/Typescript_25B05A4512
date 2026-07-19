class Bank {
    public name: string;
    private password: string;
    protected balance: number;

    constructor(name: string, password: string, balance: number) {
        this.name = name;
        this.password = password;
        this.balance = balance;
    }

    showDetails(): void {
        console.log("Name:", this.name);
        console.log("Password:", this.password);
        console.log("Balance:", this.balance);
    }
}

let user = new Bank("Radha", "1234", 5000);

// Public member
console.log(user.name);      //Accessible

// Private member
// console.log(user.password);   //Error

// Protected member
// console.log(user.balance);   // Error

user.showDetails();          //Accessible