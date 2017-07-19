$(document).ready(function () {
consulta();
});



function consulta() {
    var idusr = $("#usuario").val();
    $.ajax({
        url: 'http://smarttravel.io/obtener_usuarios.php?admin=' + idusr,
        type: "GET",
        dataType: "json",
        success: function (response) {
            $(".datos").html("");
            response.forEach(function (element) {




                // console.log(element);
                var id = element["id"];
                var email = element["email"];
                var clave = element["clave"];
                var sexo = element["sexo"];
                var gay = element["pago"];
                var usuario = element["admin"];

                var fila = ` 
                        <tr>
                            <th scope="row">`+ id + `</th>
                            <td>`+ email + `</td>
                            <td>`+ clave + `</td>
                            <td>`+ sexo + `</td>
                            <td>`+ gay + `</td>
                            <td>`+ usuario + `</td>
                        </tr>
                `
                console.log(fila)

                $(".datos").append(fila);

                console.log("id: " + id);
                console.log("email: " + email);
                console.log("clave: " + clave);
                console.log("sexo: " + sexo);
                console.log("gay: " + gay);
                console.log("usuario:" + usuario);
                console.log("--------------------------")
            }, this);
        }
    });
}


