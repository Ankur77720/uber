const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { body } = require('express-validator')
const { authUser } = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isString().withMessage('First name must be a string'),
    body('fullname.lastname').isString().withMessage('Last name must be a string'),
    body('password').isString().withMessage('Password must be a string')
],
    userController.register
)

router.post('/login',
    [
        body('email').isEmail().withMessage('Please enter a valid email address'),
        body('password').isString().withMessage('Password must be a string')
    ],
    userController.login
)

router.get('/profile', authUser, userController.profile)

module.exports = router;