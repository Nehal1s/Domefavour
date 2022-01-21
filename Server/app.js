const express = require('express')
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
const authroutes = require('./routes/auth')
const app = express();
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passportSessionSetp = require('./passport')

const PORT = 3030 || process.env.PORT;



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

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credientials: true
}))

//Express use
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/auth', authroutes);


app.get('/', (req, res) => {
    res.render('login')
})

app.get('/profile', (req, res) => {
    console.log(`Data be like:=> ${req.body}`);
    res.render('profile')
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.listen(PORT, () => {
    console.log(`running server on ${PORT}`);
})