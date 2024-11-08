const mongoose = require('mongoose');


const captainSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [ true, "Email is required" ],
        minlength: [ 6, "Email must be at least 6 characters" ],
        maxlength: [ 25, "Email must be at most 25 characters" ],
        unique: true,
    },
    fullname: {
        firstname: {
            type: String,
            required: [ true, "Firstname is required" ],
            minlength: [ 3, "Firstname must be at least 3 characters" ],
            maxlength: [ 25, "Firstname must be at most 25 characters" ],
        },
        lastname: {
            type: String,
            required: [ true, "Lastname is required" ],
            minlength: [ 3, "Lastname must be at least 3 characters" ],
            maxlength: [ 25, "Lastname must be at most 25 characters" ],
        },
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
    },
    license: {
        type: String,
        required: [ true, "License is required" ],
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
    },
    status: {
        type: String,
        enum: [ "active", "inactive" ],
        default: "inactive",
    },
    rating: {
        type: Number,
        default: 0,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "location",
    },
})


captainSchema.methods.hashPassword = function (password) {
    const hashPassword = bcrypt.hash(password, 10);
}

captainSchema.methods.comparePassword = function (password) {
    const isMatch = bcrypt.compare(password, this.password);
    return isMatch;
}

captainSchema.methods.generateToken = function () {
    const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET);
    return token;
}


const Captain = mongoose.model("captain", captainSchema);

module.exports = Captain;