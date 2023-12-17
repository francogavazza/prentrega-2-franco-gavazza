function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: División por cero";
    }
  }
  
  function realizarOperacion() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;
  
    switch (operacion) {
      case "suma":
        resultado = sumar(numero1, numero2);
        break;
      case "resta":
        resultado = restar(numero1, numero2);
        break;
      case "multiplicacion":
        resultado = multiplicar(numero1, numero2);
        break;
      case "division":
        resultado = dividir(numero1, numero2);
        break;
      default:
        resultado = "Operación no válida";
    }
  
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
  }