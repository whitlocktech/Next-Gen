import axios from 'axios'

const API_BASE_URL = "http://localhost:3000/v1"

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch posts', error)
  }
}

const loginUser = async () = {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`)
    return response
  } catch(error) {
    throw new Error('Failed to login user', error)
  }
}

module.exports = {
  fetchPosts,
  loginUser
}