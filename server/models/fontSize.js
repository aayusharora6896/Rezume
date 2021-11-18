var mongoose = require("mongoose");

var FontSizeSchema = new mongoose.Schema({
    fontSize: Number,
});


module.exports = mongoose.model("FontSize", FontSizeSchema);
