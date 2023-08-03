class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount)
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('not enough funds');
      return;
    }
    this._processWithdrawal(amount)
    this._balance -= amount;
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

  _processDeposit(amount) {
    console.log(`Depositing $${amount}`);
    this._transactions.push({
      type: 'deposit',
      amount,
    });
  }

    _processWithdrawal(amount) {
    console.log(`Withdrawing $${amount}`);
    this._transactions.push({
      type: 'withdraw',
      amount,
    });
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);
