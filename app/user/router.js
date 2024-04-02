const express = require("express");
const { viewSignin } = require("./controller");

const router = express.Router();

router.get("/", viewSignin);

module.exports = router;
