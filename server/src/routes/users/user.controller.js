const User = require('../../models/users/user.model')

async function createUser(req, res) {
    try {
        const { username, password, email, givenName, familyName, userRole } = req.body
        const user = new User({ username, password, email, givenName, familyName, userRole })
        await user.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function getUserById (req, res) {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: 'User Not Found'})
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!user) {
            return res.status(404).json({ error: 'User Not Found'})
        }
        res.json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({ error: 'User not Found'})
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
}