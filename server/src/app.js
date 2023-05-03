const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const api = require('./routes/api')
const passport = require('passport')
require('./services/passport')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(morgan('combined'))
app.use(passport.initialize())

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/v1', api)
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, '..', 'public', 'index.html'))
    // Sets all paths not named in the server to be set to be handled by the frontend
})

module.exports = app