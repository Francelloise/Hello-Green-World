var mongoose = require("mongoose");

const Escola = mongoose.model("escolas", {
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
    tipo: String,
    tipo_usuario: String,
    sacolaPlastico: Number,
    sacolaMetal: Number,   
    sacolaVidro: Number
});

module.exports = Escola;