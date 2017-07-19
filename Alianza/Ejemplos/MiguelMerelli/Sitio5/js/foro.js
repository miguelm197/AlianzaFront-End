$(".button-collapse").sideNav();

$(document).ready(function () {


    $.ajax({
        url: "https://randomuser.me/api/?results=50",
        dataType: "json",
        success: function (data) {


            data.results.forEach(function (element) {
                // console.log(element)
                var nombre = element["name"].first;
                var apellido = element["name"].last;
                var foto = element["picture"].medium;
                var mail = element.email;

                console.log("nombre: " + nombre);
                console.log("apellido: " + apellido);
                console.log("foto: " + foto);
                console.log("mail: " + mail);
                console.log("----------------------------------------");

                var item = ` 
                <div class="item">
                    <div class='card-image waves-effect waves-block waves-light imagen_carding'>
                        <img class="activator " src="`+ foto + `" >
                    </div>
                    <div class='card-content'>
                        <span class='card-title activator grey-text text-darken-4 nombre'>`+ nombre + `<i class='material-icons right'>more_vert</i></span>
                        <p>`+ mail + `</p>
                    </div>
                    <div class="linea"></div>
                </div>`

                $(".container").append(item);
            }, this);


        }
    });

});