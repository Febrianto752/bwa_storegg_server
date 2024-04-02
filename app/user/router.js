const express = require("express");
const { viewSignin, actionSignin } = require("./controller");

const router = express.Router();

router.get("/", viewSignin);
router.post("/", actionSignin);

module.exports = router;
