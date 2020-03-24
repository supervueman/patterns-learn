// class Server {
// 	constructor(ip, port) {
// 		this._ip = ip;
// 		this.port = port;
// 	}

// 	get url() {
// 		return `https://${this._ip}:${this.port}`;
// 	}
// }

// function aws(server) {
// 	server.isAWS = true;
// 	server.awsInfo = () => {
// 		return server.url;
// 	};

// 	return server;
// }

// function azure(server) {
// 	server.isAzure = true;
// 	server.port += 500;
// 	return server;
// }

// const s1 = aws(new Server('12.23.34.45', 8080));

// console.log(s1.isAWS);
// console.log(s1.awsInfo());

// const s2 = azure(new Server('23.34.45.56', 2500));

// console.log(s2.isAzure);
// console.log(s2.url);

class Car {
	constructor() {
		this.price = 10000;
		this.model = 'Car';
	}

	getPrice() {
		return this.price;
	}

	getDescription() {
		return this.model;
	}
}

class Tesla extends Car {
	constructor() {
		super();
		this.price = 25000;
		this.model = 'Tesla';
	}
}

class Autopilot {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 5000;
	}

	getDescription() {
		return `${this.car.getDescription()} with autopilot`;
	}
}

class Parktronik {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 3000;
	}

	getDescription() {
		return `${this.car.getDescription()} with parktronik`;
	}
}

let tesla = new Tesla();

tesla = new Autopilot(tesla);
tesla = new Parktronik(tesla);

console.log(tesla.getPrice());
