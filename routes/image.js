var express = require('express');
var fs = require('fs'),
  path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../assets/wikipedia.png'), function(err, data) {
        console.log(data);
        // var url = URL.parse(req.param('url'));

        var type = res.header('content-type');
        var prefix = 'data: base64,';
        var base64 = new Buffer(data, 'binary').toString('base64'),
	      data1 = base64,
	      obj = {
                // "src": url.href,
                "status": "success",
                "data": data1
              };

          res.contentType('application/json');
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          res.header("Access-Control-Allow-Methods", "GET,POST");

          res.send(JSON.stringify(obj));
      });
});

module.exports = router;
