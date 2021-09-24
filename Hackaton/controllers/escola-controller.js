const Escola = require("../models/escola-model");

exports.escola = (req, res) => {
    res.render("./views/pages/escola");
}

exports.escola = (req, res) => {
    let id = req.params.id;
    Escola.findOne({ _id: id }, (err, escola) => {
        res.render("./views/pages/escola", { escola: escola });
    })
}

exports.cadastrarEscola_get = (req, res) => {
    res.render("./views/pages/cadastrarEscola");
}

exports.cadastrarEscola_post = (req, res) => {
    let escola = new Escola();
    
    escola.nome = req.body.nome;
    escola.cnpj = req.body.cnpj;
    escola.email = req.body.email;
    escola.senha = req.body.senha;
    escola.logradouro = req.body.logradouro;
    escola.numero = req.body.numero;
    escola.complemento = req.body.complemento;
    escola.bairro = req.body.bairro;
    escola.cidade = req.body.cidade;
    escola.cep = req.body.cep;
    escola.estado = req.body.estado;
    escola.telefone = req.body.telefone;
    escola.contato = req.body.contato;
    escola.tipo = req.body.tipo;
    escola.tipo_usuario = req.body.tipo_usuario;
    
    console.log(escola);

    escola.save((err) => {
        if(err) 
            return res.status(500).send("Erro ao cadastrar escola.");        

        return res.redirect("/login"); 
    });
};
