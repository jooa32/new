
const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 1
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({  // 2
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
  }));

//   app.get('/', (req, res, next) => {  // 3
//     console.log(req.session);
//     if(!req.session.num){
//       req.session.num = 1;
//     } else {
//       req.session.num = req.session.num + 1;
//     }
//     res.send(`Number : ${req.session.num}`);
//   });

  let users = {
    user_id: "kim", 
    user_pw: "1111"
  };

  app.get('/', (req, res) => {
    if (req.session.logined){
        res.render('logout', {id: req.session.user_id});
    } else{
        res.render('login');
    }
  });

  app.post('/', (req, res) => {
    if(req.body.id == users.user_id && req.body.pw == users.user_pw){
        req.session.logined = true; 
        req.session.user_id = req.body.id;
        res.render('logout', {id: req.session.user_id});
    } else{
        res.send(`<h1> who are you? </h1>
                  <a href="/"> Back </a>`);
    }
  });

  app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
  
  app.listen(3000, () => {
    console.log('listening 3000port');
  });