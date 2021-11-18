var mongoose = require("mongoose");

var keywordsSchema = new mongoose.Schema({
    name: String,
    level: Number,
})

module.exports = mongoose.model("Keywords", keywordsSchema);
