var mongoose = require("mongoose");

var CustomFieldsSchema = new mongoose.Schema({
    field: String,
});


module.exports = mongoose.model("CustomFields", CustomFieldsSchema);
