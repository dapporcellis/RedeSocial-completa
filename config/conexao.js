const sequelize = require("sequelize");

const conexao = new sequelize(
  "d19pntvbo46qgm",
  "tawhihlqjlofhk",
  "fa9f85c9d7116ebee41d93095964ceb247ac9b978ed813814d34ed07c37d79ca",
  {
    host: "ec2-34-235-198-25.compute-1.amazonaws.com",
    port: "5432",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
  }
);

module.exports = conexao;
