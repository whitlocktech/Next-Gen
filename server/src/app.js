const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const api = require('./routes/api')
const passport = require('passport')
const helmet = require('helmet')
require('./services/passport')
const cookieSession = require('cookie-session')
const { verify } = require('crypto')
require('dotenv').config()

const config = {
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((user, done) => {
    done(null, user.id)
})


const app = express()

app.use(helmet())

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}))

app.use(morgan('combined'))
app.use(passport.initialize())
//app.use(passport.session())

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/v1', api)
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, '..', 'public', 'index.html'))
    // Sets all paths not named in the server to be set to be handled by the frontend
})

module.exports = app