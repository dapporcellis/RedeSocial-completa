const Foto = require("../models/Foto");
const Postagem = require("../models/Postagem");
const Usuario = require("../models/Usuario");
const Amigo = require("../models/Amigo");
const { Op } = require("sequelize");

async function abregaleria(req, res) {
  const fotos = await Foto.findAll({
    where: {
      UsuarioId: req.user.id,
    },
  });
  res.render("principal/galeria", { Fotos: fotos, Usuario: req.user });
}

async function postarfoto(req, res) {
  res.render("principal/postarfoto", { Usuario: req.user });
}

async function postagem(req, res) {
  res.render("principal/postagem", { Usuario: req.user });
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
  res.render("principal/postagens", {
    Postagens: postagens,
    Usuario: req.user,
  });
}

async function listaramigos(req, res) {
  const logado = await Usuario.findByPk(req.user.id);
  const amigos1 = await logado.getAmigos1();
  const amigos2 = await logado.getAmigos2();
  const usuarios = amigos1.concat(amigos2);
  res.render("principal/listaramigos", {
    Usuarios: usuarios,
    Usuario: req.user,
  });
}

async function buscaramigos(req, res) {
  const amigos = await Amigo.findAll({
    where: {
      [Op.or]: [{ idsolicitado: req.user.id }, { idsolicitante: req.user.id }],
    },
  });
  const usuarios = await Usuario.findAll({
    where: {
      [Op.not]: [{ id: req.user.id }],
    },
  });

  res.render("principal/buscaramigos", {
    Usuarios: usuarios,
    Solicitados: amigos,
    Usuario: req.user,
  });
}

async function buscaramigosfiltro(req, res) {
  const amigos = await Amigo.findAll({
    where: {
      [Op.or]: [{ idsolicitado: req.user.id }, { idsolicitante: req.user.id }],
    },
  });
  const usuarios = await Usuario.findAll({
    where: {
      [Op.not]: [{ id: req.user.id }],
      nome: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("principal/buscaramigos", {
    Usuarios: usuarios,
    Solicitados: amigos,
    Usuario: req.user,
  });
}

async function buscarcomunidade(req, res) {
  res.render("principal/buscarcomunidade", { Usuario: req.user });
}

async function minhascomunidades(req, res) {
  res.render("principal/minhascomunidades", { Usuario: req.user });
}

async function criarcomunidade(req, res) {
  res.render("principal/criarcomunidade", { Usuario: req.user });
}

async function salvarfoto(req, res) {
  const foto = await Foto.create({
    nome: req.file.path,
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

async function adicionaramigo(req, res) {
  const usuario = await Usuario.findByPk(req.user.id);
  const amigo = await Usuario.findByPk(req.params.id);
  usuario.addSolicitante(amigo, {
    through: {
      datasolicitacao: new Date(),
      situacao: "P",
    },
  });
  res.redirect("/buscaramigos");
}

async function solicitacoes(req, res) {
  const usuario = await Usuario.findByPk(req.user.id);
  const usuarios = await usuario.getPendente();
  res.render("principal/solicitacoes", {
    Usuarios: usuarios,
    Usuario: req.user,
  });
}

async function respostasolicitacao(req, res) {
  console.log(req.user.id);
  const amizade = await Amigo.findOne({
    where: {
      idsolicitante: req.params.id,
      idsolicitado: req.user.id,
    },
  });
  console.log(amizade);
  amizade.situacao = req.params.situacao;
  amizade.dataaceite = new Date();
  await amizade.save();
  res.redirect("/solicitacoes");
}

async function perfil(req, res) {
  res.render("principal/editarperfil", { Usuario: req.user });
}

async function editaperfil(req, res) {
  const usuario = await Usuario.findByPk(req.user.id);
  usuario.nome = req.body.nome;
  usuario.foto = req.file.path;
  await usuario.save();
  res.redirect("/listaramigos");
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
  adicionaramigo,
  solicitacoes,
  respostasolicitacao,
  perfil,
  editaperfil,
};
