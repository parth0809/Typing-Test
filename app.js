const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

global.db=require('./config/db');

let index=require('./routes/index');
let login=require('./routes/login');
let signup=require('./routes/signup');
let session=require('express-session')
const passport = require('passport')
let User=require('./schemas/user.schema')
let starttest=require('./routes/starttest')
let adddata=require('./routes/adddata')
let currreport=require('./routes/currreport')
let adminDashboard=require('./routes/dashboard')
let adminlogout=require('./routes/logout')
let settest=require('./routes/settest')
let authenticate=require('./routes/authenticate')
let testdashboard=require('./routes/testdashboard')
let userdata=require('./routes/userdata')
let usertrack=require('./routes/user-track')
let datetrack=require('./routes/date-track')
const app=express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'Our Little Secret',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  }));
app.use(passport.initialize());
app.use(passport.session());



  app.use('/',index);
  app.use('/login',login);
  app.use('/starttest',starttest);
  app.use('/adddata',adddata);
  app.use('/currreport',currreport);
  app.use('/admin-dashboard',adminDashboard);
  app.use('/logout',adminlogout);
  app.use('/settest',settest);
  app.use('/authenticate',authenticate);
  app.use('/test-dashboard',testdashboard);
  app.use('/userdata',userdata);
  app.use('/user-track',usertrack);
  app.use('/date-track',datetrack);
// uncomment to creatre admin
  app.use('/signup',signup)

app.listen(3000,(req,res)=>{
    console.log("listning on port 3000");
});
module.exports=app;