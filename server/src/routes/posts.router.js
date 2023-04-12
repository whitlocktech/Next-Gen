const express = require('express')
const { 
    httpGetAllPosts
} = require('./posts.controller')

const postsRouter = express.Router()

postsRouter.get('/', httpGetAllPosts)

module.exports = postsRouter

