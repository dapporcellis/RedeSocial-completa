"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("fotos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: Sequelize.STRING,
      descricao: Sequelize.STRING,
      data: {
        type: Sequelize.DATEONLY,
      },
      UsuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("fotos");
  },
};
