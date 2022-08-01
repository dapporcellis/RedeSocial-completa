"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("postagens", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titulo: Sequelize.STRING,
      postagem: Sequelize.STRING,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("postagens");
  },
};
