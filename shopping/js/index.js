let mi_Array = [
  {
    name: "Camisa",
    price: 2500,
    image: "./img/1.webp",
    color: "Blanca",
    desc: "camisa blanca",
  },
  {
    name: "Camisa",
    price: 9500,
    image: "./img/2.jpeg",
    color: "azul",
    desc: "camisa blanca",
  },
  {
    name: "Pantalon",
    price: 5500,
    image: "./img/3.jpeg",
    color: "Azul",
    desc: "camisa blanca",
  },
  {
    name: "Jean",
    price: 7500,
    image: "./img/4.jpeg",
    color: "Negro",
    desc: "camisa blanca",
  },
];

let carrito_compras = [];

const getalldata = async () => {
  let info = await fetch("https://fakestoreapi.com/products/");
  let data = await info.json();
  return data;
};

const addToCarrito = (i) => {
  $(`#carrito_${i}`).click(function () {
    carrito_compras.push(getDataById(i));

    carrito_compras.map((info, i) => {
      createCarrito(i, info);
    });
  });
};
const createElement = (id, data = {}) => {
  let newDiv = $("#card").clone();
  newDiv = newDiv.attr("id", id).addClass("newDiv");
  newDiv.find("h5").text(data.name);
  newDiv.find("p").text(data.desc);
  newDiv.find(".text-info").text(data.color);
  newDiv.find(".price").text(data.price);
  newDiv.find("a").attr("id", `carrito_${id}`);
  newDiv.find("img").attr("src", data.image);
  newDiv.show();
  $(".cards").append(newDiv);
  addToCarrito(id);
};

const createCarrito = (id, data = {}) => {
  let newCarrito = $("#cardcarrito").clone();
  newCarrito = newCarrito.attr("id", id);
  newCarrito.find("h5").text(data.name);
  newCarrito.find("p").text(data.desc);
  newCarrito.find(".text-info").text(data.color);
  newCarrito.find(".price").text(data.price);
  newCarrito.find("a").attr("id", `carrito_${id}`);
  newCarrito.find("img").attr("src", data.image);
  newCarrito.show();
  $(".carrito_de_compras").append(newCarrito);
};
mi_Array.map((art, i) => {
  createElement(i, art);
});

const getDataById = (id) => {
  return mi_Array.at(id);
};
