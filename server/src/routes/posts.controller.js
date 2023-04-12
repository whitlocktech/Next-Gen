const {
    getAllPosts, 
} = require('../models/posts.model')

function httpGetAllPosts(req, res) {
    return res.status(200).json(getAllPosts())
}

module.exports = {
    httpGetAllPosts
}