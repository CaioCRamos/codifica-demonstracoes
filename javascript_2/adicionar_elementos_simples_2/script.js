function adicionarBotao() {
    var botao = document.createElement("input");
    botao.type = "button";
    botao.value = "Clique aqui!";

    document.getElementById("areaEmBranco").appendChild(botao);
}

function adicionarTexto() {
    var senha = document.createElement("input");
    senha.type = "password";

    document.getElementById("areaEmBranco").appendChild(senha);
}

function adicionarImagem() {
    var imagem = document.createElement("img");
    imagem.src = "javascript.png";
    imagem.width = 100;

    document.getElementById("areaEmBranco").appendChild(imagem);
}