const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const cookieSession = require('cookie-session')
require('dotenv').config()
const User = require('../../models/users/user.mogo')

const config = {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
}

async function verifyCallback(accessToken, refreshToken, profile, done) {
    try {
        let user = await User.findById({ email: profile.emails[0].value })
        
        if (user) {
            user.googleId = profile.id
            user = await user.save()
        } else {
            user = await User.create({
                username: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            })
        }

        done(null, user)
    } catch (err) {
        done(err)
    }

}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)
        done(null, user)
    } catch (err) {
        res.status(err)
    }
})

module.exports = passport