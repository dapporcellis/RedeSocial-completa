//Importação do Modelo Usuário -
const Usuario = require("../models/Usuario");
//Importação da biblioteca de criptografia de senha
const bcrypt = require("bcrypt");
//importação do passport
const passport = require("passport");
//importação da estratégia de login que vou usar
var LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(async function (username, password, cb) {
    var usuario = await Usuario.findOne({ where: { email: username } });

    if (!usuario) {
      return cb(null, false, { message: "Usuário não existe!" });
    } else {
      if (!bcrypt.compareSync(password, usuario.senha)) {
        return cb(null, false, { message: "Senha incorreta" });
      } else {
        return cb(null, usuario);
      }
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.email });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;
