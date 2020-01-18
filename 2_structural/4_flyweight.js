class Car {
	constructor(model, price) {
		this.model = model;
		this.price = price;
	}
}

class CarFactory {
	constructor() {
		this.cars = [];
	}

	create(model, price) {
		const candidate = this.getCar(model);
		if (candidate) {
			return candidate;
		}

		const newCar = new Car(model, price);

		this.cars.push(newCar);

		return newCar;
	}

	getCar(model) {
		return this.cars.find(car => car.model === model);
	}
}

const factory = new CarFactory();
const bmwx6 = factory.create('BMW', 2000000);
const audy = factory.create('Audy', 3000000);
const bmw = factory.create('BMW', 8000000);

console.log(bmwx6);
console.log(audy);
console.log(bmw);
