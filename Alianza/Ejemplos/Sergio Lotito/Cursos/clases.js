
function Curso(id,nombre,salon,fechaInicio,fechaFin,materias){
    this.id=id;
    this.nombre=nombre;
    this.salon=salon;
    this.fechaInicio=fechaInicio;
    this.fechaFin=fechaFin;
    this.materias=materias;
}

function Materia(id,nombre,horario,profesores){
    this.id=id;
    this.nombre=nombre;
    this.horario=horario;
    this.profesores=profesores;
}

function Estudiante(id,nombre,apellido,ci,fechaNac,celular){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.ci=ci;
    this.fechaNac=fechaNac;
    this.celular=celular;
}

function Profesor(id,nombre,apellido,ci,profesion,celular,mail){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.ci=ci;
    this.profesion=profesion;
    this.cellular=celular;
    this.mail=mail;
}

function Inscripcion(nota,fechaInscripcion,estudiante,curso){
    this.nota=nota;
    this.fechaInscripcion=fechaInscripcion;
    this.estudiante=estudiante;
    this.curso=curso;
}

var cursos= [];
var estudiantes= [];
var profesores = [];
var materias = [];
var inscripciones = [];

var alianza = [cursos, estudiantes, profesores, materias, inscripciones];
console.log(alianza);




var fs = require('fs');  // filesystem

const util = require('util');
/*

function Estudiante(nombre,apellido,ci,fechaNac,celular,gustos,curso){
    this.nombre=nombre;
    this.apellido=apellido;
    this.ci=ci;
    this.fechaNac=fechaNac;
    this.celular=celular;
    this.gustos=gustos;
    this.curso=curso;
}
var estudiante = new Estudiante("Luis","Gonzalez","3071893-5","04/03/1985","099913495","programación","Desarrollador Front-End");

//console.log(util.inspect(estudiante,{showHidden:false,depth:null}));
console.log(util.inspect(estudiante,false,null));



//console.log('Hola soy un ejemplo')
fs.readFile('estudiantes.csv', 'utf-8', leerDatos);


function leerDatos(error, data) {
    if (error)
        return console.log(error);
        
    console.log('data:', data);
    console.log('error:', error);
}
*/
