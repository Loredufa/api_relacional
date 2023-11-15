const { Router } = require('express');
const {addBdContract} = require('../controllers/ActContratos');
const router = Router();

router.post('/', addBdContract)



module.exports = router;