var express = require("express");
const router = express.Router();

const cooperativaController = require("../controllers/cooperativa-controller");

router.get("/cadastrarCooperativa", cooperativaController.cadastrarCooperativa_get);
router.post("/cadastrarCooperativa", cooperativaController.cadastrarCooperativa_post);
router.get("/", cooperativaController.cooperativa);
router.get("/:id", cooperativaController.cooperativa);


module.exports = router;