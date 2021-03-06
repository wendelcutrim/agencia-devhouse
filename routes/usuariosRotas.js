const express = require("express");

const usuarioController = require("../controllers/usuariosController");

const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);
routes.post("/login-authentication", usuarioController.autenticacaoLogin);

routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post('/salvar-usuario', usuarioController.salvarUsuario);

module.exports = routes;
