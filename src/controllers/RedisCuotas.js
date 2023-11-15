const { getConnection } = require('../database/connection');
const { redisClient } = require('../utils/redisClient')

const getDb = async (req, res) => {
  try {
    const pool = await getConnection();
    if (!pool) {
      console.log('Error: No se pudo conectar a la base de datos SQL Server');
      return res.status(500).json({ message: 'Error de conexión a la base de datos SQL Server' });
    }

    const result = await pool.request().query("SELECT * FROM CONTRATOS");
    const bd = result.recordset;

    console.log('Almacenando datos en Redis...');
    await redisClient.set('CONTRATOS', JSON.stringify(bd));
    console.log('Datos almacenados en Redis correctamente.');
    res.status(200).json(bd);

      } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).json({ error: 'Algo salió mal durante la sincronización' });
  }
};

module.exports = {
  getDb
};





