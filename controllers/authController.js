const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");

module.exports = {
    async register(req, res) {
        try {

            const { email, password } = req.body;
            // Check user enters all fields
            if (!email || !password) return res.status(400).json({ message: "Please provide email and password" });
            // Check the user enters the right formatted email
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });
            // Check user password length is more than 8 characters
            if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long" });

            // create new User object to be saved in Database
            const newUser = new User({
                email,
                password
            })

            // Check if user already exist
            const user = await User.findOne({ email })
            if (user) return res.status(400).json({ message: "Email already registered. Please Login" });

            // Generate Password Hash
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) throw err;
                    // Add hashed password to new user object
                    newUser.password = hash;
                    //Save user to DB
                    const user = await newUser.save();
                    // create json web token and send it back to client side
                    jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: 60 * 60 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            email
                        })
                    })

                })
            });

        } catch (err) {
            throw err;
        }
    },

    async login(req, res) {

        try {

            const { email, password } = req.body;

            // Check user enters all fields
            if (!email || !password) return res.status(400).json({ message: "Please enter enter email and password" });
            // Check for correct email
            const user = await User.findOne({ email });
            // if email not found
            if (!user) return res.status(400).json({ message: "Email not found. Please register" })
            // if email found compare hashed password with incoming password
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                const match = result;
                if (!match) return res.status(401).json({ message: "Incorrect Password" })
                // create json web token and send it back to client side
                jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: 60 * 60 }, (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        email
                    })
                })
            })

        } catch (err) {
            console.log(err);
        }
    },
    // get user information
    async getUser(req, res) {
        try {
            // find user by id
            const user = await User.findById(req.userId)
                // return all info but password
                .select("-password");
            // send info to client
            res.json(user)
        } catch (err) {
            throw err;

        }
    }

};
