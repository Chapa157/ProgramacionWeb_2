let carrito = [];


const formulario = document.getElementById('formulario');
const carritoDiv = document.getElementById('carrito');
const totalSpan = document.getElementById('total');


function agregarArticulo(nombre, precio, cantidad) {
    const articulo = {
        nombre: nombre,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad)
    };
    carrito.push(articulo);
    mostrarCarrito();
}

function mostrarCarrito() {
    carritoDiv.innerHTML = "";

    carrito.forEach((articulo, index) => {
        const articuloHTML = document.createElement('p');
        articuloHTML.innerText = `${index + 1}. ${articulo.nombre} - Precio: $${articulo.precio} - Cantidad: ${articulo.cantidad}`;
        carritoDiv.appendChild(articuloHTML);
    });

    calcularTotal();
}


function calcularTotal() {
    let total = 0;
    carrito.forEach(articulo => {
        total += articulo.precio * articulo.cantidad;
    });
    totalSpan.innerText = total.toFixed(2); // Actualizar el total en el HTML
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    agregarArticulo(nombre, precio, cantidad);

    formulario.reset();
});
