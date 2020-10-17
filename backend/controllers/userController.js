const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            user: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

module.exports = { authUser }
