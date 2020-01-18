class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	responsibilities() {}

	work() {
		return `${this.name} doing ${this.responsibilities()}`;
	}

	getPaid() {
		return `${this.name} have salary ${this.salary}`;
	}
}

class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	responsibilities() {
		return 'programm creation process';
	}
}

class Tester extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	responsibilities() {
		return 'programm testing';
	}
}

const dev = new Developer('Rinat', 100000);
console.log(dev.getPaid());
console.log(dev.work());


const tester = new Tester('Viktoria', 90000);
console.log(tester.getPaid());
console.log(tester.work());
