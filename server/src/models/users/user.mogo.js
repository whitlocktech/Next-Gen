const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    salt: String,
    email: {
        type: String,
        unique: true,
    },
    givenName: {
        type: String,
    },
    familyName: {
        type: String,
    },
    userRole: {
        type: String,
        enum: ['user', 'moderator', 'administrator'],
        default: 'user'
    },
    googleId: {
        type: String,
        unique: true
    }
})

module.exports = userSchema