var express = require("express");
var router = express.Router();
var passport = require("passport");
var Profile = require("../../models/profile");
var User = require("../../models/user");

// There can be only one profile so check for that and dont add this condition in routes which can be more than one. 
// Profile and contact details
// Also maybe write FindOne in get if needed
router.post("/user/:user_id/profile", function(req, res){
    User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
      if(err){
        res.json({"sucess": "false", "error": err});
      }else{ 
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var github = req.body.github;
    var linkedin = req.body.linkedin;
    var website = req.body.website;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    var country = req.body.country;
    var isVisible = req.body.isVisible;
    
    var newProfile = {
        user:  foundUser._id,
        name: name,
        email: email,
        phone: phone,
        github: github,
        linkedin: linkedin,
        website: website,
        address: address,
        city: city, 
        state: state,
        zip: zip,
        country: country,
        isVisible: isVisible,
    }
    Profile.create(newProfile, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
  }
});
});
// router.post("/profile", function(req, res){
//     var user = req.body.user;
//     // var user = req.user.id;
//     var first_name = req.body.first_name;
//     var last_name = req.body.last_name;
   
//     var newProfile = {
//         user: user,
//         first_name: first_name,
//         last_name: last_name,
//     }
//     Profile.create(newProfile, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             res.json(newlyCreated);
//         }
//     });
// });

router.get(
    "/user/:user_id/profile", function(req, res){
      Profile.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundProfile){
        if(err){
          // console.log(err);
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundProfile[0]);
        }
      })
    });

    // Update the profile
    router.patch("/user/:user_id/profile/:id", function(req, res){
      //find and update the correct profile
      // var data
        Profile.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedProfile){
          if(err){
            res.json(err);
          }else{
            res.json(updatedProfile);
          }
      });
  });

  // Delete the profile
router.delete("/user/:user_id/profile/:id", function(req, res){
  Profile.findByIdAndRemove(req.params.id, function(err){
      if(err){
          return res.json(err);
      }else{
          return res.json("Deleted");
      }
  });
});


module.exports = router;
