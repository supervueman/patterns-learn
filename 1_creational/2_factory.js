// Factory порождает новые (разные) ОДНОТИПНЫЕ объекты на основании входных данных

class SimpleMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	}
}

class StandartMembership {
	constructor(name) {
		this.name = name;
		this.cost = 150;
	}
}

class PremiumMembership {
	constructor(name) {
		this.name = name;
		this.cost = 500;
	}
}


class MemberFactory {
	static list = {
		simple: SimpleMembership,
		standart: StandartMembership,
		premium: PremiumMembership
	}

	create(name, type = 'simple') {
		const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
		const member = new Membership(name);

		member.type = type;
		member.define = function () {
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		};

		return member;
	}
}

const factory = new MemberFactory();

const members = [
	factory.create('Rinat', 'simple'),
	factory.create('Elena', 'premium')
];

console.log(members);

class Bmw {
	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class BmwFactory {
	create(type) {
		if (type === 'X5') return new Bmw('X5', 10000, 200);
		if (type === 'X6') return new Bmw('X6', 20000, 300);
	}
}

const factory1 = new BmwFactory();

const bmwX5 = factory1.create('X5');
const bmwX6 = factory1.create('X5');
