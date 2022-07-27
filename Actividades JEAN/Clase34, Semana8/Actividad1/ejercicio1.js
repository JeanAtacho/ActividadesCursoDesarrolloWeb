// numero aleatorio entre 1 y 10
var random = parseInt(Math.random() * 10) + 1;
console.log('el resultado aleatorio es ' + random);

var intentos = 3;
if (intentos == 3) {

    div.style.setProperty("background-color", "#6ab150");
    document.getElementById('div').innerHTML = 'Te quedan 3 intentos';
}



function adivinar() {

    var numeroIntroducido = document.getElementById('numero').value;
    if (numeroIntroducido == random) {
        alert('has acertado')
        div.style.setProperty("background-color", "#fff");
        document.getElementById('div').innerHTML = 'HAS ACERTADO ';

        var intentarOtraVez = prompt('quieres volver a intentarlo?');
        if (intentarOtraVez == 'si') {
            location.reload();

        } else {
            alert('pues Buena suerte en la vida');
        }


    } else {
        intentos = intentos - 1;
        alert("te quedan " + intentos + " intentos")
        if (random > numeroIntroducido) {
            alert('el numero que buscas es mayor');
        } else {
            alert('el numero que buscas es menor')
        }
    }
    if (intentos == 2) {
        div.style.setProperty("background-color", "#ff9e03");
        document.getElementById('div').innerHTML = 'Te quedan 2 intentos';
    }

    if (intentos == 1) {
        div.style.setProperty("background-color", "#ff0303");
        document.getElementById('div').innerHTML = 'Te quedan 1 intentos';
    }
    if (intentos == 0) {
        div.style.setProperty("background-color", "#ff0303");
        document.getElementById('div').innerHTML = 'Te quedan 0 intentos. Has perdido';
        location.reload();
    }


}