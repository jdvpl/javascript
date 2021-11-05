// codigo que promete resolver algun problema en especifico positiva o negativa
// callbacks son funciones de flecha
// resolve es lo que devuelve sea exitosa
// reject si algo que no se puede ejecutar
const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("esto no es valido")
    } else {
      resolve(a + b)
    }
  })
}
// tl then es para una respuesta satisfactoria
// catch para una respuesta mal
const result = sumar(-8 + -5).then((res) => {
  document.write(res)
}).catch((err) => {
  document.write(err)
})