const config = require("config");
const { createUserService, registerUserService } = require("../services/userService")
const jwt = require("jsonwebtoken");
const makeError = require("../utils/errors");

const createUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const payload = await createUserService({ firstName, lastName, email, password })

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.send({ token });
            }
        );
        next();
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error })
        }
        return res.status(500).json({ error: makeError(500, 'Internal server error') })
    }
}

module.exports = {
    createUser
};

