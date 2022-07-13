var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');





var app = http.createServer(function(request, response) {

  try {
    var _url = request.url;
    console.log(request);
    console.log("url: ", _url);

    if (_url == '/') {
      title = "/login.html"
      console.log(_url);

    } else if (_url == '/hihi') {
      title = "/hello";
    } else if (_url == '/main.js'){
      console.log('error');
    } else if(_url == '/login'){
      var body = '';
      request.on('data', function(data){
        body = body + data; 
      
      });

      
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var pw = post.pw;
        fs.writeFile(`personal_project/${id}`, pw, 'utf8', function(err){
          // response.writeHead(200);
          // response.end('success');
          // response.writeHead(302, {Location: `/?id=${id}`});
          response.writeHead(200);
          response.end();



        });

        console.log('id :', post.id);
        console.log('pw :', post.pw);
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
    response.writeHead(404);
    // response.end();
    var errormessage = String(error)
    response.end(errormessage);
  }
});

app.listen(3000);


