const express = require("express");
const { index, viewCreate, actionCreate, viewEdit } = require("./controller");
const router = express.Router();
const multer = require("multer");
const os = require("os");

router.get("/", index);
router.get("/create", viewCreate);
router.post(
  "/create",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreate
);
router.get("/edit/:id", viewEdit);

module.exports = router;
