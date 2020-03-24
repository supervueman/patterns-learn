// class Light {
//   constructor(light) {
//     this.light = light;
//   }
// }

// class RedLight extends Light {
//   constructor() {
//     super('red');
//   }

//   sign() {
//     return 'STOP';
//   }
// }

// class YellowLight extends Light {
//   constructor() {
//     super('yellow');
//   }

//   sign() {
//     return 'READY';
//   }
// }

// class GreenLight extends Light {
//   constructor() {
//     super('green');
//   }

//   sign() {
//     return 'GO';
//   }
// }

// class TrafficLight {
//   constructor() {
//     this.states = [new RedLight(), new YellowLight(), new GreenLight()];

//     this.current = this.states[0];
//   }

//   change() {
//     const total = this.states.length;
//     let index = this.states.findIndex(light => light === this.current);

//     if (index + 1 < total) {
//       this.current = this.states[index + 1];
//     } else {
//       this.current = this.states[0];
//     }
//   }

//   sign() {
//     return this.current.sign();
//   }
// }

// const traffic = new TrafficLight();
// console.log(traffic.sign());

// traffic.change();
// console.log(traffic.sign());

// Use for router

// ===========================================

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPaiment extends OrderStatus {
  constructor() {
    super('waitingForPaiment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPaiment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

const order = new Order();
l(order.state.name);

order.nextState();
l(order.state.name);

order.nextState();
l(order.state.name);
