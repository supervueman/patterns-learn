// class Vehicle {
//   travelTime() {
//     return this.timeTaken;
//   }
// }

// class Bus extends Vehicle {
//   constructor() {
//     super();
//     this.timeTaken = 10;
//   }
// }

// class Taxi extends Vehicle {
//   constructor() {
//     super();
//     this.timeTaken = 5;
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super();
//     this.timeTaken = 3;
//   }
// }

// class Commute {
//   travel(transport) {
//     return transport.travelTime();
//   }
// }

// const commute = new Commute();

// console.log(commute.travel(new Taxi()));
// console.log(commute.travel(new Bus()));

// ===================================

function baseStrategy(amount) {
  return amount;
}

function premiumStrategy(amount) {
  return amount * 0.85;
}

function platinumStrategy(amount) {
  return amount * 0.65;
}

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
l(baseCustomer.checkout());

premiumCustomer.setAmount(50000);
l(premiumCustomer.checkout());

platinumCustomer.setAmount(50000);
l(platinumCustomer.checkout());
