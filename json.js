// JSON
//  antes no exitia los objetos en js
// js => javascript
// O => object
// N => notation

const pelota = {
  color: "roja",
  tam: 3,
  rebota: false,
  setRebota: function () {
    this.rebota = true;
  }
}

document.write(pelota.color);


const usuario = {
  name: "jiren",
  edad: 25,
  email: "juanda554242@gmail.com",
}

const {
  name,
  email
} = usuario;

document.write("<p class''>" + name + "</p>");
document.write("<p class''>" + email + "</p>");
const {
  a,
  b,
  c
} = {
  a: "jiren",
  b: 25,
  c: "juanda554242@gmail.com",
}

document.write("<p class''>" + a + "</p>");
document.write("<p class''>" + b + "</p>");
document.write("<p class''>" + c + "</p>");