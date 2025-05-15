const { Router } = require('express')
const router = Router()
const authController = require('../controllers/authControllers')

router.route('/signup')
    .get(authController.signup_get)
    .post(authController.signup_post)
router.route('/login')
    .get(authController.login_get)
    .post(authController.login_post)
router.get('/logout', authController.logout_get)


module.exports = router