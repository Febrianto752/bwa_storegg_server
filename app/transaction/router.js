const express = require("express");
const { index, actionStatus } = require("./controller");
const router = express.Router();
const { isLoginAdmin } = require("../middlewares/auth");

router.use(isLoginAdmin);

router.get("/", index);
router.put("/status/:id", actionStatus);

module.exports = router;
