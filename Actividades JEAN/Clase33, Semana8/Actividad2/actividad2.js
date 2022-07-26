function calcular() {


    var diasSemana = new Array();
    var temperaturas = new Array();
    var media = 0;

    diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    var fechaInicio = document.getElementById('date1').value;
    var fechaFin = document.getElementById('date2').value;


    for (var x = 0; x < diasSemana.length; x++) {

        temperaturas[x] = prompt("introduce la temperatura del " + diasSemana[x]);

        media = media + parseInt(temperaturas[x]);

    }

    media = media / diasSemana.length;

    respuesta.style.setProperty("background-color", "#6ab150");

    document.getElementById('respuesta').innerHTML = `<h1>La temperatura media entre ${fechaInicio} y ${fechaFin} es de ${media} gradosC </h1>`





}
