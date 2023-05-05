const passport = require('passport')
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

async function logout(req, res) {
    try{
        req.logout()
        res.json({ message: 'Logout successful'})
    } catch (err) {
        return res.status(500).json({ error: 'Error Logging out'})
    }
}

async function login(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ message: 'Login successful' });
    });
  })(req, res, next);
};

function adminOrModerator(req, res, next) {
    if (!req.user && !req.user.userRole === 'administrator' || 'moderator') {
        return res.status(403).json({ error: 'Access Denied'})
    }
    next()
}

function adminOnly(req, res, next) {
    if (!req.user && !req.userRole === 'administrator') {
        return res.status(403).json({ error: 'Access Denied'})
    }
    next()
}

function userRoleAssignment(req, res, next) {
    if (req.body.userRole === 'moderator' || 'administrator' && !req.user.userRole === 'administrator') {
        return res.status(403).json({ error: 'Access Denied'})
    }
    next()
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    logout,
    login,
    adminOrModerator,
    adminOnly,
    userRoleAssignment
}