function introducir() {


    var alumnos = new Array();
    var notas = new Array();
    var numAlumnos = 3;

    var alumnosYNotas = "";

    var x = 0;

    while (x < numAlumnos) {
        alumnos[x] = prompt("introduce el nombre del alumno");
        notas[x] = prompt("introduce la nota de" + alumnos[x]);

        alumnosYNotas = alumnosYNotas + alumnos[x] + "-" + notas[x] + "<br>";

    }

    document.getElementById('div').innerHTML = alumnosYNotas;

}