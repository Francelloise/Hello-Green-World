const Estudante = require("../models/estudante-model");

exports.estudante = (req, res) => {
    res.render("./views/pages/estudante");
}

exports.estudante = (req, res) => {
    let id = req.params.id;
    Estudante.findOne({ _id: id }, (err, estudante) => {
        res.render("./views/pages/estudante", { estudante: estudante });
    })
}

exports.cadastrarEstudante_get = (req, res) => {
    res.render("./views/pages/cadastrarEstudante");
}

exports.cadastrarEstudante_post = (req, res) => {
    let estudante = new Estudante();
    
    estudante.nome = req.body.nome;
    estudante.sobrenome = req.body.sobrenome;
    estudante.dataNascimento = req.body.dataNascimento;
    estudante.email = req.body.email;
    estudante.senha = req.body.senha;
    estudante.escola = req.body.escola;
    estudante.telefone = req.body.telefone;
    estudante.tipo_usuario = req.body.tipo_usuario;

    estudante.save((err) => {
        if(err) {
            return res.status(500).send("Erro ao cadastrar livro.");
        }

        return res.redirect("/login");
    });
};

exports.estudantesParticipantes = (req, res) => {
    let consulta = Estudante.find({}, (err, estudante) => {s

        if (err)
            return res.status(500).send("Erro ao consultar estudantes participantes.");
        res.render("estudantesParticipantes", {estudantesParticipantes:estudante});
    })
}