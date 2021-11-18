var express = require("express");
var router = express.Router();
var passport = require("passport");
// var moment = require("moment");
var Experience = require("../../models/experience");
var User = require("../../models/user");

router.post("/user/:user_id/experience", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.user.id;
    // var user = req.body.user;
    var company = req.body.company;
    var city = req.body.city;
    var state = req.body.state;
    var position = req.body.position;
    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;
    var primary_work_breif = req.body.primary_work_breif;
    var impact1 = req.body.impact1;
    var impact2 = req.body.impact2;
    var impact3 = req.body.impact3;
    var impact4 = req.body.impact4;
    var isVisible = req.body.isVisible;
   
    var newExperience = {
        user: foundUser._id,
        company: company,
        city: city,
        state: state,
        position: position,
        dateFrom: dateFrom,
        dateTo: dateTo,
        primary_work_breif: primary_work_breif,
        impact1: impact1,
        impact2: impact2,
        impact3: impact3,
        impact4: impact4,
        isVisible: isVisible,
    }
    Experience.create(newExperience, function(err, newlyCreated){
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
    "/user/:user_id/experiences", function(req, res){
      Experience.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundExperience){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundExperience);
        }
      })
    });

  // Update the experience
    router.patch("/user/:user_id/experiences/:id", function(req, res){
      //find and update the correct experience
      // var data
        Experience.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedExperiences){
          if(err){
            res.json(err);
          }else{
            res.json(updatedExperiences);
          }
      });
  });

  // Delete the experience
  router.delete("/user/:user_id/experience/:id", function(req, res){
    Experience.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return res.json(err);
        }else{
            return res.json("Deleted");
        }
    });
  });
  
module.exports = router;
