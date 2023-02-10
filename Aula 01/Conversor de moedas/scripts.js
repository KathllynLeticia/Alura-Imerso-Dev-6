function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valorDolar = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valorDolar);

  var valorEmRealDolar = valorEmDolarNumerico * 5;

  console.log(valorEmRealDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O RESULTADO EM REAL É R$ " + valorEmRealDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElemento = document.getElementById("valor2");
  var valorLibra = valorElemento.value;
  var valorEmLibraNumerico = parseFloat(valorLibra);

  var valorEmRealLibra = valorEmLibraNumerico * 7;

  console.log(valorEmRealLibra);

  var elementoValorConvertido = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O RESULTADO EM REAL É R$ " + valorEmRealLibra;
  elementoValorConvertido.innerHTML = valorConvertido2;
}
