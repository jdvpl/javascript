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

const id=3;
// promesas
// getEmpleado(id)
// .then(empleado => {
//   console.log(empleado)
// })
// .catch(err => {
//   console.log(err)
// });

// getSalario(id)
// .then(salario => {
//   console.log(salario)
// })
// .catch(err => {
//   console.log(err)
// })

    getEmpleado(id)
      .then(empleado => {
        getSalario(id)
          .then(salario =>{
            console.log(`El empleado ${empleado} tiene un salario ${salario}`)
        })
        .catch(err => {
          console.log(err)
        })
        .catch(err => {
          console.log(err)
        })
      })