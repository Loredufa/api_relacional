const { Passenger } = require('../models/index')
const { redisClient } = require('../utils/redisClient');

const addBdPassenger = async () => { 
  try {
    const bd = await redisClient.get('PASAJEROS');
     // Verificar si bd tiene datos
     if (!bd) {
      console.log('NO HAY PASAJEROS EN REDIS');
      return { message: 'No hay datos para sincronizar' };
    } else {
      console.log('PASAJEROS OBTENIDOS EN REDIS');
    }
    const jsonData = Array.isArray(bd) ? bd : JSON.parse(bd || '[]');

    // Convierte los datos a formato JSON para ser compatible con la bs Postgres
    const jsonNewData = jsonData.map((el) => {
      return {
        contratos : el.PAS_CONTRATO.toString(),
        numPas: el.PAS_NUMPAS.toString(),
        apellido: el.PAS_APELLIDO ? el.PAS_APELLIDO.toString() : '',
        nombre: el.PAS_NOMBRE ? el.PAS_NOMBRE.toString() : '',
        dni: el.PAS_DNI ? el.PAS_DNI.toString() : '',
        tipoDoc: el.PAS_TIPODOC ? el.PAS_TIPODOC.toString() : '',
        fechaNac: el.PAS_FECHANAC ? el.PAS_FECHANAC.toString().split('T')[0] : '', 
        edad: el.PAS_EDAD ? el.PAS_EDAD.toString() : '',
        sexo: el.PAS_SEXO ? el.PAS_SEXO.toString() : '',
        direccion: el.PAS_DIRECCION ? el.PAS_DIRECCION.toString() : '',
        piso: el.PAS_PISO ? el.PAS_PISO.toString() : '',
        depto: el.PAS_DEPTO ? el.PAS_DEPTO.toString() : '',
        localidad: el.PAS_LOCALID ? el.PAS_LOCALID.toString() : '',
        codPos: el.PAS_CODPOS ? el.PAS_CODPOS.toString() : '',
        provinc: el.PAS_PROVINC ? el.PAS_PROVINC.toString() : '',
        telef: el.PAS_TELEF ? el.PAS_TELEF.toString() : '',
        correo: el.PAS_CORREO ? el.PAS_CORREO.toString() : '',
        forma_de_pago: el.PAS_FORMA_DE_PAGO ? el.PAS_FORMA_DE_PAGO.toString() : '',
        importe: el.PAS_IMPORTE ? el.PAS_IMPORTE.toString() : '',
        cuotas: el.PAS_CUOTAS ? el.PAS_CUOTAS.toString() : '',
        resp: el.PAS_RESP ? el.PAS_RESP.toString() : '',
        venCuo: el.PAS_VENCUO ? el.PAS_VENCUO.toString() : '',
        porDes: el.PAS_PORDES ? el.PAS_PORDES.toString() : '',
        flagpf: el.PAS_FLAGPF? el.PAS_FLAGPF.toString() : '',
        celular: el.PAS_CELULAR ? el.PAS_CELULAR.toString() : '',
        flagViaja: el.PAS_FLAGVIAJA ? el.PAS_FLAGVIAJA.toString() : '',
        flagaCompra: el.PAS_FLAGACOMPA ? el.PAS_FLAGACOMPA.toString() : '',
        totContrato: el.PAS_TOTCONTRATO ? el.PAS_TOTCONTRATO.toString() : '',
        usuarioLog: el.USUARIOLOG ? el.USUARIOLOG.toString() : '',
        fechaLog: el.FECHALOG ? el.FECHALOG.toString() : '',
        pasMontoDevuelto: el.PAS_MONTODEVUELTO ? el.PAS_MONTODEVUELTO.toString() : '',
        id_sucursal: el.ID_SUCURSAL ? el.ID_SUCURSAL.toString() : ''
      };
    });
    const newTable = await Promise.all (
      jsonNewData.map ( async (el)=> {
// Verifica si el elemento ya existe en la base de datos Postgres
        const existingItem = await Passenger.findOne({
           where: { 
            contratos: el.contratos,
            numPas: el.numPas
          }, 
         });
        //Si existe actualiza los datos de POstgres tal cual estan en SQL Server
        if(existingItem) {
          await existingItem.update(el) 
          return { action: 'update', numPas: el.numPas, contrato_cuyen:el.contratos };
        } else { //Si no existe lo creo
          await Passenger.create(el)
          return { action: 'create', numPas: el.numPas, contrato_cuyen:el.contratos }
        }
      }     
    ))
    //Guardo los registros para dar respuesta 
    const updatedItems = newTable.filter((item) => item.action === 'update');
    const createdItems = newTable.filter((item) => item.action === 'create');
    const responseMessage = {
      message: 'Sincronización completada',
      updatedItems,
      createdItems,
    };
    //console.log(responseMessage);
    return responseMessage;
  } catch (error) { console.log("Algo salio mal: ", error); 

}
}


module.exports = {
  addBdPassenger
}