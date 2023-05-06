const express = require('express')
const passport = require('passport')

const oauth2Router = express.Router()

oauth2Router.get('/google',
    passport.authenticate('google', {
        scope: ['email'],
    })
)

oauth2Router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: true
    }), (req, res, next) => {
        console.log('Google Called Us back')
    }
)
//I do not think this is needed since it works the same as the local logout i think
// oauth2Router.get('/logout', (req, res) => {
//     req.logout()
//     return res.redirect('/')
// })

module.exports = oauth2Router