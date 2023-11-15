const redis = require('redis');
const { promisify } = require('util');
const {url_redis} = require('./config/index')

const redisClient = redis.createClient({ url: url_redis });

redisClient.on('error', (error) => console.error(`Error en Redis Client: ${error}`));

// Promisifying Redis quit function for graceful shutdown
const quitAsync = promisify(redisClient.quit).bind(redisClient);

// Inicializar la conexión a Redis
(async () => {
  try {
    await redisClient.connect();
    console.log('Conexión a Redis establecida correctamente.');
  } catch (error) {
    console.error('Error al intentar conectar a Redis:', error);
    process.exit(1);
  }
})();

// Exportar el cliente Redis
module.exports = {
  redisClient,
  quitAsync,
};
