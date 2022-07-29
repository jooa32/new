/* cookie\cookie.js */

const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', 'views');


let ID;
let PW;

app.get('/', (req, res) => {
    res.render('index', { favorite: req.cookies.favorite });
  });



app.post('/login', (req, res) => {
    res.render('login');
})

app.post('/register', (req, res) => {
    res.render('register')
})


app.listen(3000, () => {
    console.log('3000 port');
});



