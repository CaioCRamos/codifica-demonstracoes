//Funções específicas por Página
function navegarParaPagina1() {
    window.location.href = "../pagina1/pagina.html";
}

function navegarParaPagina2() {
    window.location.href = "../pagina2/pagina.html";
}

//Funções genéricas que recebem as páginas como parâmetros
function navegarParaPagina(pagina) {
    window.location.href = `../${pagina}/pagina.html`;
}

function navegarPara(caminho) {
    window.location.href = caminho;
}