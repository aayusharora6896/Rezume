var mongoose = require("mongoose");

var SkillsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: String,
    keywords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Keywords",
    }],
    isVisible: Boolean,
});


module.exports = mongoose.model("Skills", SkillsSchema);
