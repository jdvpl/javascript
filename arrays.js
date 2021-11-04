const numeros = [1, 2, 3, 4, 5, 6, 5, 6, 6, 6, 6, 52, 12, 65, 2, 2, 2, 52, 65, 65, 65, 65, 65, 65, 5, 8565, 65, 65, 65, 65, 65, 65]

document.write(numeros)

document.write("<ul>")
for (numero in numeros) {
  document.write("<li>")
  document.write(numero)
  document.write("</li>")
}
document.write("</ul>")

// map
document.write("function map")

document.write("<ul>")
numeros.map((numero, i) => {
  document.write("<li>")
  document.write(numero)
  document.write("</li>")

})
document.write("<ul/>")