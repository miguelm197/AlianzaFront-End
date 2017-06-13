$ ( document).ready(function() {
    $("#check").hide()
    //$("#foto1").show()
    //$("#foto2").hide()
});

function completarNombre(){
    var nombre = $("#inputName").val();
    console.log(nombre);
    $('#name').text(nombre);
    $('titulo').text(nombre)
}
    function verificarContrasena(){
        var clave1= $("#primera_clave").val();
        var clave2 = $("#segunda_clave").val();
        if (clave1 != clave2) {
            $("#check").hide()
        }else{
            $("#check").show()
             }

    function cambiarImg(){
        var image1=$("#foto1").val();
        var image2=$("#foto2").val()
            $("#foto1").hide()

        }

    //aca hay que llamar al elemento img por su ID Foto1 (#) y cambiarle el atributo "src" por la nueva imagen