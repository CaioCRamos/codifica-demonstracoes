function adicionarElemento() {
    var texto = document.createElement("input");
    texto.type = "text";
    texto.placeholder = "Digite alguma coisa";

    var botao = document.createElement("input");
    botao.type = "button";
    botao.value = "ok";

    var div = document.createElement("div");
    div.append(texto);
    div.append(botao);

    document.querySelector("#areaEmBranco").appendChild(div);
}