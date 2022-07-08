const express = require("express");
const router = express.Router();
const principalController = require("../controllers/principalController");

router.get("/galeria", principalController.abregaleria);

module.exports = router;
