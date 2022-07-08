const { DataTypes } = require("sequelize");
const conexao = require("../config/conexao");

const Foto = conexao.define(
  "Foto",
  {
    nome: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
    tableName: "fotos",
  }
);

module.exports = Foto;
