const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  const authHeader = req.header('Authorization') || '';
  const token = authHeader.replace('Bearer', '').trim();
  if (!token) return res.status(401).json({ error: 'No Token Provided' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch (err) {
    res.status(500).json({ error: 'Invalid Token' });
  }
};
module.exports = auth;
