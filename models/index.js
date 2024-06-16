const Sequelize = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Bank = require('./bank')(sequelize, Sequelize.DataTypes);
db.Branch = require('./branch')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
