function mostrar()
{
//tomo la edad  
    var mesDelAño;

    mesDelAño = document.getElementById('mes').value;
//alert (mesDelAño);
	
	switch(mesDelAño){
        case "Febrero":
            alert("Este mes tiene 28 dias.");
            break;
        case "Abril":
        case "Junio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Este mes tiene 30 dias.");
            break;
        default:
            alert("Este mes tiene 31 dias.")
    }



}//FIN DE LA FUNCIÓN