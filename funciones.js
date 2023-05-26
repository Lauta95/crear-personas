let btn_1 = document.getElementById('btn_1')
const display = document.getElementById('display')

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`El nombre de la persona es ${this.nombre} y su edad es ${this.edad}`);
    }
}

const persona1 = new Persona('Lautaro', 28);



console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();
