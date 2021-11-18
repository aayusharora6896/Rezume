var express = require("express");
var router = express.Router();
var CustomFields = require("../../models/custom_field");
var User = require("../../models/user");

router.get("/user/:user_id/custom_fields", function(req, res){
      CustomFields.find({}, function(err, foundCustomFields){
        if(err){
            res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundCustomFields);
        }
      })
});

// router.get("/user/:user_id/custom_fields/:custom_field_id", function(req, res){
//     CustomFields.find({"_id": req.params.custom_field_id}).exec(function(err, foundCustomFields){
//       if(err){
//         res.json({"sucess": "false", "error": err});
//       }else{
//         res.json(foundCustomFields[0]);
//       }
//     })
// });
router.get("/user/:user_id/custom_fields/:custom_field", function(req, res){
    CustomFields.find({"field": req.params.custom_field}).exec(function(err, foundCustomFields){
      if(err){
        res.json({"sucess": "false", "error": err});
      }else{
        res.json(foundCustomFields[0]);
      }
    })
});

router.post("/user/:user_id/custom_fields", function(req, res){
    var field = req.body.field;

    var newField = {
        field: field,
    }
    CustomFields.create(newField, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
  });

module.exports = router;
