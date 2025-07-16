# 🤖 Rakezt‑Bot API Server

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js)](https://nodejs.org)  
[![Express](https://img.shields.io/badge/Express-000000?logo=express)](https://expressjs.com)  
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)](https://www.mongodb.com)  
[![JWT](https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens)](https://jwt.io)  

🔗 **API Docs / Live:** ([URL](https://gemini-chatbot-be.onrender.com))

---

### 🚀 Features

- **User auth**: register & login with bcrypt‑hashed passwords  
- **Protected routes** using JWT middleware  
- **Chat history** per user in MongoDB  
- **Gemini AI** integration for bot replies  
- **RESTful API** with clear endpoints  

---

### 🧱 Endpoints

| Method | Path                | Description                                   |
|--------|---------------------|-----------------------------------------------|
| POST   | `/api/auth/register`| Create a new user                             |
| POST   | `/api/auth/login`   | Login & receive JWT                           |
| GET    | `/api/chat/history` | Fetch messages for the authenticated user     |
| POST   | `/api/chat/history` | Save a new message (user or bot)              |
| POST   | `/api/chat/ask`     | Generate bot reply via Gemini & return `{reply}` |

---

### 🧰 Tech Stack

| Layer        | Technology                                 |
|--------------|---------------------------------------------|
| Runtime      | Node.js                                     |
| Framework    | Express                                     |
| Database     | MongoDB + Mongoose                          |
| Auth         | JWT + bcrypt                                |
| AI           | Google Gemini via REST API                  |
| Config       | `dotenv`                                    |

---

### 💡 How It Works

Registration → saves username + passwordHash

Login → verifies hash + issues JWT

Auth Middleware → protects /api/chat routes

Chat History → saved & fetched per user

Ask Endpoint → forwards user message to Gemini API, receives { reply }, returns to client


—  
Feel free to copy these templates into `README.md` files in your **frontend** and **backend** repos, fill in your hosting URLs, and you’ll have a vibrant, informative project showcase ready for GitHub.

