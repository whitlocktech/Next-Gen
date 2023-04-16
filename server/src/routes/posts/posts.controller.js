const {
    getAllPosts, 
} = require('../../models/posts.model')

const {
    getPagination
} = require('../../services/query')

async function httpGetAllPosts(req, res) {
    return res.status(200).json(await getAllPosts())
}

module.exports = {
    httpGetAllPosts
}