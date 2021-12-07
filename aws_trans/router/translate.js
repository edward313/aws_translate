var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

var translate = new AWS.Translate({
  region: "us-east-1",
  accessKeyId: "ASIAXKTXZ3MBO7ZUSYSP",
  secretAccessKey: "B6FLdVWQqmwy0QWPy10FIg06rZv2xfXogoUMw1Gq",
  });

router.get('/', (req, res) => {
  res.status(200).send({message: "Luu Tan Phat!"});
  
})

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
    } 
  });
  console(hello)
});

module.exports = router;