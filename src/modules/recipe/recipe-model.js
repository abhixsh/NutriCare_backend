const mongoose = require('../../database/mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    serves: {
        type: Number,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    recipeContent: {
        type: String,
        required: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;