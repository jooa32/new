const http = require('http');
const path = require('path');
const exp = require('constants');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const { ppid } = require('process');


app.get('/', function(request, response){
  response.sendFile(__dirname + "/public/login.html")
})

app.get('/request', function(request, response){
  response.sendFile(__dirname + "/public/Request.html")
  console.log('sent');
})

app.get('/give', function(request, response){
  response.sendFile(__dirname + "/public/Give.html")
})
//

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var users = {
  user: {id: 'user'}
}

// app.get('/login', function(req, res){
//   res.render('login');
// });


// app.post('/login', (req, res) => {
//   var ID = req.body.id
//   var PW = req.body.pw
//   res.send(`<span>${ID}</span><p></p><span>${PW}</span>`)
//   console.log(req.body);
//   var info = req.body;

// });

app.post('/login', function(req, res, next){
  console.log(req.body);
  var ID = req.body.id
  var PW = req.body.pw
  res.send(`<span>${ID}</span><p></p><span>${PW}</span>`)
  
  res.redirect('/request');
})

app.use(express.urlencoded({extended: false}))



const server = http.createServer(app);
server.listen(3000);

// const app2 = express();
// app2.set('view engine', 'ejs');
// app.post('/Request.ejs', (req, res)=> {
//   const ID = req.body.id;
//   res.render('Request', {id});
// })

