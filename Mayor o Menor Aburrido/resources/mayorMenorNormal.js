function generarNumero(){
	numeroActual = document.getElementById("numero").innerHTML;
	numeroNuevo = Math.floor(Math.random() * 101);
	while (numeroNuevo == numeroActual){
		numeroNuevo = Math.floor(Math.random() * 101);
	}
}

function comprobar(){	
	if (numeroNuevo > numeroActual){
		document.getElementById("numero").innerHTML = numeroNuevo;
		return true;
	} else if (numeroNuevo < numeroActual){
		document.getElementById("numero").innerHTML = numeroNuevo;
		return false;
	}
}

function seleccionMayor(){
	generarNumero();	
	if (comprobar() == true){
		document.getElementById("textoResultado").innerHTML = "Es Mayor, bien ahi!";
		document.getElementById("textoResultado").style.background = "#00ee00";
		console.log("Es Mayor, bien ahi!");
	} else if (comprobar() == false){
		document.getElementById("textoResultado").innerHTML = "Es Menor, que bajon";
		document.getElementById("textoResultado").style.background = "#ee0000";
		console.log("Es Menor, que bajon");
	}
}



function seleccionMenor(){
	generarNumero();
	if (comprobar() == true){
		document.getElementById("textoResultado").innerHTML = "Es Mayor, que bajon";
		document.getElementById("textoResultado").style.background = "#ee0000";
		console.log("Es Mayor, que bajon");
	} else if (comprobar() == false){
		document.getElementById("textoResultado").style.background = "#00ee00";
		document.getElementById("textoResultado").innerHTML = "Es Menor, bien ahi!";
		console.log("Es Menor, bien ahi!");
	}
}