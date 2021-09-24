var express = require("express");
const router = express.Router();

const estudanteController = require("../controllers/estudante-controller");

router.get("/cadastrarEstudante", estudanteController.cadastrarEstudante_get);
router.post("/cadastrarEstudante", estudanteController.cadastrarEstudante_post);
router.get("/", estudanteController.estudante);
router.get("/:id", estudanteController.estudante);
router.get("/estudantesParticipantes", estudanteController.estudantesParticipantes);

module.exports = router;