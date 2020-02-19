function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var interaciones;
	
	interaciones = prompt("¿Cuantos numeros desea ingresar?");
	interaciones = parseInt(interaciones);
	
	while(contador < interaciones){
		contador++;
	
		var numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
	
		while(isNaN(numero)){
			numero= prompt("¡¡ERROR!! Ingrese un numero.");
			numero= parseInt(numero);
		}
		if(numero>=0){
			positivo=positivo +=numero;
		}else{
			neativo=negativo *=numero;
		}
	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN