const express = require("express");
const { index } = require("./controller");
const router = express.Router();
const { isLoginAdmin } = require("../middlewares/auth");

router.use(isLoginAdmin);

router.get("/", index);

module.exports = router;
