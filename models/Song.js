const { Sequelize, sequelize } = require("../db");

// TODO - define the Song model
const { DataTypes } = require("sequelize");

const Song = sequelize.define("Song", {
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  length: DataTypes.INTEGER,
});
module.exports = {
  Song,
};
