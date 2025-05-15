const User = require('../models/authModel')

const handleErrors = (err) => {
    // console.log()
    // console.log(err)
    // console.log()
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'That email is already registered'
        return errors
    }
    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}   


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
        // res.send(error)
        // console.log(error)
        const errors = handleErrors(error)
        // res.status(400).json({ error: error.message })
        res.status(400).json(errors)
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