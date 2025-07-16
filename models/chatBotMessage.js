const mongoose = require('mongoose');
const chatUser = require('./chatUser');

const chatBotMessageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: chatUser, required: true },
  sender: { type: String, enum: ['user', 'bot'], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatBotMessage', chatBotMessageSchema);
