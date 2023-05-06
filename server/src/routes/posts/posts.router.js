const express = require('express')
const { 
    httpGetAllPosts,
    httpAddNewPost,
    httpUpdatePost,
    httpGetPostByTitle,
} = require('./posts.controller')
const {
    adminOnly,
    adminOrModerator
} = require('../users/user.controller')

const postsRouter = express.Router()

postsRouter.get('/', httpGetAllPosts)
postsRouter.post('/', adminOrModerator, httpAddNewPost)
postsRouter.post('/update', adminOrModerator, httpUpdatePost)
postsRouter.get('/:title', httpGetPostByTitle)

module.exports = postsRouter

