function mostrar()
{

	var contador=0;
	var acumulador=0;
	var interaciones;

	interaciones = prompt("¿Cuantos numeros desea ingresar?");
	interaciones = parseInt(interaciones);

	while(contador < interaciones){
		contador++;

		var numero;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero= prompt("¡¡ERROR!! Ingrese un numero.");
			numero= parseInt(numero);
		}
		acumulador+=numero;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN