

$(document).ready(function () {

    $(".nav").html(" " +
        "<nav class='nav navbar-default navbar-fixed-top'>" +
        "<div class='container'>" +
        "<ul class='nav nav-tabs nav-justified'>" +
        "<li><a class='btn' href='index.html'>Inicio</a></li>" +
        "<li><a class='btn' href='somos.html'>Quiénes somos</a></li>" +
        " <li><a class='btn' href='vendemos.html'>Qué vendemos?</a></li>" +
        "  <li><a class='btn' href='contacto.html'>Contacto</a></li>" +
        " </ul>" +
        "</div>" +
        "</nav>"
    );

    cargarProductos();
});





var carritoAbierto = false;

function abrirCarrito() {
    if (carritoAbierto) {
        $(".cerrarCarrito").animate({ top: "5px" }, 150, function () {
            $(".contenedorGral").animate({ width: "100%" }, 150);
            $(".carrito").animate({ left: "100%" }, 150);
            $(".cerrarCarrito").animate({ left: "-55px" }, 150);
        });

        carritoAbierto = false;
    } else {
        var altura = $(window).height() - 100;

        $(".carrito").animate({ left: "80%" }, 150);
        $(".contenedorGral").animate({ width: "80%" }, 150);
        $(".cerrarCarrito").animate({ left: "-20px" }, 150, function () {
            $(".cerrarCarrito").animate({ top: altura }, 150);
        });
        carritoAbierto = true;
    }
}

node();
function node() {

    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('comando> ');
    rl.prompt();
    rl.on('line', function (line) {
        //    console.log('ejecute funcion')
        if (line == "init") {
            console.log('... Iniciando máquina ...')
        } else if (line == 'hola') {
            console.log("maquina dice: hola humano")
        } else if (line == 'adios') {
            console.log("maquina dice: adios humano")
        } else if (line == 'comandos') {
            console.log("-init\n-hola\n-adios\n-comandos\n-exit")
        } else if (line == 'exit') {
            rl.close();
        } else
            console.log("Comando incorrecto...")

        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });
}









