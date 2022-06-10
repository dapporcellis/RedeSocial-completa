const express = require("express");
const app = express();
const path = require("path");
const porta = process.env.PORT || 3000;

//configuração dos arquivos de visão (VIEWS)
app.set("view engine", "ejs");

//pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("login/login.ejs");
});

app.listen(porta, function () {
  console.log("Servidor funcionando!");
});
