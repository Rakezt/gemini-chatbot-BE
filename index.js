require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middleware/auth.js');
const chatRoutes = require('./routes/chatRoutes.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Err Connecting MongoDB, please check', err));

app.use('/api/auth', authRoutes);
app.use('/api/chat', auth, chatRoutes);

app.get('/api/test', (req, res) => {
  res.send('API working');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
