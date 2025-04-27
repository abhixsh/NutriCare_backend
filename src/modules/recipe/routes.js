const express = require('express')
const router = express.Router()

const { getAllRecipes, getRecipeById, searchRecipe, createRecipe, updateRecipe, deleteRecipe } = require('./recipe-controller')

router.get('/get-all', getAllRecipes)

router.get('/search/:query',  searchRecipe)

router.get('/get/:id', getRecipeById)

router.post('/create', createRecipe)

router.put('/update/:id', updateRecipe)

router.delete('/delete/:id', deleteRecipe)

module.exports = router