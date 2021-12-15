var express = require('express');
var router = express.Router();





const config = require("../config.json");
var express = require('express');
var router = express.Router();


// aws-sdk
var AWS = require('aws-sdk');
const REGION = config.REGION;
const ACCESS_KEY = config.AWS_ACCESS_KEY;
const SECRET_KEY = config.AWS_SECRET_KEY;

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION
});



var translate = new AWS.Translate();



router.get('/translate', (req, res) => {
 
  res.render('translate')
});


  
router.post('/translate', function(req, res, next) {
  var params = {
    SourceLanguageCode: req.body.SourceLanguageCode, /* required */
    TargetLanguageCode: req.body.TargetLanguageCode, /* required */
    Text: req.body.Text, /* required */
  }
  
  translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
      // console.log(data);
      res.status(200).send(data);
      console.log(data)
      
    } 
  });
});

module.exports = router;