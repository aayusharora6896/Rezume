var express = require("express");
var router = express.Router();
var passport = require("passport");
var Achievement = require("../../models/achievement");
var Contact = require("../../models/contact_details");
var Education = require("../../models/education");
var Experience = require("../../models/experience");
var Profile = require("../../models/profile");
var Projects = require("../../models/projects");
var Publications = require("../../models/publications");
var Skills = require("../../models/skills");
var User = require("../../models/user");


// router.get("/user/:user_id/resume", async function(req, res){
//       var profile_data = await Profile.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundProfile){
//         if(err){
//           // res.json({"sucess": "false", "error": err});
//         }else{
//           return foundProfile;
//           // res.json(foundProfile);
//         }
//     })
//       res.json(profile_data);
// });


module.exports = router;
