const posts = new Map()

let latestPostId = 1

const post = {
    id: 1,
    title: 'Test Post',
    author: 'Colby',
    content: 'test body',
    published: true,
}

posts.set(post.id, post)

function getAllPosts() {
    return Array.from(posts.values())
}

module.exports = {
    getAllPosts
}