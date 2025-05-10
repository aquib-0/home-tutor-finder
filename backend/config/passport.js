const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const dotenv = require('dotenv');
// const { createUser } = require('../controllers/userController');
const {createUserData} = require('../controllers/userController');

dotenv.config();

passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: 'User not found' });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Invalid password' });
  
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
  

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: "/auth/google/callback",
//         },
//         async (accessToken, refreshToken, profile, done) =>{
//             const {id, displayName, emails} = profile;
//             try{
//                 let user = await User.findOne({googleId: id});

//                 if(!user){
//                     user = await createUserData({
//                         email: emails[0].value,
//                         username: displayName,
//                         googleId: id,
//                     });
//                 }
//                 return done(null, user);

//             } catch(err){
//                 return done(err, null);
//             }
//         }
//     )
// );

//save user id into session
// passport.serializeUser((user, done)=>{
//     done(null, user.id);
// })

// //get full user back from session
// passport.deserializeUser(async(id, done)=>{
//     try{
//         const user = await User.findById(id);
//         done(null, user);

//     } catch(err){
//         done(err, null);
//     }
// });