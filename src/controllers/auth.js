const { validationResult } = require("express-validator")
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
require('dotenv/config')
const JWT_SECRET = process.env.JWT_SECRET

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        //Check for dupliate email id
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(401).json({ error: "Sorry email already used" })
        }

        const salt = await bcrypt.genSalt(12);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            name: req.body.fname + " " + req.body.lname,
            email: req.body.email,
            password: securePassword,
        });
        const data = {
            user: {
                id: newUser.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        const msg = "User created successfully"
        res.status(201).json({ authToken, msg })

    } catch (error) {
        console.log(error);
    }
}

exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Please try to login using correct Credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(401).json({ error: "Please try to login using correct Credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        const msg = "Logged In successfully"
        res.json({ authToken, msg })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}