var express = require("express");
var router = express.Router();
var passport = require("passport");
var Publications = require("../../models/publications");
var User = require("../../models/user");

router.post("/user/:user_id/publications", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.body.user;
    // var user = req.user._id;
    var publication_title = req.body.publication_title;
    var journal_conference_name = req.body.journal_conference_name;
    var other_details = req.body.other_details;
    var coauthors = req.body.coauthors;
    var brief_description = req.body.brief_description;
   
    var newPublication = {
        user: foundUser._id,
        publication_title: publication_title,
        journal_conference_name: journal_conference_name,
        other_details: other_details,
        coauthors: coauthors,
        brief_description: brief_description,
    }
    Publications.create(newPublication, function(err, newlyCreated){
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
    "/user/:user_id/publications", function(req, res){
      Publications.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundPublication){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundPublication);
        }
      })
    });

        // Update the Publications
        router.patch("/user/:user_id/publications/:id", function(req, res){
          //find and update the correct publications
          // var data
            Publications.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedPublications){
              if(err){
                res.json(err);
              }else{
                res.json(updatedPublications);
              }
          });
      });
    

  // Delete the publications
  router.delete("/user/:user_id/publication/:id", function(req, res){
    Publications.findByIdAndRemove(req.params.id, function(err){
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
