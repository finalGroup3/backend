"use strict";

const express = require("express");
const authRouter = express.Router();

const { users } = require("../models/index");
const basicAuth = require("./middleware/basic.js");

authRouter.post("/signup", async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    res.status(201).json(userRecord);
  } catch (e) {
    next(e.message);
  }
});

authRouter.post("/signin", basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = authRouter;
