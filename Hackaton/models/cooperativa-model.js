var mongoose = require("mongoose");

const Cooperativa = mongoose.model("cooperativas", {
    nome: String,
    cnpj: String,
    email: String,
    senha: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    cep: String,
    estado: String,
    telefone: String,
    contato: String,
    material: String,
    tipo_usuario: String
});

module.exports = Cooperativa;