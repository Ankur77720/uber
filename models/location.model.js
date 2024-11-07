import mongoose from "mongoose";


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
    Captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "captain",
    },
})

const Location = mongoose.model("location", locationSchema);