var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    project_title: String,
    dateFrom: String,
    dateTo: String,
    link: String,
    skills_used: [String],
    details: [String],
});


module.exports = mongoose.model("Project", ProjectSchema);
