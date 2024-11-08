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


module.exports.login = async (req, res, next) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body


        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        const token = user.generateToken()

        res.status(200).json({ token, user })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}

module.exports.profile = async (req, res, next) => {

    try {
        res.status(200).json({ user: req.user })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}