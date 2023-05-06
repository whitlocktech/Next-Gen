const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const bcrypt = require('bcrypt')

const userSchema = require('./user.mogo')

userSchema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err)
            }
            user.password = hash
            user.salt = salt
            next()
        })
    })
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User