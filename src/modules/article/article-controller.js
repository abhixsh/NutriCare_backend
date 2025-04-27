const Article = require('./article-model');

async function getAllArticles(req, res) {
    const articles = await Article.find();
    res.json(articles);
}

async function getArticleById(req, res) {
    const { id } = req.params;
    const article = await Article.findById(id);
    res.json(article);
}

async function searchArticle(req, res) {
    const { query } = req.params;
    const article = await Article.find({ title: { $regex: query, $options: 'i' } });
    res.json(article);
}

async function createArticle(req, res) {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        imgSrc: req.body.imgSrc
    });
    try {
        await article.save();
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateArticle(req, res) {
    try {
        const article = await Article.findById(req.params.id);
        if (req.body.title) {
            article.title = req.body.title;
        }
        if (req.body.description) {
            article.description = req.body.description;
        }
        if (req.body.content) {
            article.content = req.body.content;
        }
        if (req.body.imgSrc) {
            article.imgSrc = req.body.imgSrc;
        }
        await article.save();
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteArticle(req, res) {
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.json({ message: 'Article deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    searchArticle,
    createArticle,
    updateArticle,
    deleteArticle
}