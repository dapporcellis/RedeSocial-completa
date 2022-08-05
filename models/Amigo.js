const { DataTypes } = require("sequelize");
const conexao = require("../config/conexao");

const Amigo = conexao.define(
  "Amigo",
  {
    datasolicitacao: {
      type: DataTypes.DATEONLY,
    },
    dataaceite: {
      type: DataTypes.DATEONLY,
    },
    situacao: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "amigos",
  }
);

module.exports = Amigo;
