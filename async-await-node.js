const empleados=[
  {
    id:1,
    nombre: "Kakaroto"
  },
  {
    id:2,
    nombre: "Linda"
  },
  {
    id:3,
    nombre: "Karen"
  }
];

const salarios=[
  {
    id:1,
    salario:1000
  },
  {
    id:2,
    salario:1500
  },
];

// funcion para traer los usuarios
const getEmpleado = (id) => {
  return new Promise((resolve, reject) =>{
    const empleado=empleados.find(e => e.id === id)?.nombre;
    (empleado) ? resolve(empleado) : reject(`No existe empleado con el id ${id}`)
  })
}
// funcion para traer los usuarios
const getSalario = (id) => {
  return new Promise((resolve, reject) =>{
    const salario=salarios.find(e => e.id === id)?.salario;
    (salario) ? resolve(salario) : reject(`No existe un slario con el id ${id}`)
  })
}


const getInfoUsuario = async (id) => {
  try {
    const empleado =await getEmpleado(id);
  const salario = await getSalario(id);
  return `El salario de ${empleado} es de: ${salario}`;
  } catch (error) {
    throw error;
  }
  
}

const id=2;


getInfoUsuario(id)
.then(msg => {
  console.log(msg)
})
.catch(error => {console.log(error)})