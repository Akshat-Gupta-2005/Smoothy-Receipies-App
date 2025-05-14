const User = require('../models/authModel')

signup_get =  (req, res) => {
    res.render('signup')
}
login_get =  (req, res) => {
    res.render('login')
}
signup_post =  async (req, res) => {
    const { email, password } = req.body
    // console.log(email, password)
    // res.send(req.body)
    try {
        const user = await User.create({ email, password })
        // const user = "hi"
        console.log(user)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
login_post =  (req, res) => {
    res.send('login')
}

module.exports = {
    signup_get,
    login_get,
    signup_post,
    login_post
}