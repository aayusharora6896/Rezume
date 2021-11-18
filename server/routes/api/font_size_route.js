var express = require("express");
var router = express.Router();
var FontSizes = require("../../models/fontSize");

router.post("/fontsizes", function(req, res){
    var fontSize = req.body.fontSize;
   
    var newFontSize = {
        fontSize: fontSize,
    }
    FontSizes.create(newFontSize, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/fontsizes", function(req, res){
      FontSizes.find().exec(function(err, foundFontSize){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{ 
          res.json(foundFontSize);
        }
      })
    });


module.exports = router;
