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
