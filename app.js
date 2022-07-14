const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const server = http.createServer(app);
server.listen(3000);

// app.get('/', function(request, response){
//   response.send("hihi")
// })

app.get('/', function(request, response){
  response.sendFile(__dirname + "/public/login.html")
})

app.get('/request', function(request, response){
  response.sendFile(__dirname + "/public/Request.html")
})

app.get('/give', function(request, response){
  response.sendFile(__dirname + "/public/Give.html")
})

app.use(express.static('public'))
