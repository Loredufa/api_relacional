const { addBdContract } = require('./ActContratos');
const { addBdFee } = require('./ActCuotas');
const { addBdPassenger } = require('./ActPasajeros');

const TIME_AUTO = 1 * 60 * 60 * 1000; // 24 horas en milisegundos
const sincronizacion = async () => {
  try {
    const sync_contratos = await addBdContract();
    const sync_cuotas = await addBdFee();
    const sync_pasajeros = await addBdPassenger();

    sync_contratos.message === 'Sincronización completada'? console.log('CONTRATOS ACTUALIZADAS') : console.log('NO SE PUDO ACTULIZAR CONTRATOS')
    sync_cuotas.message === 'Sincronización completada'? console.log('CUOTAS ACTUALIZADAS') : console.log('NO SE PUDO ACTULIZAR CUOTAS')
    sync_pasajeros.message === 'Sincronización completada'? console.log('PASAJEROS ACTUALIZADOS') : console.log('NO SE PUDO ACTULIZAR LOS PASAJEROS')
  } catch (error) {
    console.log("Algo salió mal: ", error);
  }

  // Espera antes de ejecutar la función nuevamente
  setTimeout(sincronizacion, TIME_AUTO); // 60,000 milisegundos (1 minuto)
};

module.exports = {
  sincronizacion
};
