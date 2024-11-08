const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const { body } = require('express-validator');



router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isString().withMessage('First name must be a string'),
    body('fullname.lastname').isString().withMessage('Last name must be a string'),
    body('password').isString().withMessage('Password must be a string'),
    body('license').isString().withMessage('license must be a string'),
    body('vehicle.licencePlate').isString().withMessage('vehicle must be a string'),
    body('vehicle.vehicleType').isString().withMessage('vehicle must be a string'),
    body('vehicle.color').isString().withMessage('vehicle must be a string'),
    body('vehicle.capacity').isNumeric().withMessage('vehicle must be a number'),
],
    captainController.registerCaptain
)

router.post('/login',
    [
        body('email').isEmail().withMessage('Please enter a valid email address'),
        body('password').isString().withMessage('Password must be a string')
    ],
    captainController.login
)


module.exports = router;