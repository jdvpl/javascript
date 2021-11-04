const numeros = [65, 65, 65, 65, 65, 5, 8565, 65, 65, 65, 65, 65, 65]

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
document.write("</ul>")

// destructuring

const [jiren, vegueta, goku, saitama] = ["jiren", "vegueta", "goku", "saitama"]
document.write(saitama)