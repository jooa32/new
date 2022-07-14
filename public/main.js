var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request, response) {

  try {
    var _url = request.url;
    // console.log(request);
    console.log("url: ", _url);

    if (_url == '/') {
      title = "/login.html"
      console.log(_url);

    } else if (_url == '/hihi') {
      title = "/hello";
    } else if (_url == '/main.js'){
      console.log('error');
    } else if(_url == '/login'){
      // response.writeHead(200);
      let body = '';
      request.on('data', (chunk) => {
          body += chunk;
      });
      request.on('end', () => {
          console.log(body);
          response.writeHead(200);
          response.end(body); 
          title = "/login.html";
      });
    } 
    else {
      title = _url;
    }
    response.writeHead(200);
    fileContent = fs.readFileSync(__dirname + title);
    response.end(fileContent);
    // response.end('success');

  } catch (error) {
    // title = "/error.js";
    // console.log(response.writeHead(404));
    console.log(error);
    response.writeHead(404);
    // response.end();
    var errormessage = String(error)
    response.end(errormessage);
  }
});

app.listen(3000);


