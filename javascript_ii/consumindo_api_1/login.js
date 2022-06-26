async function logar() {
    debugger;
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const corpo = {
        email: email.value,
        senha: senha.value
    };

    const requisicao = {
        method: "POST",
        body: JSON.stringify(corpo),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao);

    const json = await resposta.json();
    alert(json.mensagem);

    if (resposta.ok) {
        window.location.href = "listagem.html";
    }
}