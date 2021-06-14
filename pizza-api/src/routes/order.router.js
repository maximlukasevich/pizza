const { Router } = require('express');
const router = Router()

const authCheck = require('../middlewares/auth.middleware');
const orderController = require('../controllers/order.controller');

router.get('/', authCheck, orderController.getOrders);
router.get('/:id', authCheck, orderController.getOrder);
router.post('/', orderController.createOrder);
router.put('/:id', authCheck, orderController.updateOrder);
router.delete('/:id', authCheck, orderController.deleteOrder);

module.exports = router;