var mongoose = require("mongoose");

var ExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    company: String,
    city: String,
    state: String,
    position: String,
    dateFrom: String,
    dateTo: String,
    primary_work_breif: String,
    impact1: String,
    impact2: String,
    impact3: String,
    impact4: String,
});


module.exports = mongoose.model("Experience", ExperienceSchema);
