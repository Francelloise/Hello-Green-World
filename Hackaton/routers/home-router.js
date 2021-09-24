var express = require("express");
const router = express.Router();

const homeController = require("../controllers/home-controller");

router.get("/", homeController.home);

router.get("/contato", homeController.contato);

router.get("/resgatePremio", homeController.resgatePremio);

router.get("/time", homeController.time);

module.exports = router;