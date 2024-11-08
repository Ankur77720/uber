const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            minlength: [ 3, 'Firstname must be at least 3 characters' ],
            maxlength: [ 50, 'Firstname must be at most 50 characters' ],
            required: [ true, 'Firstname is required' ]
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Lastname must be at least 3 characters' ],
            maxlength: [ 50, 'Firstname must be at most 50 characters' ],
        }
    },
    email: {
        type: String,
        unique: [ true, 'Email already exists' ],
        required: [ true, 'Email is required' ],
        minlength: [ 8, 'Email must be at least 8 characters' ],
    },
    password: {
        type: String,
    },
})


userSchema.statics.hashPassword = async function (password) {

    return await bcrypt.hash(password, 10)

}

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password)

}

userSchema.methods.generateToken = function () {

    return jwt.sign({ id: this._id }, process.env.JWT_SECRET)

}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;