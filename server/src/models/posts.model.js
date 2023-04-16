const postsDatabase = require('./posts.mongo')

async function getAllPosts(skip, limit) {
    return await postsDatabase
        .find({}, {})

}

module.exports = {
    getAllPosts
}