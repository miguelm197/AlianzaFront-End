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

var cantJugador = $("#cantJugador").val();

var cartasDenom = ["01o","02o","03o","04o","05o","06o","07o","10o","11o","12o","01e","02e","03e","04e","05e","06e","07e","10e","11e","12e","01b","02b","03b","04b","05b","06b","07b","10b","11b","12b","01c","02c","03c","04c","05c","06c","07c","10c","11c","12c"]
var cartasLugar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];

// Primer carta es la muestra
var indice = Math.floor(Math.random()*cartasLugar.length);
//console.log(indice);
var aFlor = cartasDenom[indice];
//var strMuestra = cartasDenom[indice][2];

//console.log(aFlor);
//console.log(indice);

// Elimina la carta de la muestra
cartasDenom.splice(indice, 1);
cartasLugar.splice(indice, 1);
//console.log(cartasDenom);
//console.log(cartasLugar);

var cartasJuego = [];
cartasJuego.push(cartasDenom[indice]);
cartaMuestra.src = cartasDenom[indice]+".jpg";

//var strMuestra1 = cartasJuego[0][2] + cartasJuego[0][2] +cartasJuego[0][2]   // Carta 0 , cuando es flor con 3 de la muestra
//var strMuestra2 = 2 + cartasJuego[0][2];  // Cuando es flor con 2 de la muestra
//console.log(strMuestra1);
//console.log(strMuestra2);

var aCarta = "";
var aBusca = -1;

for (var i = 0; i<(cantJugador*3); i++){

    indice = Math.floor(Math.random()*cartasLugar.length);
    cartasJuego.push(cartasDenom[indice]); // Agrega carta al juego
    cartasDenom.splice(indice, 1);  // Elimina del mazo
    cartasLugar.splice(indice, 1);   // Elimina del mazo

    

}

//console.log(cartasJuego);
carta1a.src = cartasJuego[1]+".jpg";
carta1b.src = cartasJuego[2]+".jpg";
carta1c.src = cartasJuego[3]+".jpg";
carta2a.src = cartasJuego[4]+".jpg";
carta2b.src = cartasJuego[5]+".jpg";
carta2c.src = cartasJuego[6]+".jpg";
carta3a.src = cartasJuego[7]+".jpg";
carta3b.src = cartasJuego[8]+".jpg";
carta3c.src = cartasJuego[9]+".jpg";
carta4a.src = cartasJuego[10]+".jpg";
carta4b.src = cartasJuego[11]+".jpg";
carta4c.src = cartasJuego[12]+".jpg";
//var strJugador1 = cartasJuego[1][2] + cartasJuego[2][2] +cartasJuego[3][2]  // Cartas 1,2,3
//var strJugador2 = cartasJuego[4][2] + cartasJuego[5][2] +cartasJuego[6][2]   // Cartas 4,5,6
var strJugador = "";

var v_valor = 0;
var eliminaC = -1;
var describeFlor = "";

for (var ij=1; ij<=cantJugador; ij++){
    strJugador = cartasJuego[ij*3-2][2] + cartasJuego[ij*3-1][2] +cartasJuego[ij*3][2]
    v_valor = 0;
    describeFlor = "";
    for (var ik=(ij*3-2); ik<=(ij*3); ik++){

        if (cartasJuego[0][2] == cartasJuego[ik][2]){
                v_valor = v_valor + 10;
        }
    }
    
    if (v_valor == 0){
        switch (strJugador){   // 3 del mismo palo distinto a la muestra, toma valor 29. Escrito así para abreviar codigo, con if es mas largo
            case "ooo":
                v_valor = 29;
                break;
            case "eee":
                v_valor = 29;
                break;
            case "bbb":
                v_valor = 29;
                break;
            case "ccc":
                v_valor = 29;
                break;
        }
    }else if (v_valor==10){            // 1 de la muestra + 2 del mismo palo, toma valor 15
        //console.log(strJugador[1]);
        eliminaC = strJugador.indexOf(cartasJuego[0][2]);
        if (eliminaC==0){
            if (strJugador[1]==strJugador[2]){
                v_valor = v_valor + 5;
            }
        }else if (eliminaC==1){
            if (strJugador[0]==strJugador[2]){
                v_valor = v_valor + 5;
            }
        }else if (eliminaC==2){
            if (strJugador[0]==strJugador[1]){
                v_valor = v_valor + 5;
            }
        }
    }

    if (v_valor==0){
        describeFlor = "No tenés Flor";
    }else if (v_valor==10){
        describeFlor = "No tenés Flor";
    }else if (v_valor==30){
        describeFlor = "Flor: 3 de la muestra !!!";
    }else if (v_valor==15){
        describeFlor = "Flor: 1 de la muestra y 2 del mismo palo";
    }else if (v_valor==20){
        describeFlor = "Flor: 2 de la muestra";
    }else if (v_valor==29){
        describeFlor = "Flor: 3 del mismo palo";
    }

    if (ij==1){
        $("#infoJugador1").show();
        $("#infoJugador1").text(describeFlor);
    }else if (ij==2){
        $("#infoJugador2").show();
        $("#infoJugador2").text(describeFlor);
    }else if (ij==3){
        $("#infoJugador3").show();
        $("#infoJugador3").text(describeFlor);
    }else if (ij==4){
        $("#infoJugador4").show();
        $("#infoJugador4").text(describeFlor);
    }

}



//console.log(cartasDenom);
//console.log(cartasJuego);
//console.log(strJugador1);




}
