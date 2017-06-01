var productos = [

    producto0 = {},
    producto1 = {
        id: 1,
        nombre: "Empanadas",
        preDesc: "CARNE, POLLO O JAMON Y QUESO",
        desc: "Una empanada es una fina masa de pan, masa quebrada u hojaldre rellena con una preparación salada o dul ce y " +
        "cocida al horno o frita. El relleno puede incluir carnes rojas o blancas, pescado, verduras o fruta.",
        precio: 45,
        stock: 200,
        rutaImg: "img/1.jpg"
    },

    producto2 = {
        id: 2,
        nombre: "Pan integral",
        preDesc: "CON HARINA 0000000",
        desc: "El pan integral, también conocido como pan moreno o pan marrón, está compuesto de harina no refinada (posee más salvado), " +
        "sal, agua y levadura activa. Se denomina integral al pan que posee una gran cantidad de fibra dietética.",
        precio: 23,
        stock: 200,
        rutaImg: "img/2.jpg"
    },

    producto3 = {
        id: 3,
        nombre: "Galletitas con chispas",
        preDesc: "CON CHOCOLATE GAROTO",
        desc: "Una galleta con chispas de chocolate es una galleta que se originó en los Estados Unidos con chispas de chocolate como ingrediente " +
        "distintivo. La receta tradicional combina una masa a base de mantequilla y azúcar moreno o blanco con chispas de chocolate semi-dulces.",
        precio: 8,
        stock: 200,
        rutaImg: "img/3.jpg"
    },

    producto4 = {
        id: 4,
        nombre: "Medialunas",
        preDesc: "COMUNES O RELLENAS DE QUESO",
        desc: "La medialuna es una pieza de bollería hojaldrada de origen austriaco, hecha con masa de hojaldre, levadura, mantequilla o grasa vacuna " +
        "(en ocasiones se sustituye por margarina). Las hay dulces o saladas.",
        precio: 18,
        stock: 200,
        rutaImg: "img/4.jpg"
    }


]

var id = "";
var nombre = "";
var predesc = "";
var desc = "";
var img = "";
var precio = "";


function cargarProductos() {


    for (var i = 1; i < productos.length; i++) {

        id = productos[i].id;
        nombre = productos[i].nombre;
        predesc = productos[i].preDesc;
        desc = productos[i].desc;
        precio = productos[i].precio;

        console.log("------------------------");
        console.log("id: " + id);
        console.log("nombre: " + nombre);
        console.log("predesc: " + predesc);
        console.log("desc: " + desc);
        console.log("------------------------");

        nuevoProducto();
    }

}

function nuevoProducto() {

    var prod = "<div class='prod col-md-3 productoGondola' id='" + id + "'>" +
        "           <img src='img/" + id + ".jpg' class='img-responsive img-rounded producto empanada' " +
        "           alt='Responsive image' data-target='.bs-example-modal-lg' data-toggle='modal' onclick='prodModal(" + id + ")'>" +
        "           <h4>" + nombre + "</h4><br>" +
        "           <h6>" + predesc + "</h6>" +
        "           <button type='button' class='btn btn-primary ' onclick='agregarAlCarrito(" + id + ")'>Agregar</button>" +
        "           <span class='precioProducto'>   $" + precio + "</span>" +
        "       </div>"

    $(".producteitors").append(prod);
}

var idModal = "";

function prodModal(id) {
    idModal = id;
    nombre = productos[id].nombre;
    predesc = productos[id].preDesc;
    desc = productos[id].desc;
    img = productos[id].rutaImg;

    $(".imagen").css("background-image", "url(" + img + ")");
    $(".tituloProd").text(nombre);
    $(".predescrip").text(predesc);
    $(".descrip").text(desc);

    try {
        var enCarrito = parseInt(document.getElementById("itemCantidad" + id).textContent);
        $("#cantidad").val(enCarrito);
    } catch (e) {
        $("#cantidad").val("");
    }
}

var lista = [];
var subtotal = 0;
var total = 0;

