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
      type:DataTypes.STRING,
      allowNull:true,
    },
    ultimaUbic: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    finViaje: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    contratos: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  })
//se agregan por relacion hotelId y scheduleId

  };