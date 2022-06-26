function adicionarElemento() {
    var novoLi = document.createElement("li");
    // novoLi.innerHTML = "Teste";
    novoLi.append("Teste");

    document.querySelector("#lista").appendChild(novoLi);
}