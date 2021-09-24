const Estudante = require("../models/estudante-model");
const Cooperativa = require("../models/cooperativa-model");
const Escola = require("../models/escola-model");

exports.login_get = (req, res) => {
    res.render("./views/pages/login");
}

exports.login_post = (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;

    Estudante.findOne({ $and: [{ email: email }, { senha: senha }] }, (err, usuario) => {
        if (err)
            return res.status(500).send("Erro ao conectar no banco de dados");
        
        if(usuario) {
            return res.redirect("/estudante/" + usuario._id);

        } else {
            Cooperativa.findOne({ $and: [{ email: email }, { senha: senha }] }, (err, usuario) => {
                if (err)
                    return res.status(500).send("Erro ao conectar no banco de dados");
        
                if(usuario) {        
                    return res.redirect("/cooperativa/" + usuario._id);  
                              
                } else {
                    Escola.findOne({ $and: [{ email: email }, { senha: senha }] }, (err, usuario) => {
                        if (err)
                                return res.status(500).send("Erro ao conectar no banco de dados");
                        
                        if(usuario) {
                            return res.redirect("/escola/" + usuario._id);
                                
                        } else {
                            return res.send("usuário não cadastrado");
                        }
                
                    })
                }
            });
        }
    })  
}

