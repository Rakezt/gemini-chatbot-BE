# 🧠 Rakezt‑Bot API Server

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)](https://www.mongodb.com)
[![JWT](https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens)](https://jwt.io)

🔗 **Live URL:** _[[Link](https://gemini-chatbot-be.onrender.com)]_

---

### 📖 Introduction

This backend service powers **Rakezt‑Bot**, a Gemini-powered AI chatbot. It manages user authentication, stores chat history in MongoDB, and routes messages to the Gemini API for generating AI responses.

---

### ✨ Features

- 🔐 **Secure Authentication** using JWT
- 🧾 **Message History API** (GET & POST)
- 💡 **AI Integration** with Gemini API
- 🗂️ **MongoDB Data Storage** via Mongoose
- ✅ **Protected Routes** using middleware
- 📦 **Clean API Structure** for frontend communication

---

### 🧰 Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Runtime     | Node.js                            |
| Server      | Express.js                         |
| Database    | MongoDB (via Mongoose)             |
| Auth        | JWT & bcrypt                       |
| AI Service  | Google Gemini API                  |
| Config      | `dotenv` for environment handling  |

---

### 📡 API Endpoints Overview

| Method | Endpoint             | Description                            |
|--------|----------------------|----------------------------------------|
| POST   | `/api/auth/register` | Registers a new user                   |
| POST   | `/api/auth/login`    | Authenticates user and returns token  |
| GET    | `/api/chat/history`  | Returns all messages for the user     |
| POST   | `/api/chat/history`  | Saves a message to DB                 |
| POST   | `/api/chat/ask`      | Sends message to Gemini API and returns reply |

---

### 🧠 Message Lifecycle

1. User sends a message to `/chat/ask`
2. Server sends request to Gemini API with user message
3. Gemini generates a response and returns it
4. Both user and bot messages are saved to MongoDB
5. `/chat/history` provides a complete conversation log

---
