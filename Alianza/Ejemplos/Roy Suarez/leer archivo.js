function Estudiante(nombre,apellido, ci, fechaNac, mail, celular, gustos){
    this.nombre = nombre;
    this.apellido = apellido;
    this.ci = ci;
    this.fechaNac = fechaNac;
    this.mail = mail;
    this.celular = celular;
    this.gustos = gustos;
}

var estudiante1 = new Estudiante("Jesse", "Pinkman","5123119-4", "27/08/79", "jessepink79@hotmail.com", 091432543,"Videojuegos");
var estudiante2 = new Estudiante("Walter Jr.", "White","5923319-1", "10/06/85", "wjw85@hotmail.com", 0919123655,"Salir con amigos");
var arrayestudiantes = [estudiante1, estudiante2];

const util = require('util');
console.log(util.inspect(estudiante1, {showHidden:false, depth:null}));