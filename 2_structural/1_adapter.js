class OldCalc {
	operations(t1, t2, operation) {
		switch (operation) {
			case 'add':
				return t1 + t2;
			case 'sub':
				return t1 - t2;
			default:
				return NaN;
		}
	}
}

class NewCalc {
	add(t1, t2) {
		return t1 + t2;
	}

	sub(t1, t2) {
		return t1 - t2;
	}
}

class CalcAdapter {
	constructor() {
		this.calc = new NewCalc();
	}

	operations(t1, t2, operation) {
		switch (operation) {
			case 'add':
				return this.calc.add(t1, t2);
			case 'sub':
				return this.calc.sub(t1, t2);
			default:
				return NaN;
		}
	}
}
const oldCalc = new OldCalc();
// console.log(oldCalc.operations(2, 3, 'add'));

const newCalc = new NewCalc();
// console.log(newCalc.add(2, 3));

const adapter = new CalcAdapter();
// console.log(adapter.operations(2, 3, 'add'));

class Engine2 {
	simpleInterface() {
		l('Engine 2.0 - tr-tr-tr');
	}
}

class EngineV8 {
	complecatedInterface() {
		l('Engine V8 = wroom wroom!');
	}
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		this.engine.complecatedInterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface();
	}
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar2.startEngine(engineAdapter);
