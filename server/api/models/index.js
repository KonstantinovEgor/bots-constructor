const fs = require('fs');
const path = require('path');

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const dirModels = path.join(__dirname, 'api', 'models'); 

const db = {};

fs
  .readdirSync(dirModels)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(dirModels, file))(DataTypes, sequelize);
    db[model.name] = model;
  });

module.exports = db;