const { addBdContract } = require('./ActContratos');
const { addBdFee } = require('./ActCuotas');
const { addBdPassenger } = require('./ActPasajeros');

const sincronizacion = async () => {
  try {
    const sync_contratos = await addBdContract();
    const sync_cuotas = await addBdFee();
    const sync_pasajeros = await addBdPassenger();
    console.log(sync_contratos, sync_cuotas, sync_pasajeros );
  } catch (error) {
    console.log("Algo salió mal: ", error);
  }

  // Espera antes de ejecutar la función nuevamente
  setTimeout(sincronizacion, 6000); // 60,000 milisegundos (1 minuto)
};

module.exports = {
  sincronizacion
};
