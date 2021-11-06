function operacion() {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1":
            var suma = numero1 + numero2;
            alert("La suma del número " + numero1 + " y el número " + numero2 + " es igual a: " + suma);
            break;

        case "2":
            var resta = numero1 - numero2;
            alert("La resta del número " + numero1 + " y el número " + numero2 + " es igual a: " + resta);
            break;

        case "3":
            var multiplicacion = numero1 * numero2;
            alert("La multiplicación del número " + numero1 + " y el número " + numero2 + " es igual a: " + multiplicacion);
            break;

        case "4":
            var division = (numero1 / numero2).toFixed(2);
            alert("La división del número " + numero1 + " y el número " + numero2 + " es igual a: " + division);
            break;

        case "0":
            alert("Seleccione una operación.");
    }
}