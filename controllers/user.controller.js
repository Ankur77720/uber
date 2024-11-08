const userServices = require("../services/user.service")
const userModel = require("../models/user.model")
const { validationResult } = require("express-validator")



module.exports.register = async (req, res, next) => {

    try {


        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { fullname, email, password } = req.body

        const newUser = await userServices.registerUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password
        })
        const token = newUser.generateToken()


        res.status(201).json({ token, user: newUser })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}