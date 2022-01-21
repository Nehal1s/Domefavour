//Google passport
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//github passport
const GithubStrategy = require("passport-github2").Strategy;

const passport = require('passport')

//Google secret keys
const GOOGLE_CLIENT_ID = "777782408891-sb2lbjurhaoam6flkc0qlatt14l9gfno.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "MdqgErLdxxMAshFNPFbOUIee";


//Github Secrete keys
const GITHUB_CLIENT_ID = "Iv1.012a01e0334acdf1"
const GITHUB_CLIENT_SECRET = "7871b2926f403f32e1b07f44a7f80a385c8cc890";


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
        done(null, profile);
        // mongodb
  }
));


passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    done(null, user);
})