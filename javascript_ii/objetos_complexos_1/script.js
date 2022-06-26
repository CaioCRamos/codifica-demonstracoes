var cliente1 = {
    id: 1,
    nome: "Caio",
    idade: 30,
    email: "caio.ramos@basesocial.org",
    endereco: "Rua assis...",
}

var cliente2 = {
    id: 2,
    nome: "Pedro",
    idade: 23,
    endereco: "Rua assis...",
    email: "pedro@basesocial.org"
};

var cliente3 = {
    id: 3,
    nome: "Maria",
    endereco: "Rua assis...",
    email: "maria@basesocial.org"
};

var clientes = [];
clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);



// for (var contador = 0; contador < clientes.length; contador++) {
//     console.log(clientes[contador].idade);
// }

for (var cliente of clientes) {
    console.log(cliente.nome);
}

