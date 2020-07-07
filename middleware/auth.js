const jwt = require("jsonwebtoken");
const config = require("../config");

// middleware to check if token is valid and has not expired
module.exports = async (req, res, next) => {
    // grab token from the request header
    const token = req.header("token");
    // if there is no token return error
    if (!token) return res.status(401).json({ message: "Unathorized User" })
    try {
        // compare token 
        const decoded = await jwt.verify(token, config.jwtSecret)
        // if true, send decoded user information to client
        if (decoded) {
            req.userId = decoded.userId
            next();
        }
    } catch (err) {
        // send error to client
        res.status(400).json({ message: "Invalid Token" })
    }
}
