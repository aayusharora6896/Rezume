const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  userType: {
    type: Boolean,
    required: true
  }, 
});

module.exports = mongoose.model("User", UserSchema);
