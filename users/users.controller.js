﻿const express = require("express");
const router = express.Router();
const userService = require("./user.service");

// routes
router.post("/register", register);

module.exports = router;

function register(req, res, next) {
  userService
    .create(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Email or password is incorrect" })
    )
    .catch((err) => next(err));
}
