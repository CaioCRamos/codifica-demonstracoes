function gravarNaMemoria() {
    var pagina = {
        titulo: "Título da minha página",
        subtitulo: "Subtítulo da minha página",
        corpo: "..."
    };

    var paginaJSON = JSON.stringify(pagina);
    localStorage.setItem("pagina", paginaJSON);
}

function lerDaMemoria() {
    var paginaJSON = localStorage.getItem("pagina");
    var pagina = JSON.parse(paginaJSON);

    document.getElementById("titulo").innerHTML = pagina.titulo;
    document.getElementById("subtitulo").innerHTML = pagina.subtitulo;
}