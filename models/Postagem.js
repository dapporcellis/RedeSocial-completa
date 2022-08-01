const { DataTypes } = require("sequelize");
const conexao = require("../config/conexao");

const Postagem = conexao.define(
  "Postagem",
  {
    titulo: {
      type: DataTypes.STRING,
    },
    postagem: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
    tableName: "postagens",
  }
);

module.exports = Postagem;
