window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    debugger;
    const parametro = urlParams.get('parametro');

    alert(parametro);
}

function irParaPagina2() {
    window.location.href = "./pagina2.html?parametro1=batatinha&parametro2=outro valor qualquer";
}