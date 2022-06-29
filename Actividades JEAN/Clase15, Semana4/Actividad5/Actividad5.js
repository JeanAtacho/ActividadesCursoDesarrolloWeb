var x = 0;
var impares = 0;

while (x <= 100) {

    if (x % 2 != 0) {
        console.log(x);

        impares = impares + 1;
    }
    x = x + 1;
}

console.log("los números impares son:" + impares)