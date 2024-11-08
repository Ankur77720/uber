const captainModel = require('../models/captain.model');
const vehicleModel = require('../models/vehicle.model');


async function registerCaptain({ firstname, lastname, email, password, license, vehicle }) {

    console.log({ firstname, lastname, email, password, license, vehicle })


    if (!firstname || !lastname || !email || !password || !license || !vehicle) {
        throw new Error("All fields are required")
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const newCaptain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashedPassword,
        license,
        vehicle
    })

    return newCaptain

}

async function registerVehicle({
    licencePlate, vehicleType, color, capacity
}) {

    if (!licencePlate || !vehicleType || !color || !capacity) {
        throw new Error("All fields are required")
    }

    const newVehicle = await vehicleModel.create({
        licencePlate,
        vehicleType,
        color,
        capacity
    })

    return newVehicle

}


module.exports = {
    registerCaptain,
    registerVehicle
}