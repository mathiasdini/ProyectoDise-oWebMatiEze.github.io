document.getElementById("btn").addEventListener("click", function(){
    event.preventDefault()
    
    const numero1= parseFloat(document.getElementById("num1").value);
    const Eleccion=document.getElementById("Cambio").value;
    const EleccionResult=document.getElementById("CambioResultado").value;
    
    switch (Eleccion){
        case "mm":
            switch (EleccionResult){
                case "mm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1) + " " + EleccionResult;
                    break;
                case "cm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/10) + " " + EleccionResult;
                    break;
                case "m":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/1000) + " " + EleccionResult; 
                    break;
                case "km":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/1000000) + " " + EleccionResult;
                    break;
                default:
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (0) + " " + EleccionResult;
                    break;
            }
            break;

        case "cm":
            switch (EleccionResult){
                case "mm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*10) + " " + EleccionResult;
                    break;
                case "cm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1) + " " + EleccionResult;
                    break;
                case "m":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/100) + " " + EleccionResult; 
                    break;
                case "km":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/100000) + " " + EleccionResult;
                    break;
                default:
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (0) + " " + EleccionResult;
                    break;
            }
            break;

        case "m":
             switch (EleccionResult){
                case "mm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*1000) + " " + EleccionResult; 
                    break;
                case "cm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*100) + " " + EleccionResult; 
                    break;
                case "m":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1) + " " + EleccionResult; 
                    break;
                case "km":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1/1000) + " " + EleccionResult; 
                    break;
                default:
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (0) + " " + EleccionResult; 
                    break;
            }
            break;

         case "km":
            switch (EleccionResult){
                case "mm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*1000000) + " " + EleccionResult; 
                    break;
                case "cm":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*100000) + " " + EleccionResult; 
                    break;
                case "m":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1*1000) + " " + EleccionResult; 
                    break;
                case "km":
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (numero1) + " " + EleccionResult; 
                    break;
                default:
                    document.getElementById("resultado").innerHTML = numero1 + " " + Eleccion + " es igual a " + (0) + " " + EleccionResult; 0;
                    break;
            }
            break;

        default: inputResultado=0;
        }
})