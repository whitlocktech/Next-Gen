const postsDatabase = require('./posts.mongo')

async function getAllPosts(skip, limit) {
    return await postsDatabase
        .find({}, {'__v':0})

}

async function savePost(post) {
    await postsDatabase.findOneAndUpdate({
        title: post.tile,
    }, post, {
        upsert: true,
    })
}

async function saveNewPost(post) {
    const newPost = Object.assign(post)

    await savePost(newPost)
}

module.exports = {
    getAllPosts,
    saveNewPost
}