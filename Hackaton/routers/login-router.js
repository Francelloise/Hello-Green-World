var express = require("express");
const router = express.Router();

const loginController = require("../controllers/login-controller");

router.get("/", loginController.login_get);
router.post("/", loginController.login_post);

module.exports = router;