const persona={
    nombre:"Kakaroto",
    edad:25,
    casado:false,
    hijo:{
        nombrehijo:"saitama",
    }
}

const {nombre, edad, casado, hijo, camisa=20} = persona;
const {nombrehijo}=hijo
console.log(nombre)
console.log(camisa)
console.log(edad)
console.log(casado)
console.log(nombrehijo)


function imprimeHeroe({nombre, edad, casado, hijo, camisa=20}){
    console.log(nombre,edad,casado, hijo, camisa)
}

imprimeHeroe(persona)

const heroes=["deapool","superman","batman"];

// const [d,s,b]=heroes;
const [,,b]=heroes;
// console.log(d,s,b)
console.log(b)