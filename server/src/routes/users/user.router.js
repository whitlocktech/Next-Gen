const express = require('express')
const oauth2Router = require('../oauth2/oauth2.router')
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

authRouter.post('/user-signup', createUser)
authRouter.get('/:id', getUserById)
authRouter.patch('/:id', userRoleAssignment, updateUser)
authRouter.delete('/:id', adminOrModerator, deleteUser)
authRouter.get('/logout', logout)
authRouter.post('/login', login)
authRouter.use('/', oauth2Router)

module.exports = authRouter