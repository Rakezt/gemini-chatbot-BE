const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const chatUserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, requried: true },
  createdAt: { type: Date, default: Date.now() },
});

chatUserSchema.methods.verifyPassword = (pwd) => {
  return bcrypt.compare(pwd, this.passwordHash);
};

module.exports = mongoose.model('chatUser', chatUserSchema);
