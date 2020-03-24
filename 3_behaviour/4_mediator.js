class User {
	constructor(name) {
		this.name = name;
		this.room = null;
	}

	send(message, to) {
		this.room.send(message, this, to);
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`);
	}
}

class ChatRoom {
	constructor() {
		this.users = {};
	}

	registr(user) {
		this.users[user.name] = user;
		user.room = this;
	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from);
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from);
				}
			});
		}
	}
}

const u1 = new User('Rinat');
const u2 = new User('Elena');

const room = new ChatRoom();

room.registr(u1);
room.registr(u2);

// u1.send('Hello', u2);


// ==========================================

class OfficialDiller {
	constructor() {
		this.customers = [];
	}

	orderAuto(customer, auto, info) {
		const name = customer.getName();

		l(`Order name: ${name}. Order auto is ${auto}`);
		l(`Additional info: ${info}`);

		this.addToCustomersList(name);
	}

	addToCustomersList(name) {
		this.customers.push(name);
	}

	getCustomersList() {
		return this.customers;
	}
}

class Customer {
	constructor(name, dealerMediator) {
		this.name = name;
		this.dealerMediator = dealerMediator;
	}

	getName() {
		return this.name;
	}

	makeOrder(auto, info) {
		this.dealerMediator.orderAuto(this, auto, info);
	}
}

const mediator = new OfficialDiller();

const customer1 = new Customer('Rinat', mediator);
const customer2 = new Customer('Elena', mediator);

customer1.makeOrder('Tesla', 'With autopilot!');
customer2.makeOrder('Tesla', 'With perktronik!');

l(mediator.getCustomersList());
