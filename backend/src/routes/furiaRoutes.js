const express = require("express");
const router = express.Router();
const furiaController = require("../controllers/furiaController");


router.get("/proximo-jogo", furiaController.getProximoJogo);


router.get("/estatisticas", furiaController.getEstatisticas);


router.get("/curiosidades", furiaController.getCuriosidade);

router.get("/jogadores", furiaController.getJogadores);

module.exports = router;
