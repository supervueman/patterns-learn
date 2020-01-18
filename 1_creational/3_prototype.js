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

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
