const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS') {
      next();
    }
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
    if (decodedToken._id) {
      return res.status(403).json({message: 'Доступ заборонено'});
    }
    req.adminId = decodedToken.adminId;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).send('Auth middleware error');
  }
}

module.exports = authCheck;

