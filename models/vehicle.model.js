import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    licencePlate: {
        type: String,
        required: [ true, "Licence plate is required" ],
        unique: true,
    },
    type: {
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
})



const Vehicle = mongoose.model("vehicle", vehicleSchema);


export default Vehicle;