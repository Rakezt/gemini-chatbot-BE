const express = require('express');
const router = express.Router();
const { askGemini } = require('../controllers/chatController');
const Message = require('../models/chatBotMessage');

router.post('/ask', askGemini);

router.get('/history', async (req, res) => {
  try {
    const messages = await Message.find({ user: req.userId }).sort({
      timestamp: 1,
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching history' });
  }
});
router.post('/history', async (req, res) => {
  const { text, sender } = req.body;
  try {
    const newMsg = await Message.create({
      user: req.userId,
      sender: sender,
      text: text,
      timestamp: new Date(),
    });
    res.json(newMsg);
  } catch (error) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

module.exports = router;
