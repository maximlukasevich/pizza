const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../models/Admin.js');

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'})
}

const login = async (req, res) => {
  try {
    const {login, password} = req.body;
    const admin = await Admin.findOne({login});
    if (!admin) {
      return res.json({message: 'Користувача не знайдено'});
    }
    if (!bcrypt.compareSync(password, admin.password)) {
      return res.json({message: 'Паролі не співпадають'});
    }
    const token = generateAccessToken({adminId: admin._id});
    return res.status(200).json({
      admin,
      token
    });
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

const auth = async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId);
    if (!admin) {
      return res.json({message: 'Помилка авторизації'});
    }
    const token = generateAccessToken({adminId: admin._id});
    return res.status(200).json({
      admin,
      token
    });
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }
}

module.exports = {
  login,
  auth
}