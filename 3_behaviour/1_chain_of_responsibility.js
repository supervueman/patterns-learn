class MySumm {
	constructor(initialValue = 42) {
		this.summ = initialValue;
	}

	add(value) {
		this.summ += value;
		return this;
	}
}

const summ1 = new MySumm();
console.log(summ1.add(8).add(10).add(9).summ);
