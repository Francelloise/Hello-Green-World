const Cooperativa = require("../models/cooperativa-model");

exports.cooperativa = (req, res) => {
    let id = req.params.id;
    Cooperativa.findOne({ _id: id }, (err, cooperativa) => {
        res.render("./views/pages/cooperativa", { cooperativa: cooperativa });
    })
}

exports.cadastrarCooperativa_get = (req, res) => {
    res.render("./views/pages/cadastrarCooperativa");
}

exports.cadastrarCooperativa_post = (req, res) => {
    let cooperativa = new Cooperativa();
    
    cooperativa.nome = req.body.nome;
    cooperativa.cnpj = req.body.cnpj;
    cooperativa.email = req.body.email;
    cooperativa.senha = req.body.senha;
    cooperativa.logradouro = req.body.logradouro;
    cooperativa.numero = req.body.numero;
    cooperativa.complemento = req.body.complemento;
    cooperativa.bairro = req.body.bairro;
    cooperativa.cidade = req.body.cidade;
    cooperativa.cep = req.body.cep;
    cooperativa.estado = req.body.estado;
    cooperativa.telefone = req.body.telefone;
    cooperativa.contato = req.body.contato;
    cooperativa.material = req.body.material;
    cooperativa.tipo_usuario = req.body.tipo_usuario;

    cooperativa.save((err) => {
        if(err) 
            return res.status(500).send("Erro ao cadastrar cooperativa.");        

        return res.redirect("/login"); 
    });
};
