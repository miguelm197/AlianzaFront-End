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
            $(".cerrarCarrito").animate({ left: "-35px" }, 150);
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












