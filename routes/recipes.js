const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/', recipesController.getRecipes)
router.get('/:recipe.recipeName', recipesController.getRecipe)
router.post('/addRecipe', recipesController.addRecipe)

module.exports = router