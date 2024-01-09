const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('form', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
      }, 
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },     
    telefono: {
       type: DataTypes.STRING,
       allowNull: true,
    },
    comentario: {
       type: DataTypes.STRING,
       allowNull: true,
    },
    horario: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    leido: {
      type:DataTypes.BOOLEAN,
      allowNull:true,
    }
  })
  };
