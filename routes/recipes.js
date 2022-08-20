const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/', recipesController.getRecipes)
router.post('/addRecipe', recipesController.addRecipe)

module.exports = router