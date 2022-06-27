function gravarNaMemoria() {
    localStorage.setItem("titulo", "Um valor qualquer");
}

function lerDaMemoria() {
    var h1 = document.getElementById("titulo");
    h1.innerHTML = localStorage.getItem("titulo");
}

function removerDaMemoria() {
    localStorage.removeItem("titulo");
}