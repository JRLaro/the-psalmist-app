const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
    return [
        body("firstName", "A first name is required.").not().isEmpty(),
        body("lastName", "A last name is required.").not().isEmpty(),
        body("email", "A valid email is required.").isEmail(),
        body("password", "Password of 6 or more characters is required.").isLength({
            min: 6,
        })
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = {
    userValidationRules,
    validate,
}