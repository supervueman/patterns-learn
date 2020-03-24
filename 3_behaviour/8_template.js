// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}

// 	responsibilities() {}

// 	work() {
// 		return `${this.name} doing ${this.responsibilities()}`;
// 	}

// 	getPaid() {
// 		return `${this.name} have salary ${this.salary}`;
// 	}
// }

// class Developer extends Employee {
// 	constructor(name, salary) {
// 		super(name, salary);
// 	}

// 	responsibilities() {
// 		return 'programm creation process';
// 	}
// }

// class Tester extends Employee {
// 	constructor(name, salary) {
// 		super(name, salary);
// 	}

// 	responsibilities() {
// 		return 'programm testing';
// 	}
// }

// const dev = new Developer('Rinat', 100000);
// console.log(dev.getPaid());
// console.log(dev.work());

// const tester = new Tester('Viktoria', 90000);
// console.log(tester.getPaid());
// console.log(tester.work());

// =========================================

class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    l('Add electronic engine');
  }

  installChassis() {
    l('Install Tesla chassis');
  }

  addElectronic() {
    l('Add special electronic');
  }

  collectAccessories() {
    l('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    l('Add BMW engine');
  }

  installChassis() {
    l('Install BMW chassis');
  }

  addElectronic() {
    l('Add electronic');
  }

  collectAccessories() {
    l('Collect Accessories');
  }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
bmwBuilder.build();
