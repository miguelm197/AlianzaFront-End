/*
palo: oro, basto, espada, copa
muestra: 2,4,5,11,10,12*
comunes: 3,2,1,12,11,10,7,6,5,4
matas: 1 espada, 1 basto, 7 espada, 7 oro

3 cartas de la muestra = Flor
2 cartas de la muestra = Flor
1 carta de la muestra + 2 del mismo palo = Flor
3 cartas del mismo palo = Flor

*/


function truco(){

var expectro = ["1o",""]
var num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var indice = Math.floor(Math.random()*num.length);
var number = num[indice];
num.splice(indice, 1);

alert(num.splice(indice, 1));

carta1a = {
    palo: "oro",
    numero: 5,
}
carta2a = {
    palo: "oro",
    numero: 11,
}
carta3a = {
    palo: "oro",
    numero: 1,
}
carta1b = {
    palo: "espada",
    numero: 7,
}
carta2b = {
    palo: "basto",
    numero: 12,
}
carta3b = {
    palo: "basto",
    numero: 5,
}

carta_muestra = {
    palo: "oro",
    numero: 11,
}

manoJ1 = [carta1a, carta2a, carta3a];
manoJ2 = [carta1b, carta2b, carta3b];

juego = {
    j1: manoJ1,
    j2: manoJ2,
    muestra: carta_muestra,
}

alert(juego.j1.manoJ1.carta1a.palo);


if (carta1a.palo == "oro"){
    valorCarta = 10000 + carta1.numero;
}else if (carta1a.palo == "basto") {
    valorCarta = 1000 + carta1.numero;
}else if (carta1a.palo == "espada") {
    valorCarta = 100 + carta1.numero;
}else if (carta1a.palo == "copa") {
    valorCarta = 10 + carta1.numero;
}


if (carta_muestra.palo == carta1a.palo && carta_muestra.palo == carta1a.palo && carta_muestra.palo == carta2a.palo && carta_muestra.palo == carta3a.palo) {
    console.log("Flor tipo 1");
}else{
    (carta_muestra.palo == carta1a.palo || carta_muestra.palo == carta1a.palo || carta_muestra.palo == carta2a.palo || carta_muestra.palo == carta3a.palo) 
}


}
