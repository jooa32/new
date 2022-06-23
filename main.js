var http = require('http');
var fs = require('fs');  //file system 
var url = require('url');


var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/login.html';
    }
    if(request.url == '/Give'){
      url = '/Give.html';
    }
    
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);

