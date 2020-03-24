// Синглтон это объект он может быть единственным в своем роде

class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instanse;
		}
		Database.instanse = this;
		Database.exists = true;

		this.data = data;
	}

	getData() {
		return this.data;
	}
}

const mongo = new Database('MongoDB');
// console.log(mongo.getData());

const mySql = new Database('MySQL');
// console.log(mySql.getData());

// =====================================

const instance1 = {
	name: 'singletone'
};

const instance2 = {
	name: 'singletone'
};

// console.log(instance1 === instance2);

// ======================================

let instance;

class Counter {
	constructor() {
		if (!instance) instance = this;
		this.count = 0;
		return instance;
	}

	getCount() {
		return this.count;
	}

	increaseCount() {
		this.count++;
	}
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();

// console.log(counter1.getCount());
// console.log(counter2.getCount());

// console.log(counter1 === counter2); // true
