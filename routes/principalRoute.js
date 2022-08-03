const express = require("express");
const router = express.Router();
const principalController = require("../controllers/principalController");
const upload = require("../config/upload");
const autenticacao = require("../config/autenticacao");

//visualizar a galeria de fotos
router.get("/galeria", autenticacao, principalController.abregaleria);
//abrir formulário de postar fotos
router.get("/postarfotos", autenticacao, principalController.postarfoto);
//abrir o formulário de fazer postagens
router.get("/postagem", autenticacao, principalController.postagem);
//visualizar as postagens do usuario atual
router.get("/postagens", autenticacao, principalController.postagens);
//lista apenas os amigos
router.get("/listaramigos", autenticacao, principalController.listaramigos);
//rota para buscar usuários cadastrados
router.get("/buscaramigos", autenticacao, principalController.buscaramigos);

router.get(
  "/buscarcomunidade",
  autenticacao,
  principalController.buscarcomunidade
);
router.get(
  "/minhascomunidades",
  autenticacao,
  principalController.minhascomunidades
);
router.get(
  "/criarcomunidade",
  autenticacao,
  principalController.criarcomunidade
);

router.post(
  "/postarfotos",
  autenticacao,
  upload.single("foto"),
  principalController.salvarfoto
);

router.post("/postagem", autenticacao, principalController.fazerpostagem);

router.post(
  "/buscaramigos",
  autenticacao,
  principalController.buscaramigosfiltro
);

router.get("/sair", autenticacao, principalController.sair);

module.exports = router;
