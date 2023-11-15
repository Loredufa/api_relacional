const { Router } = require('express');
const {getDbcuotas} = require('../controllers/RedisCuotas2');
const router = Router();

router.get('/', getDbcuotas)



module.exports = router;