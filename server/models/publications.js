var mongoose = require("mongoose");

var PublicationsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    publication_title: String,
    journal_conference_name: String,
    other_details: String,
    coauthors: String,
    brief_description: String,
});

module.exports = mongoose.model("Publications", PublicationsSchema);
