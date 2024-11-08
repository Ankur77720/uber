const mongoose = require("mongoose");


const locationSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    
    latitude: {
        type: Number,
        required: [ true, "Latitude is required" ],
    },
    longitude: {
        type: Number,
        required: [ true, "Longitude is required" ],
    },
})

const Location = mongoose.model("location", locationSchema);


module.exports = Location;