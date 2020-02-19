function mostrar()
{
	// declarar variables

	var contador=0;
	var acumulador=0;
	var interaciones;
	var max;
	var min;
	var primeraVez = true;

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

		if(primeraVez){
			primeraVez = false;

			max = numero;
			min = numero;
		}

		if(numero>max){
			max=numero;
		}

		if(numero<min){
			min=numero;
		}
	}


	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;

}//FIN DE LA FUNCIÓN