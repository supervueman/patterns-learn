class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return 'Its a Tesla car';
  }
}

class Bmw extends Auto {
  info() {
    return 'Its a Bmw car';
  }
}

class Audi extends Auto {
  info() {
    return 'Its an Audi car';
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) auto.export = l(`Exported data: ${auto.info()}`);
  if (auto instanceof Bmw) auto.export = l(`Exported data: ${auto.info()}`);
  if (auto instanceof Audi) auto.export = l(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new Bmw();

l(tesla.accept(exportVisitor));
l(bmw.accept(exportVisitor));
