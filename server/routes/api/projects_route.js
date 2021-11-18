var express = require("express");
var router = express.Router();
var passport = require("passport");
var Projects = require("../../models/projects");
var User = require("../../models/user");

router.post("/user/:user_id/project", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.body.user;
    // var user = req.user.id;
    var project_title = req.body.project_title;
    var dateFrom = req.body.dateFrom;
    var dateTo = req.body.dateTo;
    var link = req.body.link;
    var skills_used = req.body.skills_used;
    // skills_used = skills_used.split(",");
    var details = req.body.details;

    var newProject = {
        user: foundUser._id,
        project_title: project_title,
        dateFrom: dateFrom,
        dateTo: dateTo,
        link: link,
        skills_used: skills_used,
        details: details,
    }

    Projects.create(newProject, function(err, newlyCreated){
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
    "/user/:user_id/projects", function(req, res){
      Projects.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundProjects){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundProjects);
        }
      })
    });

    // Update the projects
    router.patch("/user/:user_id/projects/:id", function(req, res){
      //find and update the correct projects
      // var data
        Projects.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedProjects){
          if(err){
            res.json(err);
          }else{
            res.json(updatedProjects);
          }
      });
  });

      // Delete the profile
router.delete("/user/:user_id/project/:id", function(req, res){
  Projects.findByIdAndRemove(req.params.id, function(err){
      if(err){
          return res.json(err);
      }else{
          return res.json("Deleted");
      }
  });
});


module.exports = router;
