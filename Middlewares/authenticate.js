const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'mysecret';

const authenticate = (req, res, next) => {
  const token = req.header('x-access-token');

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

module.exports = authenticate;
