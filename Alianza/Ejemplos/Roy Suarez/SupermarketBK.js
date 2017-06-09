
var montos = [0,0,0,0];
var montoCli= 0;
var harina= { esComestible: true, precio: 40 };
var azucar= { esComestible: true, precio:35};
var leche= { esComestible: true, precio:23};
var huevo= { esComestible: true, precio:3};
var spinner= { esComestible: false, precio:600};
var lapiz= { esComestible: false, precio:19};
var credito = { nombre: "Credito", descuento: 0};
var debito = { nombre: "Debito", descuento: 5};
var ticket;
var efectivo;
var Sergio= {mediosdePago:[ticket,debito],productos: [harina,azucar,leche,huevo]};
var Juan= {mediosdePago:[ticket,debito,efectivo],productos: [harina,spinner,leche]};
var Victoria= {mediosdePago:[credito,debito],productos: [lapiz,spinner,huevo]};
var cola=[Sergio,Juan,Victoria];

console.log(cola);