function agregarAlCarrito(id) {

    if (!carritoAbierto)
        abrirCarrito();

    if (lista.indexOf(id) == -1) {
        //si no existe en la lista del carrito
        lista.push(id);

        nombre = productos[id].nombre;
        precio = productos[id].precio;

        var item = "<div class='item' id='item" + id + "'>" +
            "           <div class='contenedorItem' id='contenedorItem" + id + "'>" +
            "               <div class='tituloItem'>" +
            "                   <span id='tituloItem" + id + "'>" + nombre + "</span>" +
            "               </div>" +
            "               <div class='infoItem'>" +
            "                       <span class='signoCantidad'>Cantidad: </span>" +
            "                       <span class='signoCantidad' id='itemCantidad" + id + "'>1</span>" +
            "                       <span class='signoPrecio signoPrecioA'>$</span>" +
            "                       <span class='signoPrecio' id='precioItem" + id + "'>" + precio + "</span>" +
            "               </div>" +
            "           </div>" +
            "           <div class='quitarItem' id='quitarItem" + id + "'>" +
            "               <button onclick='quitarItemCarrito(" + id + ")'>x</button>" +
            "           </div>" +
            "       </div>"

        total = total + precio;
        $(".contenedorcarrito").append(item);
        $("#totalCarrito").text(total);

    } else {
        var cantidad = parseInt(document.getElementById("itemCantidad" + id).textContent);
        var precio = productos[id].precio;
        var subt = parseInt(document.getElementById("precioItem" + id).textContent);

        cantidad = cantidad + 1;
        subtotal = cantidad * precio;
        total = total - subt + subtotal;

        $("#itemCantidad" + id).text(cantidad);
        $("#precioItem" + id).text(subtotal);
        $("#totalCarrito").text(total);

        if (cantidad > 0) {
            $("#item" + id).css("display", "block");
            $("#contenedorItem" + id).css("display", "block");
            $("#quitarItem" + id).css("display", "block");
        }
    }
}

function agregarAlCarritoVarios(tipo) {
    var enCarrito = parseInt(document.getElementById("cantidad").value);

    if (tipo == "1") {
        agregarAlCarrito(idModal);
        var cant = 0;
        if (isNaN(enCarrito)) {
            cant = 1;
        } else {
            cant = enCarrito + 1;
        }

        $("#cantidad").val(cant);
    }

    if (tipo == "-1") {
        quitarItemCarrito(idModal);
        if (enCarrito > 0) {
            enCarrito = enCarrito - 1;
            $("#cantidad").val(enCarrito);
        }
    }

    if (tipo == "0") {
        var cantidad = $("#cantidad").val();
        var precio = productos[idModal].precio;
        

        if (cantidad > 0) {
            agregarAlCarrito(idModal);
            var subt = parseInt(document.getElementById("precioItem" + idModal).textContent);
            subtotal = cantidad * precio;
            total = total - subt + subtotal;

            $("#itemCantidad" + idModal).text(cantidad);
            $("#precioItem" + idModal).text(subtotal);

        }
        if (cantidad < 1) {
            var subt = parseInt(document.getElementById("precioItem" + idModal).textContent);
            if (subt != null){
                total = total - subt + precio;
            }

            $("#itemCantidad" + idModal).text(1);
           // quitarItemCarrito(idModal);
        }
            $("#totalCarrito").text(total);
    }
    if (!carritoAbierto)
        abrirCarrito();


}

function quitarItemCarrito(id) {
    var cantidad = parseInt(document.getElementById("itemCantidad" + id).textContent);
    var subTotal = parseInt(document.getElementById("precioItem" + id).textContent);
    var precio = productos[id].precio;

    if (cantidad > 0) {
        cantidad = cantidad - 1;
        subTotal = subTotal - precio;
    }
    if (cantidad <= 0) {
        $("#item" + id).css("display", "none");
        $("#contenedorItem" + id).css("display", "none");
        $("#quitarItem" + id).css("display", "none");
    }

    $("#itemCantidad" + id).text(cantidad);
    $("#precioItem" + id).text(subTotal);
}


function calcularTotal() {

}






/*
function dadoEnClasse() {
    var menor = 0;
    var mayor = 0;
    var nombreMenor = "";
    var nombreMayor = "";

    var personas = [
        personaA = {
            nombre: "Miguel",
            apellido: "Merelli",
            nota: "6",
            edad: "20",
            altura: "175",
            peso: 70,
            nombreCompleto: function () { return (this.nombre + " " + this.apellido); }
        }
        ,
        personaB = {
            nombre: "Franco",
            apellido: "Rodrioguez",
            nota: "4",
            edad: "19",
            altura: "160",
            peso: 55,
            nombreCompleto: function () { return (this.nombre + " " + this.apellido); }
        }
    ];
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].nota < 6) {
            alert(personas[i].nombre + " Debe estudiar más");
        } else {
            alert(personas[i].nombre + " Debe estudiar menos");
        }

        if (personas[i].edad < menor) {
            menor = personas[i].edad;
            nombreMenor = personas[i].nombre;
        }
        if (personas[i].edad > mayor) {
            mayor = personas[i].edad;
            nombreMayor = personas[i].nombre;
        }





    }
    alert("El de menor edad: " + nombreMenor);
    alert("El de mayor edad: " + nombreMayor);
}

*/