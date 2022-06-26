function adicionarElementoTemplate() {
    var modelo = document.getElementById("modelo");
    var conteudo = modelo.content.cloneNode(true);

    document.querySelector("#areaEmBranco").appendChild(conteudo);
}

function mostrarMensagem() {
    alert("Funcionou!");
}