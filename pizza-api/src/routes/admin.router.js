const { Router } = require('express');
const router = Router();

const adminController = require('../controllers/admin.controller');
const authCheck = require('../middlewares/auth.middleware');

router.get('/', authCheck,  adminController.getAdmins);
router.get('/:login', authCheck, adminController.getAdmin);
router.post('/', authCheck, adminController.createAdmin);

module.exports = router;