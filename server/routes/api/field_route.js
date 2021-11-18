var express = require("express");
var router = express.Router();
var CustomField = require("../../models/custom_field");
var Field = require("../../models/fields");
var User = require("../../models/user");


router.post("/user/:user_id/custom_fields/:custom_fields/fields", function(req, res){
    User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
            CustomField.findOne({"field": req.params.custom_fields}).populate("custom_field", 'field').exec(function(err, foundCustomField){
                if(err){
                    res.json({"sucess": "false", "error": err});
                  }else{
                var title = req.body.title;
                var description = req.body.description;

    var newField = {
        user: foundUser._id,
        customField: foundCustomField._id,
        title: title,
        description: description,
    }
    Field.create(newField, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    })}
    });
    }});
});
router.get("/user/:user_id/fields/:field_id", function(req, res){
    Field.find({"customField": req.params.field_id}, function(err, foundCustomFields){
      if(err){
          res.json({"sucess": "false", "error": err});
      }else{
        res.json(foundCustomFields);
      }
    })
});

router.get("/user/:user_id/custom_fields/:custom_field/fields", function(req, res){
    CustomField.find({"field": req.params.custom_field}).exec(function(err, foundCustomFields){
      if(err){
        res.json({"sucess": "false", "error": err});
      }else{
        Field.find({"customField": foundCustomFields[0]._id, user: req.params.user_id}).exec(function(err, foundFields){  
            if(err){
                res.json({"sucess": "false", "error": err});
            }else{
                res.json(foundFields);
            }
    })
    }})
});

module.exports = router;
