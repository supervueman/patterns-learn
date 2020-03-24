// Пример: Когда много клиентов хотят один и тот же товар с разными характеристиками

const car = {
	wheels: 4,
	init() {
		console.log(this.wheels, this.owner);
	}
};

const carWithOwner = Object.create(car, {
	owner: {
		value: 'Rinat'
	}
});

l(carWithOwner.__proto__ === car);

carWithOwner.init();

// ===================================

class TeslaCar {
	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}

const prototypeCar = new TeslaCar('S', 80000, 'black', false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();

car1.interior = 'white';

l(car1, car2);
