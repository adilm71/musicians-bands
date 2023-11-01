const { Sequelize, sequelize } = require("../db");

// TODO - define the Band model
const { DataTypes } = require("sequelize");
const Band = sequelize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});

module.exports = {
  Band,
};
