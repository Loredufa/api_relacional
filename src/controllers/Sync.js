const { addBdContract } = require('./ActContratos');


const sync = async () => {
    try {
      // Esperar 1 minuto antes de ejecutar la función
      setTimeout(async () => {
        const sincronizacion = await addBdContract();
        return sincronizacion, 
        console.log(sincronizacion),
        // Llamar a la función nuevamente para que se ejecute en un bucle
        sync();
      }, 6000); // 60,000 milisegundos (1 minuto)
    } catch (error) {
      console.log("Algo salió mal: ", error);
    } 
  };


module.exports = {
    sync
}