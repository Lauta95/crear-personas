
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log (`El nombre de la persona es ${this.nombre} y su edad es ${this.edad}`);
    }
}

const persona1 = new Persona('Lautaro', 28);
const persona2 = new Persona('Germán', 50);


function boton() {
    let x = document.createElement("p");
    let t = document.createTextNode(`hola ${persona1}`)
    x.appendChild(t);
    document.body.appendChild(x)

    console.log('------------------------------------------');
    persona1.saludar();
    persona2.saludar();
}


console.log(persona1.nombre, persona1.edad);
console.log(persona2.nombre, persona2.edad);

let instancia = new Persona('prueba de instancia', 333);
console.log(instancia.nombre, instancia.edad);

