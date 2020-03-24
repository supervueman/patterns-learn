// Пример: Авторизация на сайте

function networkFetch(url) {
	return `${url} - Ответ с сервера`;
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
	apply(target, thisArg, args) {
		const url = args[0];

		if (cache.has(url)) {
			return `${url} - Ответ из кэша`;
		} else {
			cache.add(url);
			return Reflect.apply(target, thisArg, args);
		}
	}
});

// console.log(proxiedFetch('angular.io'));
// console.log(proxiedFetch('react.io'));
// console.log(proxiedFetch('angular.io'));

// =======================================
class CarAccess {
	open() {
		l('Opening car door');
	}

	close() {
		l('Closing the car door!');
	}
}

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			l('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'Ilon';
	}

	close() {
		this.door.close();
	}
}

const door = new SecuritySystem(new CarAccess());

door.open('Jack');
door.open('Ilon');
door.close();
