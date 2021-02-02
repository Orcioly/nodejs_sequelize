const Sequelize = require("sequelize");

// Conexão como o banco de dados Mysql
const sequelize = new Sequelize("db", "user", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
