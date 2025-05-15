const jwt = require('jsonwebtoken');
const User = require('../models/authModel');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        res.redirect('/login');
        // return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.redirect('/login');
            //   return res.status(401).json({ message: 'Unauthorized' });
        } else {
            console.log(decoded);
            // req.user = decoded;
            next();
        }
    });
}

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        // console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } 
  else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth , checkUser};