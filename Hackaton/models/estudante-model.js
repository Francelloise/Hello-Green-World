var mongoose = require("mongoose");

const Estudante = mongoose.model("estudantes", {
    nome: String,
    sobrenome: String,
    dataNascimento: String,
    email: String,
    senha: String,
    escola: String,
    telefone: String,
    tipo_usuario: String
});

module.exports = Estudante;