var express = require("express");
var router = express.Router();
var Colors = require("../../models/colors");

router.post("/colors", function(req, res){
    var color = req.body.color;
   
    var newColor = {
        colorHex: color,
    }
    Colors.create(newColor, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/colors", function(req, res){
      Colors.find().exec(function(err, foundColor){
        if(err){
          res.json(undefined);
        }else{
          res.json(foundColor);
        }
      })
    });


module.exports = router;
