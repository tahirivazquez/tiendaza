const filtrarProductos = require('../js/productos');

// Escribir los tests debajo

//Clase de equivalencia
test('devolver todos los productos si todos pertenecen a la categoria especificada', () => {
    const productos = [
        { nombre: "Producto 1", categoria: "Camperas" },
        { nombre: "Producto 2", categoria: "Camperas" }
    ];

    const productosFiltrados = filtrarProductos(productos, "Camperas");

    expect(productosFiltrados).toEqual(productos);
    expect(productosFiltrados.length).toBe(2);
});

//Clase de equivalencia
test('devolver array vacio si la categoria no existe', () => {
    const productos = [
        { nombre: "Producto 1", categoria: "Camperas" },
        { nombre: "Producto 2", categoria: "Camperas" }
    ];
    const productosFiltrados = filtrarProductos(productos, "Gorros");

    expect(productosFiltrados).toEqual([]);
    expect(productosFiltrados.length).toBe(0);
});

//Clase de equivalencia
test('devolver solo los productos de la categoria especificada', () => {
    const productos = [
        { nombre: "Producto 1", categoria: "Camperas" },
        { nombre: "Producto 2", categoria: "Camperas" },
        { nombre: "Producto 3", categoria: "Remeras" }
    ];

    const productosEsperados = [
        { nombre: "Producto 3", categoria: "Remeras" }
    ];

    const productosFiltrados = filtrarProductos(productos, "Remeras");

    expect(productosFiltrados).toEqual(productosEsperados);
    expect(productosFiltrados.length).toBe(1);
});

//Caso de borde
test('devolver array vacio si el array de productos esta vacio', () => {
    const productos = [];

    const productosFiltrados = filtrarProductos(productos, "Camperas");

    expect(productosFiltrados).toEqual([]);
    expect(productosFiltrados.length).toBe(0);
});

//Clase de equivalencia
test('ignorar productos sin la propiedad categoria', () => {
    const productos = [
        { nombre: "Producto 1", categoria: "Camperas" },
        { nombre: "Producto 2" }
    ];

    const productosEsperados = [
        { nombre: "Producto 1", categoria: "Camperas" }
    ];

    const productosFiltrados = filtrarProductos(productos, "Camperas");

    expect(productosFiltrados).toEqual(productosEsperados);
    expect(productosFiltrados.length).toBe(1);
});

