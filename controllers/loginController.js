const Usuario = require("../models/Usuario");

async function abreTela(req, res) {
  res.render("login/login.ejs");
}

async function logar(req, res) {}

async function cadastro(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;
  const usuario = await Usuario.create({
    nome: nome,
    email: email,
    senha: senha,
  });
  res.redirect("/");
}

module.exports = { abreTela, logar, cadastro };
