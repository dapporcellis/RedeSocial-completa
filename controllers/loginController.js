async function abreTela(req, res) {
  res.render("login/login.ejs");
}

async function logar(req, res) {}

async function cadastro(req, res) {}

module.exports = { abreTela, logar, cadastro };
