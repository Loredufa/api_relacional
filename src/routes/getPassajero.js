const { Router } = require('express');
const {getDbPessenger} = require('../controllers/RedisPasajeros');
const router = Router();

router.get('/', getDbPessenger)



module.exports = router;