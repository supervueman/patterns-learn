// class MySumm {
//   constructor(initialValue = 42) {
//     this.summ = initialValue;
//   }

//   add(value) {
//     this.summ += value;
//     return this;
//   }
// }

// const summ1 = new MySumm();
// console.log(
//   summ1
//     .add(8)
//     .add(10)
//     .add(9).summ
// );

// =================================

class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      l(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      l(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      l('Unfortuntely, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    l(this);
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

master.pay(438);

master.show();
