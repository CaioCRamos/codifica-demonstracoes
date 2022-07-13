window.onload = () => {
    debugger;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const parametro1 = urlParams.get('parametro1');
    const parametro2 = urlParams.get('parametro2');

    alert(parametro1 + " - " + parametro2);
}
