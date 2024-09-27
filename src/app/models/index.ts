enum Genero {
  Macho = 'M',
  Hembra = 'H',
}

type AnimalClasificacion = 'vertebrado' | 'invertebrado';

interface IAnimal {
  respirar(): void;
}

class Animal implements IAnimal {
  constructor(
    public genero: Genero,
    public tienePelo: boolean,
    public cantidadPatas: number,
    public clasificacion: AnimalClasificacion
  ) {}

  respirar(): void {
    console.log('Respidando...');
  }

  // constructor(
  //   genero: Genero,
  //   clasificacion: AnimalClasificacion,
  //   tienePelo: boolean,
  //   cantidadPatas: number
  // ) {
  //   this.genero = genero;
  //   this.cantidadPatas = cantidadPatas;
  //   this.clasificacion = clasificacion;
  //   this.tienePelo = tienePelo;
  // }
}

class Perro extends Animal {
  constructor(genero: Genero) {
    super(genero, true, 4, 'vertebrado');
  }
}

class Persona {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(val: string) {
    const splittedValue = val.split(' '); // ['Jose', 'Perez'];
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  }
}

// const perro = new Animal(Genero.Hembra, true, 4, 'vertebrado');
const firulais = new Perro(Genero.Macho);

const jose = new Persona('Jose', 'Gonzales');
console.log(jose.fullName);
jose.fullName = 'Jose Perez';
