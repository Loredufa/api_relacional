const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('fee', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numPass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numCuota: {
      type:DataTypes.STRING,
      allowNull:true,
    },   
    importe: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    cancelado: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    liberado: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    facturado: {
       type:DataTypes.STRING,
       allowNull:true,
    },
    pagada: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    pendiente: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    vencimiento: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    fechaPag: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    saldo: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    codBar: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    codBarCodif: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    usuarioLog: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    fechaLog: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    ID_sucursal: {
        type:DataTypes.STRING,
        allowNull:true,
    }
  })

  };