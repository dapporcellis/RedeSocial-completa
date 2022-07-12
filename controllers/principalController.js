async function abregaleria(req, res) {
  res.render("principal/galeria");
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
};
