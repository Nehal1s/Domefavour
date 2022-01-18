const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Devs = require('../models/Devs')

const CLIENT_URL = 'http://localhost:3000/profile'
const LOGIN_URL = 'http://localhost:3000/login'
const pass = 'chxllzGhGCWO5teH';
const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'

//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Connected to database in auths')})






//todo-> failing the auth redirects
router.get('/login/failed', (req, res)=>{
    res.status(401).json({
        success: false,
        message: 'failure',
    })
})


//todo-> successful of  redirected //todo
router.get('/login/success', async (req, res)=>{
    console.log(req.user);
    if(req.user){
        const dev = new Devs({
            name: req.user.displayName,
            pfp: req.user.photos[0].value,
            status: {
                project_id: "",
                onproject: false
            }
        })
        try{
            const newDev = await dev.save()
            res.render('profile', {data:{
                success: true,
                message: 'successful',
                user: req.user,
                }});
            // res.status(201).json(newDev);
        }catch(err){
            res.send(err.message);
            // res.status(400).json({message: err.message});
        }
    }
})

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect(LOGIN_URL);
})


//todo-> Google Auth APIs
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/auth/login/success',
    failureRedirect: '/login/failed'
}))


//todo-> Github auth APIs
router.get('/github', passport.authenticate('github', {scope: ['profile'] }));

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: 'http://localhost:3000/auth/login/success',
    failureRedirect: '/login/failed'
}))


async function getDev(req, res, next){
    let developer;
    try{
        developer = await Devs.findById(req.params.id)
        if(developer == null){
            return res.status(404).json({message: "Cannot find Project!"});
        }
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    res.developer = developer
    next();
}



module.exports = router;