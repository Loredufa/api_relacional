const { Login } = require('../../models/index');


// Middleware para verificar el rol

const pasajero = async (req, res, next) => { 
console.log('SOY EL REQ USERID',req.body)
  const user = await Login.findOne({
    where: {
      usuario: req.body.usuario
    }
  })
  user.rol === 'pasajero' ? next() : 
  res.status(403).send({ message: 'No autorizado'});
}


module.exports = pasajero;