const express = require('express')
const { 
    httpGetAllPosts,
    httpAddNewPost,
    httpUpdatePost
} = require('./posts.controller')

const postsRouter = express.Router()

postsRouter.get('/', httpGetAllPosts)
postsRouter.post('/', httpAddNewPost)
postsRouter.post('/update', httpUpdatePost)

module.exports = postsRouter

