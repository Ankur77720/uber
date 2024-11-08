const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');


const authUser = async (req, res, next) => {
    try {

        let token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ]

        if (!token) {
            return res.status(401).json({ error: "Unauthorized" })
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await userModel.findById(decoded.id)

        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" })
        }

        return next()


    } catch (err) {
        console.log(err)
        res.status(401).json({ error: "Unauthorized" })
    }
}


module.exports = {
    authUser
};