/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio;
    var cantidad;
    var marca;
    var descuento;
    var importeFinal;

    precio = 35;

    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    descuento = document.getElementById("precioDescuento").value;
    descuento = parseInt(descuento);

    cantidad = cantidad * precio;

    if(cantidad >= 6){
         descuento = 0,5;
         
        }else if (cantidad == 5 && marca == "ArgentinaLuz"){
             descuento = 0,4;
            
            }else if (cantiidad == 5){
                descuento = 0,3;
            
        }else if (cantidad = 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0,25;
        
            }else if (cantidad == 4){
                descuento == 0,20;
        
        }else if (cantidad == 3 && marca == "ArgentinaLuz"){
            descuento == 0,15;
            
            }else if (cantidad == 3 && marca == "FelipeLamparas"){
                descuento == 0,10;
                
                }else if (cantidad == 3){
                    descuento == 0,5;
}

    importeFinal = cantidad / descuento;

    if (importeFinal > 120){
        importeFinal = importeFinal * 0,10;

            alert("Usted pago "+ importeFinal +" de IIBB")
    }

}
