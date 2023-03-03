const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const JWT_SECRET = config.dev.jwt.secret


exports.registerUser = async (userData) => {
    // check for duplicate email id
    let user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('Sorry email already used');
    }

    const salt = await bcrypt.genSalt(12);
    const securePassword = await bcrypt.hash(userData.password, salt);

    const newUser = await User.create({
        fname: userData.fname,
        lname: userData.lname,
        name: userData.fname + " " + userData.lname,
        email: userData.email,
        password: securePassword,
    });

    const data = {
        user: {
            id: newUser.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);

    return { authToken, "success": true, "message": "User created successfully" };
}

exports.loginUser = async (email, password) => {
    let user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw new Error("Invalid email or password");
    }

    return user;
}