const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('version', {
    id:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    patch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  })
  };