var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy



//DATA BASE setting 
var connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "dlwndk4677",
  database : 'users'
})

connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get join url');
  res.render('register.ejs');
  // res.render('index', { title: 'Express' });
});


passport.use('local-join', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  console.log('local-join callback called');
}))

module.exports = router;
