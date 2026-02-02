const express = require("express");
const router = express.Router();

const { getToken } = require("../controllers/auth.controllers.js");

router.post("/getToken", getToken);

module.exports = router;
