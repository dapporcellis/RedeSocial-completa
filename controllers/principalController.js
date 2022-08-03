const Foto = require("../models/Foto");
const Postagem = require("../models/Postagem");
const Usuario = require("../models/Usuario");
const { Op } = require("sequelize");

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
  //buscar as postagens do usuario que esta logado
  const postagens = await Postagem.findAll({
    where: {
      UsuarioId: req.user.id,
    },
    include: ["Usuario"], //incluir dados do usuário na pesquisa
  });
  //renderizar a tela postagens enviando
  //como Postagens as postagens encontradas
  res.render("principal/postagens", { Postagens: postagens });
}

async function listaramigos(req, res) {
  res.render("principal/listaramigos");
}

async function buscaramigos(req, res) {
  const usuarios = await Usuario.findAll({
    where: {
      [Op.not]: [{ id: req.user.id }],
    },
  });
  res.render("principal/buscaramigos", { Usuarios: usuarios });
}

async function buscaramigosfiltro(req, res) {
  const usuarios = await Usuario.findAll({
    where: {
      [Op.not]: [{ id: req.user.id }],
      nome: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("principal/buscaramigos", { Usuarios: usuarios });
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

async function fazerpostagem(req, res) {
  const postagem = await Postagem.create({
    titulo: req.body.titulo,
    postagem: req.body.postagem,
    data: new Date(), //data atual
    UsuarioId: req.user.id, //usuário que esta logado na aplicação
  });
  res.redirect("/postagens");
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
  fazerpostagem,
  buscaramigosfiltro,
};
