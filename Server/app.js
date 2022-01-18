const express = require('express')
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
const passportSetup = require("./passport");
const authroutes = require('./routes/auth')
const projectsRoutes = require('./routes/projectsRoutes')
const app = express();
require('dotenv').config()
const PORT = 3000 || process.env.PORT;



//middleware
app.use(cookieSession(
    {
        name: 'session',
        keys: ['lama'],
        maxAge: 24 * 60 * 60 * 1000,
    }
))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credientials: true
}))

//Express use
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/auth', authroutes);
app.use('/project', projectsRoutes);


app.get('/', (req, res)=>{
    res.render('login')
})

app.get('/profile', (req, res)=>{
    console.log(`Data be like:=> ${req.body}`);
    res.render('profile')
})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.listen(PORT, ()=>{
    console.log(`running server on ${PORT}`);
})