// Суть паттерна в том что бы скрыть большой и некрасивый функционал в одном небольшом интерфейсе

class Complaints {
	constructor() {
		this.complaints = [];
	}

	reply(complaint) {}

	add(complaint) {
		this.complaints.push(complaint);
		return this.reply(complaint);
	}
}

class ProductComplaints extends Complaints {
	reply({
		id,
		customer,
		details
	}) {
		return `Product: ${id}: ${customer} (${details})`;
	}
}

class ServiceComplaints extends Complaints {
	reply({
		id,
		customer,
		details
	}) {
		return `Service: ${id}: ${customer} (${details})`;
	}
}

class ComplaintRegestry {
	registr(customer, type, details) {
		const id = Date.now();
		let complaint;

		if (type === 'service') {
			complaint = new ServiceComplaints();
		} else {
			complaint = new ProductComplaints();
		}

		return complaint.add({
			id,
			customer,
			details
		});
	}
}

const complaint1 = new ComplaintRegestry();

// console.log(complaint1.registr('Rinat', 'service', 'qweqweqwe'));

const complaint2 = new ComplaintRegestry();

// console.log(complaint2.registr('Rinat', '', 'qweqweqdf3we'));


// ===================================

class Conveyor {
	setBody() {
		l('Body set!');
	}

	getEngine() {
		l('Dismantle Engine!');
	}

	setEngine() {
		l('Engine set!');
	}

	setInterior() {
		l('Exterior added!');
	}

	getInterior() {
		l('Update interior!');
	}

	setExterior() {
		l('Added interior!');
	}

	setWheels() {
		l('Wheels!');
	}

	addElectronics() {
		l('Added electronics!');
	}

	paint() {
		l('Car painted!');
	}
}

class ConveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.setExterior();
		this.car.setWheels();
		this.car.addElectronics();
		this.car.paint();
	}

	changeEngine() {
		this.car.getEngine();
		this.car.setEngine();
	}

	changeInterior() {
		this.car.getInterior();
		this.car.setInterior();
	}
}

const conveyor = new ConveyorFacade(new Conveyor());

conveyor.assembleCar();
conveyor.changeEngine();
conveyor.changeInterior();
