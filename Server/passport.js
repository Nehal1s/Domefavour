const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = "777782408891-477dlp3oih68ga0al1cm1akpmfd5290l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
        done(null, profile);
        // mongodb
        const user = {
            username: profile.displayName,
            avatar: profile.photo[0],
            email: profile.email
        }
  }
));

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    done(null, user);
})