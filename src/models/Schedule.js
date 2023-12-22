const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('schedule', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    texto_gral: {
      type: DataTypes.JSON,
      allowNull: true,
    }
  });
};
