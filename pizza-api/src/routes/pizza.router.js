const { Router } = require('express');
const router = Router();

const authCheck = require('../middlewares/auth.middleware');
const pizzaController = require('../controllers/pizza.controller');

router.get('/', pizzaController.getAllPizza);
router.get('/:slug', pizzaController.getPizza);
router.post('/', authCheck, pizzaController.createPizza);
router.put('/:slug', authCheck, pizzaController.updatePizza);
router.delete('/:slug', authCheck, pizzaController.deletePizza);

module.exports = router;