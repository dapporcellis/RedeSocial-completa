const sequelize = require("sequelize");

const conexao = new sequelize("redesocial_teste", "postgres", "postgres", {
  host: "localhost",
  port: "5433",
  dialect: "postgres",
});

module.exports = conexao;
