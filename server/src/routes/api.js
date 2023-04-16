const express = require('express')

const postsRouter = require('./posts/posts.router')

const api = express.Router()

api.use('/posts', postsRouter)

module.exports = api