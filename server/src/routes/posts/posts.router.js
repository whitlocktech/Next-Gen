const express = require('express')
const { 
    httpGetAllPosts,
    httpAddNewPost
} = require('./posts.controller')

const postsRouter = express.Router()

postsRouter.get('/', httpGetAllPosts)
postsRouter.post('/', httpAddNewPost)

module.exports = postsRouter

