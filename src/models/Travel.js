const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('travel', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    salida: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    regreso: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    inicioViaje: {
      type: DataTypes.BOOLEAN, 
      allowNull: true, 
      defaultValue: false, // Valor predeterminado
    },
    ultimaUbic: {
      type:DataTypes.JSON,
      allowNull:true,
    },
    finViaje: {
      type: DataTypes.BOOLEAN, 
      allowNull: true, 
      defaultValue: false, // Valor predeterminado
    },
    contratos: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  })
//se agregan por relacion hotelId y scheduleId

  };