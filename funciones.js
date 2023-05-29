
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return (`El nombre de la persona es ${this.nombre} y su edad es ${this.edad}`);
    }
}

const persona1 = new Persona('Lautaro', 28);
const persona2 = new Persona('Germán', 50);
let instancia = new Persona('prueba de instancia', 333);

let personaMostrar = persona1.saludar();

function boton() {
    let input1 = document.getElementById('name');
    let input2 = document.getElementById('age');
    let valor = input1.value;
    let valor2 = input2.value;
    console.log('El nombre es ' + valor + ' y su edad es de ' + valor2);


    let x = document.createElement("p");
    let t = document.createTextNode(`hola -> ${personaMostrar}`)
    x.appendChild(t);
    document.body.appendChild(x)


    
    // persona1.saludar();
    // persona2.saludar();

}

// console.log(persona1.nombre, persona1.edad);
// console.log(persona2.nombre, persona2.edad);
// console.log('------------------------------------------');
// console.log(instancia.nombre, instancia.edad);

