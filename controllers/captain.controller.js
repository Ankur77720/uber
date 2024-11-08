const captainService = require('../services/captain.service');
const captainModel = require('../models/captain.model');
const { validationResult } = require("express-validator")



module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, license, vehicle } = req.body

    try {

        const newVehicle = await captainService.registerVehicle(vehicle)
        const newCaptain = await captainService.registerCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password,
            license,
            vehicle: newVehicle._id
        })

        const token = newCaptain.generateToken()

        res.status(201).json({ token, captain: newCaptain })

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

        const captain = await captainModel.findOne({ email })


        if (!captain) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        const isMatch = await captain.comparePassword(password)

        console.log({ isMatch })

        if (!isMatch) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        const token = captain.generateToken()

        res.status(200).json({ token, captain })

    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }

}