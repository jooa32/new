const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {
    res.render('index');
  });


app.post('/login', (req, res) => {
    res.render('login') // login.ejs
});

app.post('/register', (req,res) => {
    res.render('register') //register.ejs
    
})
app.listen(3000, () => {
    console.log('3000 port');
});



