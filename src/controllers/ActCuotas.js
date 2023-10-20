const { Fee } = require('../models/index')

const addBdFee = async (req, res) => {
  try {
    const bd = req.body;

    const result = await Promise.all(
      bd.map(async (el) => {
        // Verifica si el elemento ya existe en la base de datos
        const existingItem = await Fee.findOne({
          where: { id: el.id },
        });

        if (existingItem) {
          // Actualiza el registro con los valores del elemento bd
          await existingItem.update(el);
          return { action: 'update', id: el.id };
        } else {
          // Crea un nuevo registro en la base de datos
          const createdItem = await Fee.create(el);
          return { action: 'create', id: createdItem.id };
        }
      })
    );
    //Guardo los registros para dar respuesta 
    const updatedItems = result.filter((item) => item.action === 'update');
    const createdItems = result.filter((item) => item.action === 'create');
    const responseMessage = {
      message: 'Sincronización completada',
      updatedItems,
      createdItems,
    };

    res.status(200).send(responseMessage);
  } catch (error) {
    console.log('Algo salió mal:', error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};


module.exports = {
  addBdFee
}