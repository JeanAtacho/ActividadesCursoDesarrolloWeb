function notas1() {
    var notas = new Array();
    var alumnos = new Array();
    var numAlumnos = 5;
    var x = 0;


    while (x < numAlumnos) {

            nombre[x] = prompt("introduce el nombre del alumno" + x)

            notas[x] = prompt("introduce la nota" + alumnos[x])

            alert(notas);

    }

    var totalNotas = 0;

    for (var x = 0; x < numTotalAlumnos; x++) {

        nombres[x] = prompt("Introduce el nombre del alumno " + x)

        notas[x] = parseInt(prompt("Introduce la nota de " + nombres[x]))

        totalNotas = totalNotas + notas[x];

        }

        alert("la suma de todas las notas es de " + totalNotas);

    // bucle for que se ejecuta 5 veces
    // var nmAleatorio = parseInt((Math.random() * 100) + 1);
    // console.log(numAleatorio);

}

   

function notas2() {
    var nombres = new Array();
    var notas = new Array();
    var totalNotas = 0;

    for (var x = 0; x < 5; x++) {

        nombres[x] = prompt("Introduce el nombre del alumno " + x)

        notas[x] = parseInt(prompt("Introduce la nota de " + nombres[x]))

        totalNotas = totalNotas + notas[x];

    }

    alert(totalNotas);

    // bucle for que se ejecuta 5 veces
    // var nmAleatorio = parseInt((Math.random() * 100) + 1);
    // console.log(numAleatorio);

}



    


function diasDeLaSemana() {
    var diasSemanas = new Array();
    var numDias= 7;
    var x = 0;
    
        while (x < numDias) {
    
            diasSemanas[x] = prompt("Dime los dias " + x)
    
        }


    alert(diasSemanas)
    alert(diasSemanas[0])

}
    
