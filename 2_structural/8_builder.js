// Пример: Конструктор пиццы

class Car {
	constructor() {
		this.autopilot = false;
		this.parktronik = false;
		this.signaling = false;
	}
}

class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutoPilot(autopilot) {
		this.car.autopilot = autopilot;
		return this;
	}

	addParktronik(parktronik) {
		this.car.parktronik = parktronik;
		return this;
	}

	addSignaling(signaling) {
		this.car.signaling = signaling;
		return this;
	}

	updateEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}

const myCar = new CarBuilder().addAutoPilot(true).addParktronik(true).addSignaling(true).updateEngine('v8').build();

l(myCar);
