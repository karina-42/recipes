const recipesList = require('../models/Recipe')

module.exports = {
  getRecipes: async (req, res) => {
    try {
      const recipeTitles = await recipesList.find()
      res.render('recipes.ejs', {recipes: recipeTitles})
    } catch (err) {
      console.log(err);
    }
  },
  getRecipe: async (req, res) => {
    try {
      // res.render('recipes.ejs', {recipes: recipeTitles})
      console.log({recipes: recipeTitles})

    } catch (err) {
      console.log(err);
    }
  },
  addRecipe: async (req, res) => {
    try {
      await Recipe.create({recipe: req.body.recipe})
      console.log("Recipe has been added!");
      res.redirect('/recipes')
    } catch (err) {
      console.log(err);
    }
  }
}