const bcrypt = require("bcryptjs");
const User = require("../models/User");
const makeError = require("../utils/errors");

const createUserService = async ({
    firstName,
    lastName,
    email,
    password,
}) => {

    try {
        // check to see if the email already exists
        let user = await User.findOne({ email });

        if (user) {
            // bad request with msg
            throw makeError(400, 'User already exists')
        }

        // creates a new user
        user = new User({
            firstName,
            lastName,
            email,
            password,
        });

        // expression 'salt' that will encrypt the password
        const salt = await bcrypt.genSalt(10);

        // hashes the password and assign it to the user object
        user.password = await bcrypt.hash(password, salt);

        // Saves user to the database
        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        return payload;
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUserService
};

