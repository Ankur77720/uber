const userModel = require('../models/user.model');


async function registerUser({ firstname, lastname, email, password }) {

    console.log(firstname, lastname, email, password)

    if (!firstname || !lastname || !email || !password) {
        throw new Error("All fields are required")
    }

    const hashedPassword = await userModel.hashPassword(password)

    const newUser = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashedPassword
    })

    return newUser

}



module.exports = {
    registerUser
}


