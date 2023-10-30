const { Fee } = require('../models/index')
const { getConnection } = require('../database/connection');

const addBdFee = async (req,res) => {
  try {
    //conecta con la bd de SQL Server
    const pool = await getConnection();
    //Trae la información de la tabla contratos
    const result = await pool.request().query("SELECT * FROM CUOTAS");
    const bd = result.recordset

    // Convierte los datos a formato JSON para ser compatible con la bs Postgres
    const jsonData = bd.map((el) => {
      return {
        contrato_cuyen : el.CUO_CONTRATO.toString(),
        numPass: el.CUO_NUMPAS.toString(),
        numCuota: el.CUO_NUMCUO ? el.CUO_NUMCUO.toString() : '',
        importe: el.CUO_IMPORTE ? el.CUO_IMPORTE.toString() : '',
        cancelado: el.CUO_CANCELADO ? el.CUO_CANCELADO.toString() : '',
        liberado: el.CUO_LIBERADO ? el.CUO_LIBERADO.toString() : '',
        facturado: el.CUO_FACTURADO ? el.CUO_FACTURADO.toString() : '',
        pagada: el.CUO_PAGADA ? el.CUO_PAGADA.toString() : '',
        pendiente: el.CUO_PENDIENTE ? el.CUO_PENDIENTE.toString() : '',
        vencimiento: el.CUO_VENCIMIENTO ? el.CUO_VENCIMIENTO.toString() : '',
        fechaPag: el.CUO_FECHAPAG ? el.CUO_FECHAPAG.toString() : '',
        saldo: el.CUO_SALDO ? el.CUO_SALDO.toString() : '',
        codBar: el.CUO_CODBAR ? el.CUO_CODBAR.toString() : '',
        codBarCodif: el.CUO_CODBARCODIF ? el.CUO_CODBARCODIF.toString() : '',
        usuarioLog: el.USUARIOLOG ? el.USUARIOLOG.toString() : '',
        fechaLog: el.FECHALOG ? el.FECHALOG.toString() : '',
        ID_sucursal: el.ID_SUCURSAL ? el.ID_SUCURSAL.toString() : ''
      };
    });
    const newTable = await Promise.all (
      jsonData.map ( async (el)=> {
// Verifica si el eleme.numPass
        const existingItem = await Fee.findOne({
           where: { 
            contrato_cuyen: el.contrato_cuyen,
            numPass: el.numPass,
            numCuota : el.numCuota
           }
         });
        //Si existe actualiza los datos de POstgres tal cual estan en SQL Server
        if(existingItem) {
          await existingItem.update(el) 
          return { action: 'update', contrato_cuyen: el.contrato_cuyen};
        } else { //Si no existe lo creo
          await Fee.create(el)
          return { action: 'create', contrato_cuyen: el.contrato_cuyen }
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
    return responseMessage;
  } catch (error) { console.log("Algo salio mal: ", error); 

}
}


module.exports = {
  addBdFee
}