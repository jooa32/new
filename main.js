var http = require('http');
var fs = require('fs');
var url = require('url');
// const { stringify } = require('querystring');
var qs = require('querystring');


var app = http.createServer(function(request, response) {
  try {
    var _url = request.url;
    console.log(request);
    console.log("url: ", _url);

    if (_url == '/') {
      title = "/login.html"
    } else if (_url == '/hihi') {
      title = "/hello";
    } else if (_url == '/main.js'){
      console.log('error');
    }

    else {
      title = _url;
    }

    response.writeHead(200);
    fileContent = fs.readFileSync(__dirname + title);
    response.end(fileContent);
  } catch (error) {
    // title = "/error.js";
    // console.log(response.writeHead(404));
    response.writeHead(404);
    // response.end();
    var errormessage = String(error)
    response.end(errormessage);
  }
});

app.listen(3000);
