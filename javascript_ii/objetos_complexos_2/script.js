function Cliente(id, nome, idade, endereco, email) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.email = email;
}

var cliente = new Cliente(1, "Outro Caio", 30, "Rua...", "caio@...");

console.log(cliente);