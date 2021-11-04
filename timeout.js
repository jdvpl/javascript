const evaluar = () => {
  const edad = prompt("cual es tu edad? ")
  if (edad < 18) {
    document.write("Menor de edad")
    return; //para salir de toda la funcion
  } else {
    document.write("Mayor de edad")
  }
}


setTimeout(evaluar, 2000)