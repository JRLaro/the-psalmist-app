const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register a user. Public access
router.post(
  "/",
  // username must have a fist name
  body("firstName", "A first name is required.").not().isEmpty(),
  // username must have a last name
  body("lastName", "A last name is required.").not().isEmpty(),
  // username must be an email
  body("email", "A valid email is required.").isEmail(),
  // password must be at least 6 chars long
  body("password", "Password of 6 or more characters is required.").isLength({
    min: 6,
  }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // returns a 'Bad Request' 400 status and an array of errors.
      return res.status(400).json({ errors: errors.array() });
    }

    // destructor firstName, lastName, email, password from the request.body
    const { firstName, lastName, email, password } = req.body;

    try {
      // check to see if the email already exists
      let user = await User.findOne({ email });

      if (user) {
        // bad request with msg
        return (
          res
            .status(400)
            // .json({ msg: `A user with the email ${email} already exist.` });
            .json({ msg: "User already exists" })
        );
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

      //   Saves user to the database
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      // returns a token
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      // return a 500 status: server error.
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
