const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('contract', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      },
    
    fecha: {
      type:DataTypes.STRING,
      allowNull:false
    },
    curso: {
      type:DataTypes.STRING,
      allowNull:true
    },
    division: {
      type:DataTypes.STRING,
      allowNull:true
    },
    turno: {
       type:DataTypes.STRING,
       allowNull:true
    },
    colegio: {
        type:DataTypes.STRING,
        allowNull:true
    }, 
    pasajeros: {
        type:DataTypes.STRING,
        allowNull:true
    },      
    mes: {
        type:DataTypes.STRING,
        allowNull:true
    },
    año: {
        type:DataTypes.STRING,
        allowNull:true
    },
    periodo: {
        type:DataTypes.STRING,
        allowNull:true
    },
    destino: {
        type:DataTypes.STRING,
        allowNull:true
    },
    impTot: {
        type:DataTypes.STRING,
        allowNull:true
    },
    canc: {
        type:DataTypes.STRING,
        allowNull:true
    },
    realiz: {
        type:DataTypes.STRING,
        allowNull:true
    },
    hotel: {
        type:DataTypes.STRING,
        allowNull:true
    },
    duracion: {
        type:DataTypes.STRING,
        allowNull:true
    },
    fechaFirma: {
        type:DataTypes.STRING,
        allowNull:true
    },
    fechaViaje: {
        type:DataTypes.STRING,
        allowNull:true
    },
    ImpTotAct: {
        type:DataTypes.STRING,
        allowNull:true
    },
    fechaActu: {
        type:DataTypes.STRING,
        allowNull:true
    },
    usuarioLog: {
        type:DataTypes.STRING,
        allowNull:true
    },
    fechaLog: {
        type:DataTypes.STRING,
        allowNull:true
    },
    id_sucursal: {
        type:DataTypes.STRING,
        allowNull:true
    },  
    id_periodo: {
        type:DataTypes.STRING,
        allowNull:true
    },
    id_cotizacion: {
        type:DataTypes.STRING,
        allowNull:true
    }
  })
  };