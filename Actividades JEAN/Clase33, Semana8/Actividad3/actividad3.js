function introducir() {


    var meses = ["enero", "febrero", "marzo"];
    var dias = new Array();

    var x = 0;
    while (x < meses.length) {

        dias[x] = prompt("¿Cuantos dias tiene " + meses[x])

        alert(meses[x] + " tiene " + dias[x] + " dias ")

        x++;
    }
    alert(dias[1]);

}