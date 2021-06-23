const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

const userController = require("../controllers/userController");
const { userValidationRules, validate } = require('../middleware/userValidator');

// Register a user. Public access
router.post('/', userValidationRules(), validate, userController.createUser)

module.exports = router;

