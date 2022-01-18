const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = 'http://localhost:3000/profile'
const LOGIN_URL = 'http://localhost:3000/login'


//failing the auth redirects
router.get('/login/failed', (req, res)=>{
    res.status(401).json({
        success: false,
        message: 'failure',
    })
})


//successful of  redirected //todo
router.get('/login/success', (req, res)=>{
    if(req.user){
        console.log(req.user);
        res.render('profile', {data:{
            success: true,
            message: 'successful',
            user: req.user,
            }
        })
    }
})

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect(LOGIN_URL);
})

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/auth/login/success',
    failureRedirect: '/login/failed'
}))

module.exports = router;