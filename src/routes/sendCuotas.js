const { Router } = require('express');
const {addBdFee} = require('../controllers/ActCuotas');
const router = Router();

router.post('/', addBdFee)



module.exports = router;