function mostrar()
{
	var contador=0;
	var acumulador=0;

	while(contador <5){
		contador++;

		var numero;
		numero = prompt("ingrese un numero")

		while(isNaN(numero)){
			numero= prompt("¡¡ERROR!! Ingrese un numero.");
			numero= parseInt(numrero);
		}
		acumulador += numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN