import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
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
    }
})


userSchema.methods.hashPassword = function (password) {
    const hashPassword = bcrypt.hash(password, 10);
}


userSchema.methods.comparePassword = function (password) {
    const isMatch = bcrypt.compare(password, this.password);
    return isMatch;
}


userSchema.methods.generateToken = function () {
    const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET);
    return token;
}


const User = mongoose.model("user", userSchema);


export default User;