
var zapallo = {
    esComestible: true,
    precio: 100 }
var naranja = {
    esComestible: true,
    precio: 50 }
var banana = {
    esComestible: true,
    precio: 80 }
var agua = {
    esComestible: true,
    precio: 20 }
var pc = {
    esComestible: false,
    precio: 2200 }
var mouse = {
    esComestible: false,
    precio: 200 }

var credito = {
    nombre: "Credito",
    descuento: 0 }

var debito = {
    nombre: "Débito",
    descuento: 5 }

var ticket = {
    nombre: "Ticket",
    descuento: 0 }

var efectivo = {
    nombre: "Efectivo",
    descuento: 0 }

var cliente1 = {
    mediosDePago: [ticket, debito],
    productos: [zapallo, naranja, banana, agua]
}
var cliente2 = {
    mediosDePago: [ticket, debito],
    productos: [mouse, naranja, banana, agua]
}
var cliente3 = {
    mediosDePago: [ticket, debito],
    productos: [pc, mouse, agua]
}

var cola = [cliente1, cliente2, cliente3];
var totalMedio = [0,0,0,0];
var totalCli = 0;

/*
function sumaDia() {
    var i = 0;
    var precio = 0;
    for (i=0; i< cola.length; i++) {

        precio = cola[i].zapallo.precio;




    var total = { total: 0, totalcomestible: null }
    while (productos.length > i) {


    }





}





function pasarproductos(productos) {
    var i = 0;
    var total = { total: null, totalcomestible: null }
    while (productos.length > i) {
        if (productos[i].comestible == true) {
            total.totalcomestible += productos[i].precio;
            total.total += productos[i].precio;
        } else {
            total.total += productos[i].precio;
        }
        i++;
    }
    return total;
}
*/
