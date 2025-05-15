const User = require('../models/authModel')
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
    // console.log()
    // console.log(err)
    // console.log()
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered'
        return errors
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is incorrect'
        return errors
    }

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

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


signup_get = (req, res) => {
    res.render('signup')
}
login_get = (req, res) => {
    res.render('login')
}
signup_post = async (req, res) => {
    const { email, password } = req.body
    // console.log(email, password)
    // res.send(req.body)
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.status(201).json(user)
    } catch (error) {
        // res.send(error)
        // console.log(error)
        const errors = handleErrors(error)
        // res.status(400).json({ error: error.message })
        res.status(400).json({ errors })
    }
}
login_post = async (req, res) => {
    const { email, password } = req.body

    try {
        console.log(email, password)
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).json({ user: user._id })
    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({ errors })
    }

}

logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}

module.exports = {
    signup_get,
    login_get,
    signup_post,
    login_post,
    logout_get
}