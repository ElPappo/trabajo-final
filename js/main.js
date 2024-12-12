let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");
let compras = [] //arreglo para almacenar compra realizada
let total = 0;

const productos = [
    {nombre: "Golden Strato", precio: 2600, stock: 5, image: `../imagen/Golden.jpeg`},
    {nombre: "Honey", precio: 2800, stock: 5, image: `../imagen/Golden.jpeg` },
    {nombre: "Red Smith", precio: 2800, stock: 5, image: `../imagen/RED.jpeg`},
    {nombre: "Stout 335", precio: 3100, stock: 5, image: `../imagen/STOUT.jpeg`},
    {nombre: "Jack IPA", precio: 4500, stock: 5, image: `../imagen/IPA.jpeg`}
];
function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML +=
            `  <li class="Tarjeta">
    
                <img src="${arrayProductos[i].image}" alt="${arrayProductos[i].nombre} " >
                <p>Producto: ${arrayProductos[i].nombre} - Precio: $${arrayProductos[i].precio} </p>
                <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly></input>
                <input type="number" id="cantidad${i}" placeholder="Ingrese cantidad">
                <button id="btn${i}">Agregar al carrito</button>
            </li>`;
    } 

    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            Comprar(i, arrayProductos);
        });
    }
}

function Comprar(index, arrayProductos) {
    let stockElement = document.getElementById(`stock${index}`);
    let cantidadElement = document.getElementById(`cantidad${index}`);
    let stock = parseInt(stockElement.value, 10);
    let cantidad = parseInt(cantidadElement.value, 10);
    let precio = arrayProductos[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        alert("Compra exitosa. Total $" + total);
        totalText.innerHTML = `Total: $${total}`;
        stockElement.value = stock - cantidad; // Actualiza el stock después de la compra
        //se guarda la compra en el arreglo
        compras.push ({
            nombre: nombre, 
            cantidad: cantidad, 
            precio: precio, 
            totalCompra: cantidad*precio
        });
        totalText.innerHTML = `Total: $${total}`;

    } else {
        alert("Compra inválida. La cantidad debe ser mayor a 0 y menor o igual al stock.");
    }
}



// Llamar a la función para pintar los productos al cargar la página
pintarProductos(productos);
