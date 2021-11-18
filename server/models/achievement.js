var mongoose = require("mongoose");

var AchievementSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: String,
    description: String,
    dateFrom: String,
    dateTo: String,
    isVisible: Boolean,
});


module.exports = mongoose.model("Achievement", AchievementSchema);
