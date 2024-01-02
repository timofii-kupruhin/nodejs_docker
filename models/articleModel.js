const mongoose = require("mongoose")
const Schema = mongoose.Schema
const CommentModel = require("./commentModels.js")

const ArticleModelSchema = new Schema({
  title: {type:String, min: 1, max: 200, required: true},
  text: {type: String, min: 1},
  date: { type: Date, default: Date.now() },
  authorName: {type: String},
  comments: {type: [CommentModel.schema], default: [] },
  authorId: { type: String}
}); 

module.exports = mongoose.model("ArticleModel", ArticleModelSchema)