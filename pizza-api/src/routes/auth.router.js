const { Router } = require('express');
const router = Router();

const { login, auth } = require('../controllers/auth.controller');
const authCheck = require('../middlewares/auth.middleware.js');

router.get('/auth', authCheck, auth);
router.post('/login', login);

module.exports = router;