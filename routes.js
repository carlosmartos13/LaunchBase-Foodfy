const express = require('express')
const recipesController = require('./src/app/controllers/recipesController')
const allController = require('./src/app/controllers/allController')
const routes = express.Router()


routes.get("/", allController.index); 
routes.get("/sobre", allController.sobre);


routes.get("/recipes", recipesController.index);// Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipesController.create); // Mostrar formulário de nova receita
routes.get("/recipes/:id", recipesController.show); // Exibir detalhes de uma receita
//routes.get("/admin/recipes/:id/edit", recipesController.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipesController.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipesController.put); // Editar uma receita
// routes.delete("/admin/recipes", recipesController.delete); // Deletar uma receita

module.exports = routes
