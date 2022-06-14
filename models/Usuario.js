const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("");

const Usuario = sequelize.define(
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
    sequelize,
    timestamps: false,
  }
);
