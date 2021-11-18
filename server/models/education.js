var mongoose = require("mongoose");

var EducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    school_name: String,
    school_city: String,
    school_state: String,
    degree_name: String,
    domain_name: String,
    dateFrom: String,
    dateTo: String,
    isVisible: Boolean,
});


module.exports = mongoose.model("Education", EducationSchema);
