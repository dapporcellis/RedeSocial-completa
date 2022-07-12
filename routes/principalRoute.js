const express = require("express");
const router = express.Router();
const principalController = require("../controllers/principalController");
const upload = require("../config/upload");

router.get("/galeria", principalController.abregaleria);
router.get("/postarfotos", principalController.postarfoto);
router.get("/postagem", principalController.postagem);
router.get("/postagens", principalController.postagens);
router.get("/listaramigos", principalController.listaramigos);
router.get("/buscaramigos", principalController.buscaramigos);
router.get("/buscarcomunidade", principalController.buscarcomunidade);
router.get("/minhascomunidades", principalController.minhascomunidades);
router.get("/criarcomunidade", principalController.criarcomunidade);

router.post(
  "/postarfotos",
  upload.single("foto"),
  principalController.salvarfoto
);

module.exports = router;
