function longitud() {
    var palabra = document.getElementById("Letras").value;
    alert("La longitud de la palabra es de: " + palabra.length);
}

function mayuscula() {
    var palabra = document.getElementById("Letras").value;
    alert("Palabra en Mayúsculas: " + palabra.toUpperCase());
}

function minuscula() {
    var palabra = document.getElementById("Letras").value;
    alert("Palabra en Minúsculas: " + palabra.toLowerCase());
}

function primerC() {
    var palabra = document.getElementById("Letras").value;
    alert("El Primer Carácter de la palabra es: " + palabra.slice(0,1));
}