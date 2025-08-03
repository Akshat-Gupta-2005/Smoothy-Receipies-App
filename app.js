const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(checkUser);


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI)
  .then(() => app.listen(PORT, () => {
    console.log(`\n🚀 Server is running at: http://localhost:${PORT}\n`);
  }))
  .catch ((err) => console.log('DB connection error:', err));

// routes 
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

app.get('/set-cookies', (req, res) => {
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  // res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, secure: true });
  res.send('You got the cookies!');
})

app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});