// class MyMath {
//   constructor(initialValue) {
//     this.num = initialValue;
//   }

//   square() {
//     return this.num ** 2;
//   }

//   cube() {
//     return this.num ** 3;
//   }
// }

// class Command {
//   constructor(subject) {
//     this.subject = subject;
//     this.commandsExecuted = [];
//   }

//   execute(command) {
//     this.commandsExecuted.push(command);

//     return this.subject[command]();
//   }
// }

// const x = new Command(new MyMath(2));

// console.log(x.execute('square'));
// console.log(x.execute('cube'));
// console.log(x.commandsExecuted);

// ===================================

class Driver {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
}

class OnSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}

const engine = new Engine();
l(engine);

const onStartCommand = new OnStartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();

l(engine);
