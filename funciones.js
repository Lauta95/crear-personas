
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`El nombre de la persona es ${this.nombre} y su edad es ${this.edad}`);
    }
}

function boton() {
    
}

const persona1 = new Persona('Lautaro', 28);
const persona2 = new Persona('Germán', 50);

console.log(persona1.nombre, persona1.edad);
console.log(persona2.nombre, persona2.edad);

console.log('----------------------------');

persona1.saludar();
persona2.saludar();
