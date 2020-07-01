const User = require("../models/user");

module.exports = {
    async register(req, res) {
        try {
            const userData = await User.save();
            res.json(userData);
        } catch (err) {
            console.log(err);
        }
    },

    async login(req, res) {
        try {
            const userData = await User.find();
            res.json(userData);
        } catch (err) {
            console.log(err);
        }
    }



};
