fs = require('fs');     

console.log('Hola soy un ejemplo')
fs.readFile('estudiantes.txt', 'utf-8', leerDatos);

function Profesor(nombre,apellido, ci, fechaNac, mail, celular, profesion){
            this.nombre = nombre;
            this.apellido = apellido;
            this.ci = ci;
            this.fechaNac = fechaNac;
            this.mail = mail;
            this.celular = celular;
            this.profesion = profesion;
}

function Estudiante(nombre,apellido, ci, fechaNac, mail, celular, gustos){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.fechaNac = fechaNac;
        this.mail = mail;
        this.celular = celular;
        this.gustos = gustos;
}

function Materia(nombre, horario, profesor){
        this.nombre = nombre;
        this.horario = horario;
        this.profesor = profesor;
}

function Curso(nombre, salon, fechaIni, fechaFin, materias){
        this.nombre = nombre;
        this.salon = salon;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.materias = materias;
}

function Inscripcion(estudiante, curso, nota, fechaIns){
        this.estudiante = estudiante;
        this.curso = curso;
        this.nota = nota;
        this.fechaIns = fechaIns;
}

var colEstudiantes=[];
var colInscripciones=[];
var colCursos=[];
var colMaterias=[];
var colProfesores=[];
var alianza= [];

var roy = new Estudiante("Roy", "Pilow","5123119-4", "27/01/79", "jessepink79@hotmail.com", 0914234543,"Videojuegos");
colEstudiantes.push(roy);
var juan = new Estudiante("Juan", "Rakan","5453419-4", "27/02/79", "jessepink79@hotmail.com", 091434543,"Video");
colEstudiantes.push(juan);
var jhordy = new Estudiante("Jhordy", "Morguris","5121519-4", "27/03/79", "jessepink79@hotmail.com", 091142543,"Videojuegos");
colEstudiantes.push(jhordy);
var sergio = new Estudiante("Sergio", "Kreler","5123099-4", "27/04/79", "jessepink79@hotmail.com", 091432543,"Videojuegos");
colEstudiantes.push(sergio);
var manuel = new Estudiante("Quentin", "Coldwaters","8543119-4", "27/05/79", "jessepink79@hotmail.com", 091658643,"Videojuegos");
colEstudiantes.push(manuel);

var joaquin = new Profesor("Joaquin", "Rodriguez","1231231-0", "09/09/88", "jrodriguez@gmail.com", 097123876, "Front End");
colProfesores.push(joaquin);
var mauricio = new Profesor("Mauricio", "D´Ambrosio", "5430594-2","08/04/85", "mdambrosio@gmail.com", 094543786, "Back End");
colProfesores.push(mauricio);

var fundamentos = new Materia("Fundamentos de Programación","Mar y Vier de 18:30 a 21:30", mauricio);
colMaterias.push(fundamentos);

var frontend = new Curso("Front-End","301","20/04/17", "18/12/17", colMaterias);
colCursos.push(frontend);

var inscripto = new Inscripcion(roy, fundamentos,"7", "20/03/17");
colInscripciones.push(inscripto);

var alianza = [colEstudiantes, colInscripciones, colCursos, colMaterias, colProfesores];

const util = require('util');
console.log(util.inspect(alianza, {showHidden:false, depth:null}));

function leerDatos(error, data) {
    if (error)
        return console.log(error);
        
    console.log('data:', data);
    console.log('error:', error);
}