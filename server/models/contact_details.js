var mongoose = require("mongoose");

var ContactDetailsSchema = new mongoose.Schema({
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
      },
      address1: String,
      address2: String,
      address_city: String,
      address_state: String,
      address_country: String,
      pincode: String,
      phone_number: String,
      mail_id: String,
      web_resume: String,
      github: String,  
      linkedIn: String,
});


module.exports = mongoose.model("ContactDetails", ContactDetailsSchema);
