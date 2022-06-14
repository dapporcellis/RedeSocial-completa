const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

//abrir a tela de login e cadastro
router.get("/", loginController.abreTela);

//loga
router.post("/", loginController.logar);

//cadastra
router.post("/cadastro", loginController.cadastro);

module.exports = router;
