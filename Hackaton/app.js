const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});

mongoose.connect("mongodb+srv://rebeca_palmeira:rebeca_palmeira@cluster0.9jadt.mongodb.net/helloGreenWorld?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});


app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

app.use(express.urlencoded({ extended: true }));//permitindo fluxo/tráfego entre páginas
app.use(express.json());// fluxo/tráfego de informações vai ser no formato json
app.use(express.static("public"));//permissão para usar a pasta public

const home_router = require("./routers/home-router");
app.use("/", home_router);

const estudante_router = require("./routers/estudante-router");
app.use("/estudante", estudante_router);

const escola_router = require("./routers/escola-router");
app.use("/escola", escola_router);

const cooperativa_router = require("./routers/cooperativa-router");
app.use("/cooperativa", cooperativa_router);

const login_router = require("./routers/login-router");
app.use("/login", login_router);