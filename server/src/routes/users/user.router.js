const express = require('express')
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    logout,
    login
} = require('./user.controller')

const authRouter = express.Router()

authRouter.post('/user-signup', createUser)
authRouter.get('/:id', getUserById)
authRouter.patch('/:id', updateUser)
authRouter.delete('/:id', deleteUser)
authRouter.get('/logout', logout)
authRouter.post('/login', login)

module.exports = authRouter