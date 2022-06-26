function adicionarElementoTemplate() {
    var modelo = document.getElementById("modelo");
    var conteudo = modelo.content.cloneNode(true);

    var texto = conteudo.querySelector("input[type='text']");
    texto.value = "ok";

    var botao = conteudo.querySelector("input[type='button']");
    botao.value = "Clique aqui";

    document.querySelector("#areaEmBranco").appendChild(conteudo);
}

function mostrarMensagem() {
    alert("Funcionou!");
}