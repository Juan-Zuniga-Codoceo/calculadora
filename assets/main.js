var operacion = "";
var resultado = 0;
var operador = "";
var mostrarResultado = false;

function agregarValor(valor) {
	if (mostrarResultado) {
		document.getElementById("display").value = "";
		mostrarResultado = false;
	}
	document.getElementById("display").value += valor;
}

function agregarOperador(op) {
	if (operacion != "") {
		calcular();
	}
	operacion = document.getElementById("display").value;
	operador = op;
	document.getElementById("display").value = "";
}

function calcular() {
	if (operacion != "" && document.getElementById("display").value != "") {
		switch (operador) {
			case "+":
				resultado = parseFloat(operacion) + parseFloat(document.getElementById("display").value);
				break;
			case "-":
				resultado = parseFloat(operacion) - parseFloat(document.getElementById("display").value);
				break;
			case "*":
				resultado = parseFloat(operacion) * parseFloat(document.getElementById("display").value);
				break;
			case "/":
				resultado = parseFloat(operacion) / parseFloat(document.getElementById("display").value);
				break;
		}
		document.getElementById("display").value = resultado;
		mostrarResultado = true;
		operacion = "";
		operador = "";
	}
}

function borrar() {
	document.getElementById("display").value = "";
	operacion = "";
	resultado = 0;
	operador = "";
}
