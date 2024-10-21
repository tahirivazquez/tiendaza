const filtrarProductos = function (productosArray, categoria) {
    let resultado = [];
  
    for (let i = 0; i < productosArray.length; i++) {
      if (productosArray[i].categoria === categoria) {
        resultado.push(productosArray[i]);
      }
    }
  
    return resultado;
  }
  
  module.exports = filtrarProductos;
  