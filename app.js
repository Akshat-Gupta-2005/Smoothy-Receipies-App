const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
 
// database connection
const dbURI = process.env.DB_URI; 
mongoose.connect(dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.log('DB connection error:', err));

// routes 
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);
 