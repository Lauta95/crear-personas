class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return (`El nombre de la persona es ${this.nombre} y su edad es ${this.edad}`);
    }
}
function boton() {
    let input1 = document.getElementById('name');
    let input2 = document.getElementById('age');
    let valor = input1.value;
    let valor2 = input2.value;
    const persona3 = new Persona(valor, valor2)
    let personaMostrarDOM = persona3.saludar()
    let x = document.createElement("p");
    let t = document.createTextNode(`hola -> ${personaMostrarDOM}`)
    x.appendChild(t);
    document.body.appendChild(x)
}