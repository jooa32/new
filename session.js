
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
var path = require('path');
const mysql = require('mysql');
const { fstat } = require('fs');
const app = express();
var fs = require('fs');
const f = require('session-file-store');

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
// let user = {      
//   user_id: "lee",
//   user_pwd: "1111"
// };

const client = mysql.createConnection({
  user: 'root',
  password: 'dlwndk4677',
  database: 'test'
});

app.get('/',(req,res)=>{
  console.log('메인페이지 작동');
  console.log(req.session);
  if(req.session.is_logined == true){
      res.render('index',{
          is_logined : req.session.is_logined,
          name : req.session.name
      });
  }else{
      res.render('index',{
          is_logined : false
      });
  }
});

// hash({ password: 'foobar' }, function (err, pass, salt, hash) {
//     if (err) throw err;
//     // store the salt & hash in the "db"
//     user.tj.salt = salt;
//     users.tj.hash = hash;
//   });
  
// app.get('/', (req, res) => {      // 1
//   console.log('main page working');
//   // console.log(req.session);
//   if(req.session.logined == true){
//     res.render('login')
//     // res.render('index', {
//     //   logined: req.session.logined,
//     //   id: req.session.id
//     // });
//   } else{
//     res.render('login', {
//       logined: false
//     });
//   }

//   app.get('/login', (req,res) => {
//     fs.readFile('login.html' , function(err, data){
//       res.writeHead(200, {'Content-Type': 'text.html'});
//       res.end(data);
//     });
//   });
//   // if(req.session.logined) {
//   //   res.render('logout', { id: req.session.user_id });
//   // } else {
//   //   res.render('login');
//   // }
// });

// //register 
// app.get('/register', (req, res) => {
//   console.log('sign up page')
//   res.render('register');
// });

// app.post('/register' , (req, res) => {
//   const id = req.body.id;
//   const pw = req.body.pw;

  
// })




// // app.post('/', (req, res) => {      // 2
// //   if(req.body.id == user.user_id && req.body.pwd == user.user_pwd){
// //     req.session.logined = true;
// //     req.session.user_id = req.body.id;
// //     res.render('logout', { id: req.session.user_id });
// //     } else {
// //         res.send(`<span>${req.body.id}</span><p></p><span>${req.body.pwd}</span>
// //                     <a href="/"> Back </a>`);
// //   }
// // });


// // app.post('/logout', (req, res) => {      // 3
// //   req.session.destroy();
// //   res.redirect('/');
// // });



app.listen(3000, () => {
  console.log('listening 3000port');
});