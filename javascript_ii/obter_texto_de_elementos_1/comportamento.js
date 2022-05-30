function mostrarMensagem() {
  //obtém elemento com id="mensagem"
  var elementoMensagem = document.getElementById("mensagem");

  //obtém o valor da propriedade value do elemento
  var mensagem = elementoMensagem.value;

  alert(mensagem);
}
