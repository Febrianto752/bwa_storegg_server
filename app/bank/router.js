const express = require("express");
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require("./controller");
const router = express.Router();
const { isLoginAdmin } = require("../middlewares/auth");

router.use(isLoginAdmin);
router.get("/", index);
router.get("/create", viewCreate);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", actionEdit);
router.delete("/delete/:id", actionDelete);

module.exports = router;
