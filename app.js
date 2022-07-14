const http = require('http');
const path = require('path');
const express = require('express');
const exp = require('constants');
const app = express();
var bodyParser = require('body-parser');
// app.set('view engine', 'ejs');
// app.set('views', './views');

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
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/login', (req, res) => {
  // res.send(req.body.id)
  // res.send(req.body.pw)
  console.log(req.body);
  res.send(`<span>${req.body.id}</span><p></p><span>${req.body.pw}</span>`)

});



// app.get('/login', (req, res) => {
//   res.send(`<span>${req.query.id}</span><p></p><span>${req.query.pw}</span>`)
//   console.log(req.query)
// });

const server = http.createServer(app);
server.listen(3000);



