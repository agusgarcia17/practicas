// Creo un objeto producto vacio para guardar la información
var producto = {};

var carritoStorage = localStorage.getItem("carrito");

if(carritoStorage===null){
	var carrito = [];
} else {
	carrito = JSON.parse(carritoStorage)
}

$('.add').on('click',function(e){

	let hermanos = $(this).siblings();

	// Recupero la información del HTML

	producto.url = hermanos[0].src;
	producto.descripcion = hermanos[1].innerText;
	producto.precio = hermanos[2].innerText;
	producto.stock = hermanos[3].innerText;

	if(producto.stock >= hermanos[4].value){
	
	// Creo un objeto item, para agregar luego al carrito

	var item ={
		cantidad : hermanos[3].value,
		producto : producto
	}
		
	console.log(item);
	carrito.push(item);

	let jsonCarrito = {'productos': carrito};
	localStorage.setItem('carrito', JSON.stringify(jsonCarrito))
} else {
	alert("No se agrego el producto, no hay stock suficiente")
}
});


