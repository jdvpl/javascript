const salud = () => {
  document.write("<li>hola mundo en un intervalo de 2 s</li>")
}
document.write("<ol>")
setInterval(salud, 2000);
document.write("</ol>")