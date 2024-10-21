let productos = [];

fetch("../api/productos.json")
  .then(response => response.json())
  .then(data => {
    productos = data;
    mostrarProductos(productos);
    mostrarContadorProductos(productos);
  })

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

const mostrarProductos = (productosElegidos) => {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
      </div>
    `;

    contenedorProductos.append(div);
  })

}

const mostrarContadorProductos = (productos) => {
  botonesCategorias.forEach(boton => {
    const categoriaProductos = productos.filter(producto => producto.categoria === boton.id || boton.id === "todos");
    boton.innerText = boton.innerText + ` (${categoriaProductos.length})`;
  })
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", e => {
    const botonActual = e.currentTarget;

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    botonActual.classList.add("active");

    if (botonActual.id != "todos") {
      tituloPrincipal.innerText = capitalize(botonActual.id);
      const productosBoton = filtrarProductos(productos, botonActual.id)
      mostrarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      mostrarProductos(productos);
    }

  })
});
