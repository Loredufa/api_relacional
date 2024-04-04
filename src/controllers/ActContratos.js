const { Contract } = require('../models/index');
const { redisClient } = require('../utils/redisClient');

const addBdContract = async () => {
  try {
    const bd = await redisClient.get('CONTRATOS');
    // Verificar si bd tiene datos
    if (!bd) {
      console.log('NO HAY CONTRATOS EN REDIS');
      return { message: 'No hay datos para sincronizar' };
    } else {
      console.log('PASAJEROS OBTENIDOS EN REDIS');
    }
    // Verificar y parsear bd
    const jsonData = Array.isArray(bd) ? bd : JSON.parse(bd || '[]');
    const jsonNewData = jsonData.map((el) => {
      return {
        num : el.CON_NUM.toString(),
        fecha: el.CON_FECHA ? el.CON_FECHA.toString() : '',
        curso: el.CON_CURSO ? el.CON_CURSO.toString() : '',
        division: el.CON_DIVISION ? el.CON_DIVISION.toString() : '',
        turno: el.CON_TURNO ? el.CON_TURNO.toString() : '',
        colegio: el.CON_COLEGIO ? el.CON_COLEGIO.toString() : '',
        pasajeros: el.CON_PASAJEROS ? el.CON_PASAJEROS.toString() : '',
        mes: el.CON_MES ? el.CON_MES.toString() : '',
        año: el.CON_AÑO ? el.CON_AÑO.toString() : '',
        periodo: el.CON_PERIODO ? el.CON_PERIODO.toString() : '',
        destino: el.CON_DESTINO ? el.CON_DESTINO.toString() : '',
        impTot: el.CON_IMPTOT ? el.CON_IMPTOT.toString() : '',
        valor_dolares: el.CON_VALOR_DOLARES ? el.CON_VALOR_DOLARES.toString() : '',
        canc: el.CON_CANC ? el.CON_CANC.toString() : '',
        realiz: el.CON_REALIZ ? el.CON_REALIZ.toString() : '',
        hotel: el.CON_HOTEL ? el.CON_HOTEL.toString() : '',
        duracion: el.CON_DURACION ? el.CON_DURACION.toString() : '',
        fechaFirma: el.CON_FECHAFIRMA ? el.CON_FECHAFIRMA.toString() : '',
        fechaViaje: el.CON_FECHAVIAJE ? el.CON_FECHAVIAJE.toString() : '',
        ImpTotAct: el.CON_IMPTOTACT ? el.CON_IMPTOTACT.toString() : '',
        fechaActu: el.CON_FECHAACTU ? el.CON_FECHAACTU.toString() : '',
        usuarioLog: el.USUARIOLOG ? el.USUARIOLOG.toString() : '',
        fechaLog: el.FECHALOG ? el.FECHALOG.toString() : '',
      };
    });
    //console.log(jsonNewData)
    // Convierte los datos a formato bd Postgres
    const newTable = await Promise.all(
      jsonNewData.map(async (el) => {
        // Verifica si el elemento ya existe en la base de datos Postgres
        const existingItem = await Contract.findOne({
          where: { num: el.num },
        });
        // Si existe actualiza los datos de POstgres tal cual están en SQL Server
        if (existingItem) {
          await existingItem.update(el);
          return { action: 'update', num: el.num };
        } else {
          // Si no existe lo creo
          await Contract.create(el);
          return { action: 'create', num: el.num };
        }
      })
    );
    // Guardo los registros para dar respuesta
    const updatedItems = newTable.filter((item) => item.action === 'update');
    const createdItems = newTable.filter((item) => item.action === 'create');
    const responseMessage = {
      message: 'Sincronización completada',
      updatedItems,
      createdItems,
    };
    //console.log(responseMessage);
    return responseMessage;
  } catch (error) {
    console.log('Algo salió mal: ', error);
    return { message: 'Algo salió mal durante la sincronización' };
  }
};

module.exports = {
  addBdContract,
};
