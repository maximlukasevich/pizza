const bcrypt = require('bcrypt');

const adminService = require('../services/admin.service');

const getAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAdmins();
    return res.status(200).json(admins);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const getAdmin = async (req, res) => {
  try {
    const {login} = req.params;
    const admin = await adminService.getAdmin(login);
    return res.status(200).json(admin);
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const createAdmin = async (req, res) => {
  try {
    const {login, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const admin = {
      login,
      password: hashPassword
    }
    const created = await adminService.createAdmin(admin);
    if (!created) {
      return res.status(400).json({message: 'Помикла створення, можливо такий логін вже зайнятий'});
    }
    return res.status(200).json({message: 'Адміна створено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const changePassword = async (req, res) => {
  try {
    const {oldPassword, newPassword} = req.body;
    const admin = await Admin.findById(req.adminId);
    if (!admin) {
      return res.status(400).json({message: 'Адміна не знайдено'});
    }
    if (!bcrypt.compareSync(oldPassword, admin.password)) {
      return res.status(401).json({message: 'Старий пароль не вірний'});
    }
    const hashPassword = bcrypt.hashSync(newPassword, 10);
    admin.password = hashPassword;
    await admin.save();
    return res.status(200).json({message: 'Пароль змінено'});
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

module.exports = {
  getAdmins,
  getAdmin,
  createAdmin,
}