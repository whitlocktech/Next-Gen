const API_URL = 'http://localhost:5100/v1'

async function httpGetAllPosts() {
    const response = await fetch(`${API_URL}/posts`)
    return await response.json()
}

async function httpAddNewPost(post) {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
    return await response.json()
}

async function httpUpdatePost(post) {
    const response = await fetch(`${API_URL}/posts/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
    return await response.json()
}

async function httpGetPostByTitle(title) {
    const response = await fetch(`${API_URL}/posts/${title}`)
    return await response.json()
}

export { httpGetAllPosts, httpAddNewPost, httpUpdatePost, httpGetPostByTitle }