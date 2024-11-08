const mongoose = require('mongoose');


async function connectToDB() {

    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URL)


        console.log('Connected to database')

        return dbConnection

    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB;