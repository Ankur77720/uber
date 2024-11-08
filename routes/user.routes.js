const express = require('express')
const router = express.Router()
const userCOntroller = require('../controllers/user.controller')
const { body } = require('express-validator')


router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isString().withMessage('First name must be a string'),
    body('fullname.lastname').isString().withMessage('Last name must be a string'),
    body('password').isString().withMessage('Password must be a string')
],
    userCOntroller.register
)


module.exports = router;