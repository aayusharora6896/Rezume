var mongoose = require("mongoose");

var FieldsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    customField: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customField",
    },
    title: String,
    description: [String],
});


module.exports = mongoose.model("Fields", FieldsSchema);
