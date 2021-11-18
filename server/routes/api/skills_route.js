var express = require("express");
var router = express.Router();
var passport = require("passport");
var Skills = require("../../models/skills");
var User = require("../../models/user");

router.post("/user/:user_id/skills", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.body.user;
    // var user = req.user.id;
    var skills_title = req.body.skills_title;
    var skillSet = req.body.skillSet;
    skillSet = skillSet.split(",");

    var newSkills = {
        user: foundUser._id,
        skills_title: skills_title,
        skillSet: skillSet,
    }
    Skills.create(newSkills, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
  }
});
});

router.get(
    "/user/:user_id/skills", function(req, res){
      Skills.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundSkills){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          console.log(foundSkills)
          res.json(foundSkills);
        }
      })
    });
  
    // Update the skills
    router.patch("/user/:user_id/skills/:id", function(req, res){
      //find and update the correct skills
      // var data
        Skills.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedSkills){
          if(err){
            res.json(err);
          }else{
            res.json(updatedSkills);

          }
      });
  });

  // Delete the profile
  router.delete("/user/:user_id/skill/:id", function(req, res){
    Skills.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return res.json(err);
        }else{
            return res.json("Deleted");
        }
    });
  });
  
module.exports = router;
