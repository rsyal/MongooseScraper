var mongoose = require("mongoose");

//reference to the Schema constructor
var Schema = mongoose.Schema;

//New Schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
// `link` is required and of type String
link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  //This is linked to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

//Creating the model
var Article = mongoose.model("Article", ArticleSchema);

// Export the Cuisine model
module.exports = Article;