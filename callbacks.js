// un callback es que recible una funcion o un prarametro que se va a ejecutar despues en cierto punto de tiempo

// setTimeout(()=> {
//   console.log("hola mundo")
// },1000)

const getUserByID=(id,callback)=>{
  const usuario={
    id,
    nombre:"Juan Daniel"
  }
  setTimeout(()=>{
    callback(usuario)
    callback(usuario.nombre.toUpperCase())
  },1500)
}

getUserByID(10, (usuario)=>{
  console.log(usuario)
})
