// class MyIterator {
// 	constructor(data) {
// 		this.index = 0;
// 		this.data = data;
// 	}

// 	[Symbol.iterator]() {
// 		return {
// 			next: () => {
// 				if (this.index < this.data.length) {
// 					return {
// 						value: this.data[this.index++],
// 						done: false
// 					};
// 				} else {
// 					this.index = 0;
// 					return {
// 						done: true,
// 						value: void 0
// 					};
// 				}
// 			}
// 		};
// 	}
// }

// function* generator(collection) {
// 	let index = 0;

// 	while (index < collection.length) {
// 		yield collection[index++];
// 	}
// }

// const iterator = new MyIterator(['this', 'is', 'iterator']);

// const gen = generator(['this', 'is', 'iterator']);

// for (const val of gen) {
// 	console.log('Value: ', val);
// }

// ===========================================

class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mersedes']);

while (collection.hasNext()) {
  l(collection.next());
}
