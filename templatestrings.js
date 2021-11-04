const nombre = "Jiren"
const apellido = "SUarez"

console.log("El nombre es " + nombre + " y el apellido es " + apellido);
console.log(`El nombre es ${nombre} y el apellido es ${apellido} con templatestrings`);


const edad = new Date().getFullYear() - 1995;


document.write(`Bienvenido ${nombre}, tu edad es de ${edad}`.toUpperCase())