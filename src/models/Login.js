const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('login', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      },    
    nombre: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    apellido: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    telefono: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    contrato: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    rol: {
        type:DataTypes.STRING,
        allowNull:false,
    }
  })

  };