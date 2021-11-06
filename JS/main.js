//Taller 1

//Punto 1
//Aplicación en la cual un usuario ingresa horas trabajadas, 
//el valor de cada hora y muestra el
//total a pagar y los minutos que trabajo.

//Punto 2
//Aplicación que lea el nombre de un trabajador cantidad de 
//meses que trabajo al año y
//muestre el porcentaje de meses que trabajo.

//Punto 3
//Aplicación que calcule el cambio de peso colombiano al 
//dólar con el valor del día actual.

//Punto 4
//Aplicación que determine si un alumno aprueba a reprueba 
//un curso, sabiendo que aprobara
//si su promedio de tres calificaciones es mayor o igual a 
//70; reprueba en caso contrario.


function ejecicios() {

    var nombre = prompt("Digite su nombre: ");

    if(nombre != null) {
        
        alert("Bienvenido " + nombre + ".");
        alert("Problemas del taller\n1: Precio Horas trabajadas.\n2: Porcentaje de trabajo.\n3: Cambio moneda\n4: Resultado prueba alumno.\n0: Salir");

        var problema = parseInt(prompt("Digite el numero del problema:"));

        switch (problema) {
            case 1:
                var horasT = parseInt(prompt("Ingrese las horas trabajadas: "));
                var valorH = parseInt(prompt("Ingrese el valor por hora: "));

                var minutosT = horasT * 60;
                var salario = horasT * valorH;

                alert(nombre + " el total de minutos que trabajo es de: " + minutosT + "\nEl salario que recibirá es de: " + salario);
                break;

            case 2:
                var cantidadM = parseInt(prompt("Ingrese la cantidad de meses trabajados al año: "));
                var porcentajeM = ((cantidadM / 12) * 100).toFixed();

                alert(nombre + " su porcentaje de meses trabajados es: " + porcentajeM + "%");
                break;

            case 3:
                var dolarE = 0.00026;
                var pesoC = 3809.29;

                var eleccion = parseInt(prompt("Escoja:\n1:Convertir de Dolares a Pesos Colombianos.\n2:Convertir de Pesos Colombianos a Dolares"));

                switch (eleccion) {
                    case 1:
                        var dolares = parseFloat(prompt("Digite la cantidad de dolares: "));
                        var conversion = dolares * pesoC;
                        
                        alert("El valor de " + dolares + " dolares a Pesos Colombianos es de: " + conversion);
                        break;
                    
                    case 2:
                        var pesos = parseFloat(prompt("Digite la cantidad de pesos colombianos: "));
                        var conversion = pesos * dolarE;
                        
                        alert("El valor de " + pesos + " pesos colombianos a dolares es de: " + conversion);
                        break;
                    default:
                        alert("Selecciones una opcióin válida.");
                        break;
                }
                break;
            
            case 4:
                var suma = 0;
                for (let i = 1; i <= 3; i++) {
                    var calificacion = parseFloat(prompt("Digite la calificacion N° " + i));

                    var suma = suma + calificacion;
                }
                var promedio = (suma / 3).toFixed(2);
                
                if (promedio > 70) {
                    alert("Felicidades " + nombre + ". Has aprobado la materia con un promedio de: " + promedio + " puntos.");
                } else {
                    alert("Debes estudiar más " + nombre + ". Has reprobado la materia con un promedio de: " + promedio + " puntos.");
                }
                break;

            case 0:
                alert("Muchas gracias por visitarnos " + nombre);
                break;

            default:
                alert("Seleccione una opción válida.");
                break;
        }
    } else {
        alert("Muchas gracias por visitarnos")
    }
}