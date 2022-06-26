var form = document.querySelector("form");

//Forma 1 de criar o evento de submit via código
form.onsubmit = function (event) {
    event.preventDefault();

    if (form.nome.value === "caio" && form.senha.value === "123") {
        window.location.href = "pagina1.html";
    } else {
        alert("Login errado");
    }
}

//Mesma forma de cima, porém usando uma escrita simplificada de função (Arrow Function)
form.onsubmit = (event) => {
    event.preventDefault();

    if (form.nome.value === "caio" && form.senha.value === "123") {
        window.location.href = "pagina1.html";
    } else {
        alert("Login errado");
    }
}

//Forma 2 de criar o evento de submit via código
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.nome.value === "caio" && form.senha.value === "123") {
        window.location.href = "pagina1.html";
    } else {
        alert("Login errado");
    }
});