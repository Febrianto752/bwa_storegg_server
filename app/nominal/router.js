var express = require("express");
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
} = require("./controller");
var router = express.Router();

router.get("/", index);
router.get("/create", viewCreate);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", actionEdit);

module.exports = router;
