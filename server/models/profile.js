var mongoose = require("mongoose");

var ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    website: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    isVisible: String,
});


module.exports = mongoose.model("Profile", ProfileSchema);
