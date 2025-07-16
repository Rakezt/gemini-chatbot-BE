const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ChatUser = require('../models/chatUser');

const router = express.Router();
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (await ChatUser.findOne({ username })) {
      return res.status(400).json({ error: 'User already exist' });
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = new ChatUser({ username, passwordHash: hash });
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registraion failed' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await ChatUser.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid User' });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid Password' });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '10d' });
    res.json({
      token,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
