const { Router } = require('express');
const {addBdPassenger} = require('../controllers/ActPasajeros');
const router = Router();

router.post('/', addBdPassenger)



module.exports = router;