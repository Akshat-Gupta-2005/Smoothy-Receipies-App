const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://geminiakshatgupta:Akshat123@mycluster.adnqvww.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster'; // Make sure this is correct and DNS-resolvable
mongoose.connect(dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.log('DB connection error:', err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

