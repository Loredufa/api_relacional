const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('schedule', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {                   //Tandil 3dias
      type: DataTypes.STRING,
      allowNull: false,
    },
    texto_gral: {
      type:DataTypes.STRING,    //[{titulo:xxx, descripción:xxx}, {titulo:xxx, descripción:xxx}]
      allowNull:true,
    }
  })

  };