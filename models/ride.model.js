const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "captain",
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
    },
    pickup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "location",
        required: [ true, "Pickup location is required" ],
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "location",
        required: [ true, "Destination location is required" ],
    },
    status: {
        type: String,
        enum: [ "pending", "accepted", "completed", "cancelled", "ongoing" ],
        default: "pending",
    },
    fare: {
        type: Number,
        required: [ true, "Fare is required" ],
    },
    rating: {
        type: Number,
        default: 0,
        enum: [ 0, 1, 2, 3, 4, 5 ],
    },
    review: {
        type: String,
        default: "",
    },
    paymentId: {
        type: String,
        default: "",
    },
    orderId: {
        type: String,
        default: "",
    },
    signature: {
        type: String,
        default: "",
    },
});

const Ride = mongoose.model("ride", rideSchema);


module.exports = Ride;