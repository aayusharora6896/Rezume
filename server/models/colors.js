var mongoose = require("mongoose");

var ColorSchema = new mongoose.Schema({
    colorHex: String,
});


module.exports = mongoose.model("Color", ColorSchema);
