//Função
function Converter() {
  //Salvando o elemento inteiro na tela em uma variável
  var valorElemento = document.getElementById("valor");
  //Salvando apenas o valor inserido no elemento
  var valor = valorElemento.value;
   //converter o valor do elemento, que é retirado em forma de texto, para float
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmBitcoin = parseFloat(valor);
  //valor inserido multiplicado por 5
  var valorEmEuro = valorEmEuroNumerico * 5;
  
  
    //Mostrando no console
  console.log(valorEmEuro);
  
  //Guardando o elemento inteiro na tela em uma variável
  var elementoValorConvertido = document.getElementById("valorConvertido");
    //Formatando a mensagem do valor convertido para mostrar na pagina
  var valorConvertido = "O valor em real é R$ " + valorEmEuro;
  //Mostra o valor convertido na pagina
  elementoValorConvertido.innerHTML = valorConvertido;
  
}