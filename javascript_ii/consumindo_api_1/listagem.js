function listarUsuarios1() {
    fetch("https://codifica-demo-api.herokuapp.com/api/v1/users")
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            }
        })
        .then(function (listaUsuarios) {
            listarUsuarios(listaUsuarios);
        });
}

async function listarUsuarios2() {
    var resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users");

    if (resposta.ok) {
        var listaUsuarios = await resposta.json();
        listarUsuarios(listaUsuarios);
    }
}

function listarUsuarios(listaUsuarios) {
    const usuarios = document.getElementById("usuarios");

    for (let contador = 0; contador < listaUsuarios.length; contador++) {
        const li = document.createElement("li");
        const usuario = listaUsuarios[contador];

        li.innerHTML = `Nome: ${usuario.nome}, e-mail: ${usuario.email}, senha: ${usuario.senha}`;

        usuarios.append(li);
    }
}