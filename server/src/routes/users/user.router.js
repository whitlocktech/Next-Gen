const express = require('express')
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    logout,
    login,
    adminOrModerator,
    adminOnly,
    userRoleAssignment
} = require('./user.controller')

const authRouter = express.Router()

authRouter.post('/user-signup', userRoleAssignment, createUser)
authRouter.get('/:id', getUserById)
authRouter.patch('/:id', userRoleAssignment, updateUser)
authRouter.delete('/:id', deleteUser)
authRouter.get('/logout', logout)
authRouter.post('/login', login)

module.exports = authRouter