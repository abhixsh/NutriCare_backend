const express = require('express');
const router = express.Router();

const { getAllArticles, getArticleById, searchArticle, createArticle, updateArticle, deleteArticle } = require('./article-controller');

router.get('/get-all', getAllArticles);

router.get('/search/:query',  searchArticle);

router.get('/get/:id', getArticleById);

router.post('/create', createArticle);

router.put('/update/:id', updateArticle);

router.delete('/delete/:id', deleteArticle);

module.exports = router;