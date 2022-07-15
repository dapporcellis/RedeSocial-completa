const Foto = require("../models/Foto");

async function abregaleria(req, res) {
  const fotos = await Foto.findAll({
    where: {
      UsuarioId: req.user.id,
    },
  });
  res.render("principal/galeria", { Fotos: fotos });
}

async function postarfoto(req, res) {
  res.render("principal/postarfoto");
}

async function postagem(req, res) {
  res.render("principal/postagem");
}

async function postagens(req, res) {
  res.render("principal/postagens");
}

async function listaramigos(req, res) {
  res.render("principal/listaramigos");
}

async function buscaramigos(req, res) {
  res.render("principal/buscaramigos");
}

async function buscarcomunidade(req, res) {
  res.render("principal/buscarcomunidade");
}

async function minhascomunidades(req, res) {
  res.render("principal/minhascomunidades");
}

async function criarcomunidade(req, res) {
  res.render("principal/criarcomunidade");
}

async function salvarfoto(req, res) {
  const foto = await Foto.create({
    nome: req.file.filename,
    descricao: req.body.descricao,
    data: new Date(),
    UsuarioId: req.user.id,
  });
  res.redirect("/galeria");
}

async function sair(req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = {
  abregaleria,
  postarfoto,
  postagens,
  listaramigos,
  postagem,
  buscaramigos,
  buscarcomunidade,
  minhascomunidades,
  criarcomunidade,
  salvarfoto,
  sair,
};
