const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('financing', {
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
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
  });
}