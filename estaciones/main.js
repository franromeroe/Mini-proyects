function mostrar()
{
	
	let mes = document.getElementById("txtIdMes").value;
	
	switch (mes){

        case "Marzo" :
		case "Abril":
		case "Mayo" :
			alert("Arrancamos con el frio");
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Hace mucho frio!!");
			break;

		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
	
            alert("Comienzan a nacer las flores, Primavera!!")
            break;

        case "Diciembre" :
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora hace calor!!!.");
			break;
	}
}

