const exp = require('constants');
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const server = http.createServer(app);
const port = 3000;
server.listen(port);



app.get('/', function (req, res) {
    // res.send('Hello World!');
    // res.sendFile('/login.html');
    res.sendFile(__dirname + "/public/login.html");
  });

  app.get('/main', function (req, res) {
    // res.send('Hello World!');
    // res.sendFile('/login.html');
    res.sendFile(__dirname + "/public/login.html");
  });



app.get('/hi', function (req, res) {
    res.send('hihihi!');
});

app.get('/hello', function (req, res) {
    res.send('123123!');
});

// app.use(express.static('public'));

app.use(express.urlencoded());
app.use(express.json());
app.post('/', function(request, response){
    console.log(request.body.user.id);
    console.log(request.body.pw);
});
app.use(function(req,res, next){
    res.status(404).send('error');
})


