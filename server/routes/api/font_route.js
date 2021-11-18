var express = require("express");
var router = express.Router();
var Fonts = require("../../models/font");

router.post("/fonts", function(req, res){
    var font = req.body.font;
    var name = req.body.name;
   
    var newFont = {
        font: font,
        name: name,
    }
    Fonts.create(newFont, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/fonts", function(req, res){
      Fonts.find().exec(function(err, foundFont){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundFont);
        }
      })
    });


module.exports = router;
