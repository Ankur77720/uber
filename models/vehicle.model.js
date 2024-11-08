const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    licencePlate: {
        type: String,
        required: [ true, "Licence plate is required" ],
        unique: true,
    },
    vehicleType: {
        type: String,
        required: [ true, "Type is required" ],
        enum: [ "car", "motorcycle", "auto" ],
    },
    color: {
        type: String,
        required: [ true, "Color is required" ],
    },
    capacity: {
        type: Number,
        required: [ true, "Capacity is required" ],
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "location",
    },
})



const Vehicle = mongoose.model("vehicle", vehicleSchema);


module.exports = Vehicle;