const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('emoji', {
    id:  {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  })
  };