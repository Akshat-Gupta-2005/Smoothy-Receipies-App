# Smoothy Receipies App 🍓

A user‑authentication enabled recipe web app built with Node.js, Express, MongoDB, and EJS that lets authenticated users browse, create, and manage recipe entries.

---

## 🚀 Features

- **User Authentication** (sign up, login, logout)
- **Session & Cookie Management** via `cookie-parser`
- **Form Data Validation** using `validator`
- **Role‑based Access Control** (basic authorization logic)
- CRUD operations for recipes: create, read, update, delete
- MVC-style structure with controllers, routes, models, and views

---

## 🛠️ Technology Stack / Libraries Used

| Layer            | Tools / Libraries                        |
|------------------|-------------------------------------------|
| **Backend**      | Node.js, Express                         |
| **Templating**   | EJS                                       |
| **Database**     | MongoDB with Mongoose ODM                |
| **Middleware**   | `cookie-parser`, custom auth middleware   |
| **Validation**   | `validator`                              |
| **Environment**  | `dotenv` (if applicable for config vars) |
| **Styling**      | CSS                                       |

---

## 📂 Project Structure

```
/
├── app.js                # Application entry point
├── controllers/          # Controller logic for users & recipes
├── models/               # Mongoose schema definitions
├── routes/               # Express routing layer
├── middleware/           # Auth & validation middleware
├── views/                # EJS templates (UI)
├── public/               # Static assets (CSS, images)
├── package.json
└── README.md
```

---

## 🔧 Setup and Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/Akshat-Gupta-2005/Smoothy-Receipies-App.git
   cd Smoothy-Receipies-App
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Configure environment variables  
   - Create a `.env` file (if used for DB connection URI, session secret, etc.)

4. Start the server  
   ```bash
   npm start
   ```
   - Access via `http://localhost:3000` (default port in `app.js`)

---

## 📡 API Documentation

### **Auth Endpoints**

- **POST /signup** – Register a new user  
  **Body:** `username`, `email`, `password`  
  **Success:** Redirect to login or dashboard

- **POST /login** – Authenticate existing user  
  **Body:** `email`, `password`  
  **Success:** Sets cookie and redirects to recipe listing

- **GET /logout** – Clear session cookie and log out user

### **Recipe Endpoints** (protected routes)

- **GET /recipes** – View all recipes  
- **GET /recipes/new** – Show form to add a new recipe  
- **POST /recipes** – Create a recipe (requires valid input)  
- **GET /recipes/:id** – View a specific recipe  
- **GET /recipes/:id/edit** – Edit form (authorization required)  
- **POST /recipes/:id/edit** – Submit recipe edits  
- **POST /recipes/:id/delete** – Delete a recipe (authorization required)

> *Middleware blocks unauthenticated attempts and ensures only owner can edit/delete recipes.*

---

## 🔒 Authentication & Validation Design

- Uses **cookie-based sessions** to track logged‑in users, with `cookie-parser`.
- **Validator** ensures correct format for email, non-empty fields, password strength.
- **Auth middleware**:
  - Redirects unauthenticated users for protected routes
  - Checks recipe ownership before edit/delete operations

---

## 📈 Why This Project Is Good for a Portfolio

- Demonstrates full **end‑to‑end web development workflow**: backend, database, templating, and frontend.
- Highlights mastery of **security fundamentals**—authentication, authorization, data validation.
- Shows **clean architecture**, modular organization following MVC pattern.
- Easily extendable and scalable—good foundation for adding REST APIs, file uploads, or frontend frameworks.

---

## ✅ How To Explore

- Fork and clone the repo to your local machine.
- Install packages and configure environment settings.
- Register a user account and add sample recipes.
- Try security edge cases (e.g., editing someone else’s recipe) to showcase validation and auth logic.

---

## 📞 Contact & Further Info

Built by **Akshat Gupta**, a passionate MERN Stack developer.  
Perfect for showcasing your backend and authentication skills to potential employers.

Feel free to customize any sections for portfolio styling, screenshots, or a live demo link!

---

### 📝 References  
• Repository structure and stats verified via GitHub UI ([github.com](https://github.com/Akshat-Gupta-2005/Smoothy-Receipies-App?utm_source=chatgpt.com))  
• Tech stack and features (cookie-parser, validator, Express, EJS, MVC) identified by auto‑analysis and file layout ([github.com](https://github.com/Akshat-Gupta-2005/Smoothy-Receipies-App?utm_source=chatgpt.com))


### Concepts Learned:
- Cookies
- Validation
- Authentication
- Authorisation

