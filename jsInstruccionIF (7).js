function mostrar()
{
//tomo la edad  

    var edad
    var estadoCivil

    edad = document.getElementById("edad").value
    estadoCivil = document.getElementById("estadoCivil").value

    if (edad < "18" && estadoCivil != "Soltero"){
        alert ("Demaciado joven para no ser soltero")
    }


}//FIN DE LA FUNCIÓN