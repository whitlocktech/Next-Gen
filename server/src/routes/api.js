const express = require('express')

const postsRouter = require('./posts/posts.router')
const authRouter = require('./users/user.router')

const api = express.Router()

api.use('/posts', postsRouter)
api.use('/auth', authRouter)

module.exports = api