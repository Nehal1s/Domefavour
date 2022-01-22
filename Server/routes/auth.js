const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Devs = require('../models/Devs');
const { json, application } = require('express');
const {v4 : uuid} = require('uuid');
const cors = require('cors')

const CLIENT_URL = 'http://localhost:3000/profile'
const LOGIN_URL = 'http://localhost:3000/login'
const pass = 'chxllzGhGCWO5teH';
const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'

//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Auth and Devs Connected')})


//middleware for cross origin fetch requests::
app.use(cors())






//todo-> failing the auth redirects
router.get('/login/failed', (req, res)=>{
    res.status(401).json({
        success: false,
        message: 'failure',
    })
})


//todo-> searching dev by id
router.get('/dev/:id', (req, res)=>{
    let str = uuid().split('-')[0]
    try{
        res.status(200).json({message: str});
    }catch(err){
        res.status(500).json({message: err.message});
    }
})


//todo-> getting all dev (development only)
router.get('/all', async (req, res)=>{
    try{
        let devs = await Devs.find();
        res.status(200).json(devs)
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

//todo-> searching a category
router.get('/category/:category', async (req, res)=>{
    try {
        let devs = await Devs.find({category: req.params.category})
        if(devs){
            res.status(200).json(devs)
        }else{
            res.status(404).json({message: "Dev of category not found!"});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})
//todo-> deleting a dev
router.delete('/dev/:id', getDevs, async (req, res)=>{
    try{
        await res.dev.remove()
        res.status(200).json({message: "Dev has been removed Successfully!"});
    }catch(err){
        res.status(500).json({message: err.message});
    }

})


//todo-> successful of  redirected
router.get('/login/success', async (req, res)=>{
    if(req.user){
        const dev = new Devs({
            name: req.user.displayName,
            pfp: req.user.photos[0].value,
            email: req.user._json.email,
            status: {
                project_id: "",
                onproject: false
            },
            _id: uuid().split('-')[0],
            category: ['unreal', 'blender', 'unity', 'shark'],
            projects: []
        })
        try{
            let isDev =  await Devs.findOne(dev)
            if(isDev === null) {
                const newDev = await dev.save()
                console.log(newDev);
                if(newDev) res.status(200).json(newDev);
                else res.status(501).json({message: "Something went wrong !"});
            }
            else{
                res.status(404).json({message: "Cannot add as the user already exists!"});
            }
            
            // res.render('profile', {data:{
            //     success: true,
            //     message: 'successful',
            //     user: req.user,
            //     }});
            // res.status(201).json(newDev);
        }catch(err){
            res.status(500).json({message: err.message});
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


async function getDevs(req, res, next){
    console.log(req.params.id);
    let dev;
    try{
        dev = await Devs.findById(req.params.id)
        if(dev == null){
            return res.status(404).json({message: "Cannot find Project!"});
        }
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    res.dev = dev
    next();
}



module.exports = router;