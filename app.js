var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var router = express.Router()
var router = require('./routes/index')
// var path = require('path')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')

app.listen(3000, () => {
    console.log('3000 port is running');
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

module.exports = router;


// app.set('views', 'views');

//세션관련 (use 메소드에 등록)
app.use(session({
    secret: 'keyboard cat', //세션 암호화하기위한 키값 (다른문자열 넣어도 상관없음)
    resave: false,
    saveUninitialized: true
}))

//passport 관련 - 초기화 해줘야됨 
app.use(passport.initialize())
app.use(passport.session())
app.use(flash()) //express connect-flash (메시지를 쉽게 전달해줌)
app.use(router)











