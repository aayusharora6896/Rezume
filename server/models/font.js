var mongoose = require("mongoose");

var FontSchema = new mongoose.Schema({
    font: String,
    name: String,
});


module.exports = mongoose.model("Font", FontSchema);
