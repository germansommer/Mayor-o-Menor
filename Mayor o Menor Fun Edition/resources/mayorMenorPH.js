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
	document.getElementById("musica").play();
	generarNumero();	
	if (comprobar() == true){
		document.getElementById("textoResultado").innerHTML = "CRACK!";
		document.getElementById("textoResultado").style.background = "#00ee00";
		console.log("Es Mayor, bien ahi!");
	} else if (comprobar() == false){
		document.getElementById("textoResultado").innerHTML = ":C";
		document.getElementById("textoResultado").style.background = "#ee0000";
		console.log("Es Menor, que bajon");
	}
}


function seleccionMenor(){
	document.getElementById("musica").play();
	generarNumero();
	if (comprobar() == true){
		document.getElementById("textoResultado").innerHTML = "VOS PODÉS";
		document.getElementById("textoResultado").style.background = "#ee0000";
		console.log("Es Mayor, que bajon");
	} else if (comprobar() == false){
		document.getElementById("textoResultado").style.background = "#00ee00";
		document.getElementById("textoResultado").innerHTML = "SOS MUY BUENO!";
		console.log("Es Menor, bien ahi!");
	}
}