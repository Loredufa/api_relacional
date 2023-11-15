const { Router } = require('express');
const {getDb} = require('../controllers/RedisCuotas');
const router = Router();

router.get('/', getDb)



module.exports = router;