var clientes = [
    {
        metodo1: "efectivo", metodo2: "debito",
        productos: [
            { precio: 25, comestible: false },
            { precio: 30, comestible: true },
            { precio: 80, comestible: false },
            { precio: 40, comestible: true }
        ]
    },
    {
        metodo1: "tickets", metodo2: "credito",
        productos: [
            { precio: 25, comestible: false },
            { precio: 30, comestible: true },
            { precio: 80, comestible: false },
            { precio: 40, comestible: true },
            { precio: 40, comestible: false },
            { precio: 20, comestible: true }
        ]
    },
    {
        metodo1: "debito", metodo2: "efectivo",
        productos: [
            { precio: 25, comestible: false },
            { precio: 30, comestible: true },
            { precio: 80, comestible: false },
            { precio: 40, comestible: true },
            { precio: 40, comestible: false }
        ]
    },
    {
        metodo1: "credito", metodo2: "efectivo",
        productos: [
            { precio: 50, comestible: false },
            { precio: 30, comestible: true },
            { precio: 80, comestible: false },
            { precio: 40, comestible: true },
            { precio: 40, comestible: false }
        ]
    },
];
function pasarproductos(productos) {
    var i = 0;
    var total = { total: null, totalcomestible: null }
    while (productos.length > i) {
        if (productos[i].comestible == true) {
            total.totalcomestible += productos[i].precio;
            total.total += productos[i].precio;
        } else {
            total.total += productos[i].precio;
        }
        i++;
    }
    return total;
}
function cobrar(total_carito, clientes, caja) {
    caja.cant_clientes++;
    switch (true) {
        case clientes.metodo1 == "debito":
            caja.total_debito += total_carito.total - ((total_carito.total * 5) / 100)
            break;
        case clientes.metodo1 == "credito":
            caja.total_credito += total_carito.total;
            break;
        case clientes.metodo1 == "efectivo":
            caja.total_efectivo += total_carito.total;
            break;
        case clientes.metodo1 == "tickets":
            caja.total_tickets += total_carito.totalcomestible;
            total_carito.total -= total_carito.totalcomestible;
            if (total_carito.total != 0) {
                switch (true) {
                    case clientes.metodo2 == "credito":
                        caja.total_credito += total_carito.total;
                        break;
                    case clientes.metodo2 == "debito":
                        caja.total_debito = total_carito.total - ((total_carito.total * 5) / 100)
                        break;
                    case clientes.metodo2 == "efectivo":
                        caja.total_efectivo += total_carito.total;
                        break;
                }
            }
            break;
    }
}
function procesar_cliente(clientes) {
    var i = 0;
    var caja = {
        cant_clientes: 0,
        total_debito: 0,
        total_credito: 0,
        total_tickets: 0,
        total_efectivo: 0,
    }
    while (clientes.length > i) {
        var total_carito = pasarproductos(clientes[i].productos);
        console.log("Su total es: ", total_carito.total, "Puede pagar con tickets :", total_carito.totalcomestible);
        cobrar(total_carito, clientes[i], caja);
        i++;
    }
    return caja;
}
var resultado = procesar_cliente(clientes);
console.log("Pasaron:", resultado.cant_clientes, "clientes");
console.log("Credito:", resultado.total_credito);
console.log("Debito:", resultado.total_debito);
console.log("Efectivo:", resultado.total_efectivo);
console.log("Tickets:", resultado.total_tickets);