const { Router } = require('express');
const router = Router();

const auth = require('../routes/auth.router');
const admin = require('../routes/admin.router');
const pizza = require('../routes/pizza.router');
const orders = require('../routes/order.router');

router.use('/auth', auth);
router.use('/admins', admin);
router.use('/pizza', pizza);
router.use('/orders', orders);

module.exports = router;