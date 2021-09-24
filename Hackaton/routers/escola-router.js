var express = require("express");
const router = express.Router();

const escolaController = require("../controllers/escola-controller");

router.get("/cadastrarEscola", escolaController.cadastrarEscola_get);
router.post("/cadastrarEscola", escolaController.cadastrarEscola_post);
router.get("/", escolaController.escola);
router.get("/:id", escolaController.escola);

module.exports = router;