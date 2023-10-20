const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('passenger', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    contratos: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    
    numPas: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    apellido: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    nombre: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    dni: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    tipoDoc: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    fechaNac: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    edad: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    sexo: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    direccion: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    piso: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    depto: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    localidad: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    codPos: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    provinc: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    telef: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    correo: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    importe: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    cuotas: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    resp: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    venCuo: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    porDesc: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    flagpf: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    celular: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    flagViaja: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    flagaCompra: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    totContrato: {
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
    pasMontoDevuelto: {
        type:DataTypes.STRING,
        allowNull:true,
    },
    id_sucursal: {
        type:DataTypes.STRING,
        allowNull:true,
    }
  })
};