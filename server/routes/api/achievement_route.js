var express = require("express");
var router = express.Router();
var passport = require("passport");
var Achievements = require("../../models/achievement");
var User = require("../../models/user");

router.post("/user/:user_id/achievement", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.body.user;
    // var user = req.user._id;
    var title = req.body.title;
    var description = req.body.description;
    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;
    var isVisible = req.body.isVisible;
    
    var newAchievement = {
        user: foundUser._id,
        title: title,
        description: description,
        dateFrom: dateFrom,
        dateTo: dateTo,
        isVisible: isVisible,
    }
    Achievements.create(newAchievement, function(err, newlyCreated){
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
    "/user/:user_id/achievements", function(req, res){
      Achievements.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundAchievement){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundAchievement);
        }
      })
    });

        // Update the Achievements
        router.patch("/user/:user_id/achievements/:id", function(req, res){
          //find and update the correct achievements
          // var data
            Achievements.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedAchievements){
              if(err){
                res.json(err);
              }else{
                res.json(updatedAchievements);
              }
          });
      });
    

  // Delete the Achievements
  router.delete("/user/:user_id/achievement/:id", function(req, res){
    Achievements.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return res.json(err);
        }else{
            // console.log(req.params.user_id);
            // console.log(req.params.id);
            return res.json("Deleted");
        }
    });
  });
  
module.exports = router;
