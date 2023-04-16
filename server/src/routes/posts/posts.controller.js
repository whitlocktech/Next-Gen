const {
    getAllPosts,
    saveNewPost 
} = require('../../models/posts.model')

const {
    getPagination
} = require('../../services/query')

async function httpGetAllPosts(req, res) {
    return res.status(200).json(await getAllPosts())
}

async function httpAddNewPost(req, res) {
    const post = req.body

    if (!post.title || !post.author || !post.content || !post.date) {
        return res.status(400).json({
            error: 'Missing require properties'
        })
    }

    post.date = new Date(post.date)
    if (isNaN(post.date)) {
        return res.status(400).json({
            error: 'Invalid Date'
        })
    }

    await saveNewPost(post)
    return res.status(201).json(post)
}

module.exports = {
    httpGetAllPosts,
    httpAddNewPost
}