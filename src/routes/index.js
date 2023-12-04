const { Router } = require('express');
const router = Router();


const sincContratosRoute = require('./sendContratos');  
const sincCuotasRoute = require('./sendCuotas');  
const sincPasajeroRoute = require('./sendPasajero');  



router.use('/sincContratos', sincContratosRoute)
router.use('/sincCuotas', sincCuotasRoute)
router.use('/sincPasajeroRoute', sincPasajeroRoute)


module.exports = router;