const express = require("express")
const router = express.Router()
const NewsController = require("../controllers/newsController.js")
const { isLoggedIn } = require("../utils/middleware")

router.route("/create")
	.get(isLoggedIn, NewsController.getNewsCreationPage)
	.post(isLoggedIn, NewsController.createArticle)

router.route("/")
	.get(isLoggedIn, NewsController.getNewsPage)

router.route("/:id")
	.get(isLoggedIn, NewsController.getArticlePage)
 
router.route("/:id/update")
	.get(isLoggedIn, NewsController.getUpdateArticlePage)
	.post(isLoggedIn, NewsController.updateArticle) 

module.exports = [router]
