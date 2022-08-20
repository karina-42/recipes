const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  steps: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)