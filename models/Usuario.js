const { DataTypes } = require("sequelize");
const conexao = require("../config/conexao");

const Usuario = conexao.define(
  "Usuario",
  {
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
    },
    foto: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "usuarios",
  }
);

module.exports = Usuario;
