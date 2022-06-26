async function buscarImagem1() {
    var response = await fetch("https://dog.ceo/api/breeds/image/rand");
    var jsonResponse = await response.json();

    if (response.ok) {
        var img = document.getElementById("imgResultado");
        img.src = jsonResponse.message;
    } else {
        alert("Algo deu errado: " + jsonResponse.message);
    }
}

function buscarImagem2() {
    var img = document.getElementById("imgResultado");

    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then((json) => {
            img.src = json.message;
        })
        .catch((erro) => {
            alert(erro);
        });

    alert("API chamada com sucesso");
}