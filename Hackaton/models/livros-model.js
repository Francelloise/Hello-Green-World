var mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://rebeca_palmeira:rebeca_palmeira@cluster0.9jadt.mongodb.net/biblioteca?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

const Livro = mongoose.model("livros", {//variável Livro está configurando a modelagem dos documentos que serão cadastrados/instanciados futuramente
    tituloLivro: String,
    numeroPaginas: Number,
    nomeAutor: String,
    isbn: Number,//10 a 13 dígitos
    edicao: String,
    editora: String,
    genero: String,
    dataPublicacao: String
});

module.exports = Livro;