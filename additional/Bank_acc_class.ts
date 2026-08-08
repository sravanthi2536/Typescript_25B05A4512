class BankAccount {
    balance: number = 0;
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log(this.balance);
    }
}
let acc = new BankAccount();
acc.deposit(5000);
acc.withdraw(1000);
acc.displayBalance();
