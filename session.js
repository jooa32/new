
const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
var path = require('path');

//config 
app.set('view engine', 'ejs');
app.set('views', 'views');

//middle ware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

//dummy database 
let user = {      
  user_id: "lee",
  user_pwd: "1111"
};

// hash({ password: 'foobar' }, function (err, pass, salt, hash) {
//     if (err) throw err;
//     // store the salt & hash in the "db"
//     user.tj.salt = salt;
//     users.tj.hash = hash;
//   });
  
app.get('/', (req, res) => {      // 1
  if(req.session.logined) {
    res.render('logout', { id: req.session.user_id });
  } else {
    res.render('login');
  }
});



app.post('/', (req, res) => {      // 2
  if(req.body.id == user.user_id && req.body.pwd == user.user_pwd){
    req.session.logined = true;
    req.session.user_id = req.body.id;
    res.render('logout', { id: req.session.user_id });
    } else {
        res.send(`<span>${req.body.id}</span><p></p><span>${req.body.pwd}</span>
                    <a href="/"> Back </a>`);
  }
});


app.post('/logout', (req, res) => {      // 3
  req.session.destroy();
  res.redirect('/');
});


app.listen(3000, () => {
  console.log('listening 3000port');
});