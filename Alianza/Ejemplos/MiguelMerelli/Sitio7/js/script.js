
var Ganadas = 0;
var Perdidas = 0;



function jugar(opcion) {
    // 1 -> piedra
    // 2 -> papel
    // 3 -> tijera

    var humano = opcion;
    var maquina = mano();

    $("#resultado").text(resultado(opcion));
    $("#humano").text(humano);
    $("#maquina").text(maquina);

    



}

function resultado() {
    var random = Math.floor((Math.random() * 2) + 1);

    var jugada = "";

    if (random == 1) {
        jugada = "Ganaste";
        Ganadas = Ganadas + 1;
    } else {
        jugada = "Perdiste";
        Perdidas = Perdidas + 1;
    }


    return (jugada);
}

function mano() {
    var random = Math.floor((Math.random() * 3) + 1);
    if (random == 1) {
        return "piedra";
    } else if (random == 2) {
        return "papel";
    } else {
        return "tijera";
    }
}

