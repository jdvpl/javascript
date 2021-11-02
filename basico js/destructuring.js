const persona={
    nombre:"Kakaroto",
    edad:25,
    casado:false,
    hijo:{
        nombrehijo:"saitama",
    }
}

const {nombre, edad, casado, hijo} = persona;
const {nombrehijo}=hijo
console.log(nombre)
console.log(edad)
console.log(casado)
console.log(nombrehijo)