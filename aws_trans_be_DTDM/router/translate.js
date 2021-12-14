var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');


// var translate = new AWS.Translate({
//   region: "us-east-2",
//   accessKeyId: "AKIAR5RT323L2VIAO5FB",
//   secretAccessKey: "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",
//   });

const config = require("../config.json");
var express = require('express');
var router = express.Router();
const REGION = config.REGION;
const ACCESS_KEY = config.AWS_ACCESS_KEY;
const SECRET_KEY = config.AWS_SECRET_KEY;

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION
});



var translate = new AWS.Translate();
const comprehend = new AWS.Comprehend();
router.get('/', (req, res) => {
  // res.status(200).send({message: "Luu Tan Phat!"});
  res.send("Ket noi backend")
});


// router.post('/translate', function(req, res, next) {
//   var params = {
//     SourceLanguageCode: req.body.SourceLanguageCode, /* required */
//     TargetLanguageCode: req.body.TargetLanguageCode, /* required */
//     Text: req.body.Text, /* required */
//   }
//   console.log(params.SourceLanguageCode)
//   console.log(params)



//   translate.translateText(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     {
//       // console.log(data);
//       res.status(200).send(data);
      
//     } 
//   });
  
router.post('/translate', function(req, res, next) {
  var params = {
    SourceLanguageCode: req.body.SourceLanguageCode, /* required */
    TargetLanguageCode: req.body.TargetLanguageCode, /* required */
    Text: req.body.Text, /* required */
  }
  // comprehendResult =comprehend.detectDominantLanguage({ Text });
 


  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
      // console.log(data);
      res.status(200).send(data);
      
    } 
  });
});

module.exports = router;