const jwt = require('jsonwebtoken');

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

module.exports = { requireAuth };