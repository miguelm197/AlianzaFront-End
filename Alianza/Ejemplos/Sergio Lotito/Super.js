
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

var sergio = {
    mediosDePago: [ticket, debito],
    productos: [zapallo, naranja, banana, agua]
}
var juan = {
    mediosDePago: [ticket, debito],
    productos: [mouse, naranja, banana, agua]
}
var victoria = {
    mediosDePago: [ticket, debito],
    productos: [pc, mouse, agua]
}

var cola = [sergio, juan, victoria];
var totalMedio = [0,0,0,0];
var montoCli = 0;
var montoComesCli = 0;

function mostrar(){

    console.log(cola);
    console.log(totalMedio);
    //console.log(cola[2].productos[2].precio);
   

}


function sumaDia() {
    
    

    for (var nCli=0; nCli < cola.length; nCli++) {

        for (var nPro=0; nPro < cola[nCli].productos.length; nPro++) {
        
            montoCli = montoCli + cola[nCli].productos[nPro].precio;
            montoComesCli = montoComesCli + cola[nCli].productos[nPro];
            if (cola[nCli].productos[nPro].esComestible) {
                montoComesCli = montoComesCli + cola[nCli].productos[nPro].precio;
            }

        }
    }
    console.log(montoCli);
    console.log(montoComesCli);

}


