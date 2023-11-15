const { Router } = require('express');
const router = Router();

const bdcuotasRoute = require('./getContratos');
const bdcuotas2Route = require('./getCuotas');    
const bdPasajeroRoute = require('./getPassajero');   

const sincContratosRoute = require('./sendContratos');  
const sincCuotasRoute = require('./sendCuotas');  
const sincPasajeroRoute = require('./sendPasajero');  



router.use('/sincContratos', sincContratosRoute)
router.use('/sincCuotas', sincCuotasRoute)
router.use('/sincPasajeroRoute', sincPasajeroRoute)

router.use('/sqlcuotas', bdcuotasRoute)
router.use('/sql', bdcuotas2Route)
router.use('/sqlpasajero', bdPasajeroRoute)

module.exports = router;