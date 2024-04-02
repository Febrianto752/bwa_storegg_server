const express = require("express");
const { viewSignin, actionSignin, actionSignout } = require("./controller");

const router = express.Router();

router.get("/", viewSignin);
router.post("/", actionSignin);
router.get("/signout", actionSignout);

module.exports = router;
